export function removeJavascriptLinks(document) {
  document.querySelectorAll('a[href^="javascript:"]').forEach(el => {
    el.removeAttribute('href');
  });
}
export function removeFRZQueryParam(document) {
  removeQueryParam(document, 'frz-v');
}

function removeQueryParam(document, queryParam) {
  document.querySelectorAll('a').forEach(el => {
    const href = el.getAttribute('href');
    const params = new URLSearchParams(href);

    if (params.has(queryParam)) {
      params.delete(queryParam);
      el.setAttribute('href', params.toString());
    }
  });
}
