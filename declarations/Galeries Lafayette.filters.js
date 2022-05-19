import { wrapLinks } from 'links-finder'

/**
* Because of the presence of a <p> inside <hx> there is unnecessary spaces in markdown
* DOM Source:
* <h2 class="delivery-title">
* <a name="SCItemConditions2"><p>ARTICLE I. OBJET</p></a>
* </h2>
**/
export function removeTitlesWhiteSpaces(document) {
    document.querySelectorAll(".delivery-title").forEach(el => {
        if (el.textContent.trim().length) {
            el.innerHTML = el.textContent.trim()
        }
    })
}

/**
 * delete all `<sup>></sup>` (from some buttons "Retour en haut de la page")
 * @param { Document } document
 */
export function deleteReturnToTheTop(document) {
    document.querySelectorAll("sup").forEach(el => {
        if (el.textContent === '>') {
            el.remove()
        }
    })
}

/**
 * i.e: "Données personnelles"
 * @param { Document } document
 */
export function addTableHeader(document) {
    document.querySelectorAll("tr:nth-child(1)[style=\"background-color: #bcbcbc;\"] td").forEach(el => {
        const th = document.createElement("th")
        th.textContent = el.textContent
        el.replaceWith(th)
    })
}

export function addTableHeaderOnCommercialTerms(document) {
    document.querySelectorAll("tr:nth-child(1) td").forEach(el => {
        const th = document.createElement("th")
        th.textContent = el.textContent
        el.replaceWith(th)
    })
}

/**
 * some <h2> tags => <h3>
 **/
export function commercialTermsTableH2toH3(document) {
    document.querySelectorAll("h2:not(.delivery-title)").forEach(el => {
        const h3 = document.createElement("h3")
        h3.textContent = el.textContent
        el.replaceWith(h3)
    })
}

/**
 * merge two <table>s
 * @param { Document } document
 */
 export function mergeTables(document) {
    const firstTable = document.querySelector("table")
    const lastTr = firstTable.firstElementChild.lastChild;

    document.querySelectorAll("table:nth-of-type(2) tr").forEach(el => {
        lastTr.after(el)
    })
}

/**
 * In table of contents, remove all empty items
 * ```markdown
 * *   [](#SCItemConfidenceIntro)
 * ```
 * @param { Document } document
 */
export function removeEmptyItemsInTOC(document) {
    document.querySelectorAll(".faqQuestion a").forEach(el => {
        if (el.textContent === "") {
            el.remove()
        }
    })
}

/**
 * Find (external) links and add it
 * ```markdown
 * ● https://www.cofinoga.fr/carte-GL-mastercard
 * =>
 * ● [https://www.cofinoga.fr/carte-GL-mastercard](https://www.cofinoga.fr/carte-GL-mastercard)
 * ```
 * @param { Document } document
 */
export function addExternalLinks(document) {
    document.querySelectorAll("p").forEach(el => {
        el.innerHTML = wrapLinks(el.textContent, {
            onMatch: (link) => {
                if (link.includes('https://')) {
                    return `<a href=${link}>${link}</a>`
                }
                return link
            }
        })
    })
}

/**
 * Set title <h4> for 10.1, 10.2, 10.3
 * => ### 10.2 Quelles informations collectent les cookies ?
 */
export function setTitleH4(document) {
    document.querySelectorAll(".delivery-title + p").forEach(el => {
        if (el.textContent.search(/\d+\.\d+ /g) !== -1) {
            const h3 = document.createElement("h3")
            h3.textContent = el.textContent
            el.replaceWith(h3)
        }
    })
}
