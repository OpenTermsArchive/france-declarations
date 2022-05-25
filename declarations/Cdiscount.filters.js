// Empirical research on previous noise changes shows us that two or three replacement characters (�, with html code \uFFFD) are used randomly
const encodingGlitch = '\uFFFD\uFFFD\uFFFD?';
const expectedToGlitchMapping = {
  ' l’': ` l${encodingGlitch}`,
  ' d’': ` d${encodingGlitch}`,
  ' à ': ` ${encodingGlitch} `,
  ée: `${encodingGlitch}e`,
  Abonné: `Abonn${encodingGlitch}`,
  pré: `pr${encodingGlitch}`,
  réputés: `r${encodingGlitch}putés`,
};

export function recoverReplacementCharacters(document) {
  Object.keys(expectedToGlitchMapping).forEach(expected => {
    document.body.innerHTML = document.body.innerHTML.replace(new RegExp(expectedToGlitchMapping[expected], 'g'), expected);
  });
}
