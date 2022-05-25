/**
 * Alma image is blinking so we replace it with text
 * DOM source:
 * En 3x sans frais à partir de 100 € avec
 * <a href="https://getalma.eu/customers" target="_blank">
 *   <img src="data:image/png;base64,iVBOR..." alt="Paiement en 3x sans frais par carte bancaire" width="55">
 * </a>
 * Generated content:
 * En 3x sans frais à partir de 100 € avec Alma
 */
export function replaceAlmaImageLink(document) {
  const newNode = document.createTextNode('Alma');
  const almaLink = document.querySelector('a[href="https://getalma.eu/customers"]');

  almaLink.removeAttribute('href');
  almaLink.replaceChild(newNode, almaLink.childNodes[0]);
}
