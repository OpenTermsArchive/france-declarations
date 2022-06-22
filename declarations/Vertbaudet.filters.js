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
  const sourcesMapping = {
    'https://www.vertbaudet.fr/fstrz/r/s/c/media.vertbaudet.fr/medias/44/0/26809/1304986041/volumineux.png.avif': 'https://media.vertbaudet.fr/medias/44/0/26809/1304986041/volumineux.png',
    'https://www.vertbaudet.fr/fstrz/r/s/media.vertbaudet.fr/medias/44/0/26809/1304986041/tresvolumineux.svg': 'https://media.vertbaudet.fr/medias/44/0/26809/1304986041/tresvolumineux.svg',
  };
  const regexFRZ = /\?frz-v=(.*)/gm;

  document.querySelectorAll('img').forEach(image => {
    const srcWithoutFRZQueryParam = image.getAttribute('src').replace(regexFRZ, '');

    image.setAttribute('src', srcWithoutFRZQueryParam);

    Object.entries(sourcesMapping).forEach(([ value, replacement ]) => {
      if (image.getAttribute('src') === value) {
        image.setAttribute('src', replacement);
      }
    });
  });
}
