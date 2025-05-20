// Remove all accordion links from titles
// ie: remove #accordion-item-section--2055481788 on titles
export function removeAccordionLinks(document) {
  document.querySelectorAll('[data-toggle="collapse"]').forEach(aElement => {
    aElement.removeAttribute('href');
  });
}
