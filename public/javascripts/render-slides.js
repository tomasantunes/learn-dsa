// Check if URL contains "pt"
var spoiler_title = "";
if (window.location.pathname.includes('/pt/')) {
  spoiler_title = "Solução";
}
else {
  spoiler_title = "Solution";
}

function normalizeIndent(md) {
  const lines = md.replace(/\t/g, '    ').split('\n');
  const nonEmpty = lines.filter(l => l.trim().length);
  if (!nonEmpty.length) return md;

  const minIndent = Math.min(
    ...nonEmpty.map(l => l.match(/^ */)[0].length)
  );

  return lines.map(l => l.slice(minIndent)).join('\n');
}

/* ---------------- Spoiler toggle ---------------- */

document.addEventListener('click', e => {
  if (!e.target.classList.contains('spoiler-toggle')) return;

  const block = e.target.closest('.spoiler-block');
  if (!block) return;

  block.classList.toggle('open');
  const isOpen = block.classList.contains('open');

  e.target.textContent = spoiler_title;

  e.target.setAttribute('aria-expanded', String(isOpen));
});

/* ---------------- Slides ---------------- */

$(function () {
  const slides = $('.slide');
  const total = slides.length;
  let index = 0;

  $('#total').text(total);

  $('.markdown').each(function () {
    let md = $(this)
      .find('script[type="text/markdown"]')
      .text();

    md = normalizeIndent(md);

    /* ---------- Extract MERMAID FIRST ---------- */

    const mermaidBlocks = [];
    md = md.replace(
      /mermaid\s*\n([\s\S]*?)\/mermaid/g,
      (_, code) => {
        const id = 'mermaid-' + crypto.randomUUID();
        mermaidBlocks.push({ id, code });
        console.log(code);
        return `<!--MERMAID:${id}-->`;
      }
    );

    /* ---------- Extract CODE blocks ---------- */

    const codeBlocks = [];
    md = md.replace(
      /```\n([\s\S]*?)```/g,
      (_, code) => {
        const id = 'code-' + crypto.randomUUID();
        codeBlocks.push({ id, code });
        return `<!--CODE:${id}-->`;
      }
    );

    /* ---------- Extract SPOILERS ---------- */

    const spoilerBlocks = [];
    md = md.replace(
      /spoiler([\s\S]*?)\/spoiler/g,
      (_, code) => {
        const id = 'spoiler-' + crypto.randomUUID();
        spoilerBlocks.push({ id, code: code });
        return `<!--SPOILER:${id}-->`;
      }
    );

    /* ---------- Markdown → HTML ---------- */

    let html = marked.parse(md);

    /* ---------- Restore MERMAID ---------- */

    mermaidBlocks.forEach(b => {
      console.log(b.code);
      html = html.replace(
        `<!--MERMAID:${b.id}-->`,
        `<div class="mermaid" id="${b.id}">${b.code}</div>`
      );
    });

    /* ---------- Restore SPOILERS ---------- */

    spoilerBlocks.forEach(b => {
      const inner = marked.parse(b.code);
      html = html.replace(
        `<!--SPOILER:${b.id}-->`,
        `
        <div class="spoiler-block">
          <button class="spoiler-toggle" aria-expanded="false">
            ${spoiler_title}
          </button>
          <div class="spoiler-content">
            ${inner}
          </div>
        </div>
        `
      );
    });

    /* ---------- Restore CODE ---------- */
    codeBlocks.forEach(b => {
      const escaped = b.code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      html = html.replace(
        `<!--CODE:${b.id}-->`,
        `<pre><code>${escaped}</code></pre>`
      );
    });

    $(this).html(html);
  });

  /* ---------- Mermaid ---------- */

  mermaid.initialize({ startOnLoad: false });

  function updateUI() {
    slides.removeClass('active');
    const activeSlide = slides.eq(index).addClass('active');

    $('#current').text(index + 1);
    $('#progress').css('width', ((index + 1) / total) * 100 + '%');

    const diagrams = activeSlide.find('.mermaid');
    if (diagrams.length) {
      mermaid.run({ nodes: diagrams.toArray() });
    }
  }

  $('#next').on('click', () => index < total - 1 && (++index, updateUI()));
  $('#prev').on('click', () => index > 0 && (--index, updateUI()));

  $(document).on('keydown', e => {
    if (e.key === 'ArrowRight') $('#next').click();
    if (e.key === 'ArrowLeft') $('#prev').click();
  });

  updateUI();
});
