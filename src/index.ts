document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.theme-switcher')?.addEventListener('click', () => {
    const theme = document.querySelector('html').dataset.theme;
    document.querySelector('html').dataset.theme =
      theme === 'dark' ? 'light' : 'dark';
  });
});
