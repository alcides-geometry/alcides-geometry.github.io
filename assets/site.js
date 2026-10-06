(() => {
  document.documentElement.classList.add('js');
  const english = document.documentElement.lang.startsWith('en');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    const close = () => { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); } });
    menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
    window.matchMedia('(min-width: 1151px)').addEventListener('change', close);
  }
  const search = document.getElementById('search');
  if (search) {
    let filter = 'todos';
    const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const entries = [...document.querySelectorAll('.publication')];
    const groups = [...document.querySelectorAll('.publication-group')];
    const filters = [...document.querySelectorAll('[data-filter]')];
    const apply = () => {
      const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
      let count = 0;
      for (const entry of entries) {
        const text = normalize(entry.textContent + ' ' + entry.closest('section').querySelector('h2').textContent);
        const visible = (filter === 'todos' || filter === entry.dataset.kind) && terms.every(term => text.includes(term));
        entry.hidden = !visible;
        if (visible) count++;
      }
      for (const group of groups) group.hidden = ![...group.querySelectorAll('.publication')].some(entry => !entry.hidden);
      document.getElementById('no-results').hidden = count !== 0;
      document.querySelector('.results-count').textContent = `${count} ${english ? (count === 1 ? 'result found' : 'results found') : (count === 1 ? 'registro encontrado' : 'registros encontrados')}`;
    };
    search.addEventListener('input', apply);
    for (const button of filters) button.addEventListener('click', () => {
      filter = button.dataset.filter;
      for (const item of filters) item.setAttribute('aria-pressed', String(item === button));
      apply();
    });
    apply();
  }
  const talk = document.querySelector('[data-talk-date]');
  if (talk && Date.now() > Date.parse(talk.dataset.talkDate) + 2 * 60 * 60 * 1000) {
    document.getElementById('talk-status').textContent = english ? 'Past date' : 'Data passada';
  }
})();
