export function removeEmptyLinks(document) {
  Array.from(document.querySelectorAll('[href=""]')).map((link) =>
    link.removeAttribute("href")
  );
}
