export function replaceNonBreakingSpaces(document) {
  document.body.innerHTML = document.body.innerHTML.replace(
    /\u00A0/g,
    ' ',
  );
}
