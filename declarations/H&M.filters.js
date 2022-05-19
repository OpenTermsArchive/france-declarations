export function fixBrTag(document) {
  document.querySelectorAll('i, b').forEach(el => {
    if (el.innerHTML.includes('<br>')) {
      el.innerHTML = el.innerHTML.replace('<br>', '');
      el.after(document.createElement('br'));
    }
  });
}
