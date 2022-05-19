/**
 * Because of the presence of a <p> inside <hx> there is unnecessary spaces in markdown
 * DOM source:
 * <h2 class="delivery-title">
 *  <a name="SCItemConditions2">
 *   <p>ARTICLE I. OBJET</p>
 *  </a>
 * </h2>
 */
export function removeTitlesWhiteSpaces(document) {
    document.querySelectorAll(".delivery-title").forEach(el => {
        if (el.textContent.trim().length) {
            el.innerHTML = el.textContent.trim()
        }
    })
}

/**
 * Delete all `<sup>></sup>` (from some buttons "Retour en haut de la page")
 * DOM source:
 * <div style="text-align: justify;">
 *  <sup>&gt;</sup>&nbsp;
 *  <a href="#top">Retour en haut de la page</a>
 * </div>
 */
export function deleteReturnToTopOperator(document) {
    document.querySelectorAll("sup").forEach(el => {
        if (el.textContent === '>') {
            el.remove()
        }
    })
}
