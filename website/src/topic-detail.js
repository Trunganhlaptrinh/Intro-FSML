function applyTopicLanguage(language) {
  const lang = language === 'vi' ? 'vi' : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-vi]').forEach((node) => {
    node.textContent = node.dataset[lang];
  });
}

applyTopicLanguage('en');
window.addEventListener('message', (event) => {
  if (event.source !== window.parent || event.origin !== window.location.origin) return;
  if (event.data?.type !== 'smart-lab-language') return;
  if (event.data.language !== 'en' && event.data.language !== 'vi') return;
  applyTopicLanguage(event.data.language);
});
