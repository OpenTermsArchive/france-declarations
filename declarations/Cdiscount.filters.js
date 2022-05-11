export function recoverReplacementCharacters(document) {
  // Empirical search on previous noise changes shows us that two replacements characters
  // were used for a `ê` and three were used for a `’`
  document.body.innerHTML = document.body.innerHTML.replace(
    /\uFFFD\uFFFD\uFFFD/g,
    '’',
  );
  document.body.innerHTML = document.body.innerHTML.replace(
    /\uFFFD\uFFFD/g,
    'ê',
  );
}
