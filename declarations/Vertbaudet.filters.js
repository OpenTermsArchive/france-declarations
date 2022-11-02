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

export function stopImagesSourcesBlinking(document) {
  const regexFRZ = /\?frz-v=(.*)/gm;
  const volumineuxImageURL = 'https://media.vertbaudet.fr/medias/44/0/26809/1304986041/volumineux.png';

  document.querySelectorAll('img[src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="]').forEach(el => {
    el.setAttribute('src', volumineuxImageURL);
  });

  document.querySelectorAll('img').forEach(image => {
    const srcWithoutFRZQueryParam = image.getAttribute('src').replace(regexFRZ, '');

    image.setAttribute('src', srcWithoutFRZQueryParam);

    if (image.getAttribute('src').startsWith('https://www.vertbaudet.fr/fstrz')) {
      const cleanedURL = image.getAttribute('src').replace(/https:\/\/www\.vertbaudet\.fr\/fstrz\/.*?\/media\.vertbaudet\.fr/gmi, 'https://media.vertbaudet.fr');

      image.setAttribute('src', cleanedURL);
    }

    if (image.getAttribute('src').endsWith('/volumineux.png')) {
      image.setAttribute('src', volumineuxImageURL);
    }
  });
}
