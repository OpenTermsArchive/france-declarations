export function removeJavascriptLinks(document) {
  document.querySelectorAll('a[href^="javascript:"]').forEach(el => {
    el.removeAttribute('href');
  });
}
