// Empirical research on previous noise changes shows us that two or three replacement characters (�, with html code \uFFFD) are used randomly
const wordsReplacementMapping = {
  'pay\uFFFD\uFFFDe': 'payée',
  'l\uFFFD\uFFFDAbonnement': 'l’Abonnement',
  'l\uFFFD\uFFFD\uFFFDAbonnement': 'l’Abonnement',
  'Client Pro \uFFFD\uFFFD Cdiscount': 'Client Pro à Cdiscount',
  'court \uFFFD\uFFFD compter': 'court à compter',
  'commande d\uFFFD\uFFFDun ou plusieurs': 'commande d’un ou plusieurs',
  'par l\uFFFD\uFFFDAbonné': 'par l’Abonné',
  'par l’Abonn\uFFFD\uFFFD': 'par l’Abonné',
  'pr\uFFFD\uFFFDcommandés': 'précommandés',
};

export function recoverReplacementCharacters(document) {
  Object.keys(wordsReplacementMapping).forEach(wordToReplace => {
    document.body.innerHTML = document.body.innerHTML.replace(
      new RegExp(wordToReplace, 'g'),
      wordsReplacementMapping[wordToReplace],
    );
  });
}
