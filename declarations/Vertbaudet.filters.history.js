export const stopImagesSourcesBlinking = [
  {
    validUntil: '2022-02-23T13:35:03+01:00',
    filter(document) {
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
    },
  },
];
