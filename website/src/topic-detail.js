function applyTopicLanguage(language) {
  const lang = language === 'vi' ? 'vi' : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-vi]').forEach((node) => {
    node.textContent = node.dataset[lang];
  });
}

applyTopicLanguage('en');
window.addEventListener('message', (event) => {
  if (event.data?.type === 'smart-lab-language') applyTopicLanguage(event.data.language);
});
