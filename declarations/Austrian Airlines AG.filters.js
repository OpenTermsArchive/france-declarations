export function removeAccordionsLinks(document) {
  Array.from(document.querySelectorAll('[href^="#accordion-item-section"]')).map((link) =>
    link.removeAttribute("href")
  );
}
