/**
 * Replace:
 * <a href="https://getalma.eu/customers" target="_blank">
 *   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAABUCAMAAAA7+WxqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcd3d3QQnNv///9/f397e3t3d3d/f39/f39vd3t/f3/9BTf+IkP9YY+Dk5mJ4gfHy8iZEUUVfaoGTmv7+/rrEyKCus5Ggp+Pj46GutBQ0Q3GFjv+iqP/Dx5u8G0cAAAAKdFJOUwCP//9bMJD+1PTkx1LyAAACoUlEQVRo3u2b4bKbIBCFU4iJcFuyIoia9v1fsyJIVi+3483gDHY4vzTZOfnCsivJwOWyqLrVjGcjVt+qy1bXmmen+rpCrCwigKLZSAH0EyYazSvjPdDsNGGyMJjXaRQVzVAK+N1TVowDzVMTJXMZr7NltCnntUt2r7JlVKqfE571QPqhrHhPsxa/V5db3gNph/JH7tl2+WZc5Q2pOLtwTmnuk7JAFsgCWSAjEsSqK5AFskAWyALpmYZ2kmZRSGE1rZ+ZsTE+QE83RsdcBnYI5NAQr6aLQM7vdkKikHbcxFtsGVxMesgHQWogDtmGL0Ja8bomC49au4jEkE+ykoxDjigEXxMddWnSQg5kIx2F/FLuS+nty11SSDeTnhpAP16fGoFsjNYhp3LQyxy080O568fGJRUkOHcEPMYhJc7qHO/JbJBCLn52poQUDyvfNUyw/wwp0Fz1NzqUDswufnp2KCRpM4e5Gf4DcqkEnEsX1MZdEkNCK1f1GoWUGNLPDoUhty7iyBb0JqQZNy5JIVuSAvKzS0pIQVJARlxSQrohkFqI0NjfgOywS/rqlrh023chn9jFHAMpV0+fF6TZCen6tw/xPT4l5Gw/Aq6hF2QzrzD3jqR3MennpAnPZSNR4VDyev7tgIy4pISEeHX7zO+FhPHQ6l718mYMkPpbkEuOkctRT5zGLblxpe+FRN28Yc0Bz279sK6jNECfdjETflZNd7YJzS8uy4h5udMtPxnQ2mfrAmkhy/+TBbJAFsgCeXLIX8fpdzLIj+NUIAvk/wv58zj9Kc28QBbIoyBPsQ3sFBvqTrE1scp9Uvb36hzbZfPeeEz9xuOsh1L5Ldw5b4anYTP8KY4VnOOAhjvq0ud01EUpAL4+6nKOQ0PZHb+6r45f/QUo2+cJdHSpjgAAAABJRU5ErkJggg==" alt="Paiement en 3x sans frais par carte bancaire" width="55">
 * </a>
 * by:
 * Alma
 */
export function replaceAlmaLink(document) {
  const newNode = document.createTextNode("Alma");
  const almaLink = document.querySelector('a[href="https://getalma.eu/customers"]');
  almaLink.removeAttribute("href");
  almaLink.replaceChild(newNode, almaLink.childNodes[0]);
}
