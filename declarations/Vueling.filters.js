/**
 * internal function
 * @param { Document } document
 */
function correctMainTitles(document) {
    document.querySelectorAll(".accordion--numbered .accordion-item label .accordion-title").forEach((el, i) => {
        /**
         * same as CSS rules:
         * ```css
         * .accordion--numbered .accordion-item:nth-child(-n+9) label:before {
         *  content: "0" counter(count) "."
         * }
         * ```
         */
        const indexForHuman = String(i+1).padStart(2, "0")

        // ? switch <h6> to <h3>
        const h3 = document.createElement("h3")
        h3.textContent = `${indexForHuman}. ${el.textContent}`
        el.replaceWith(h3)
    })
}

/**
 * In webpage: <h6> are used as <h3> and as <h4>.
 * 
 * Switch main titles to <h3> and edit text to add "<count> ." before
 * and then switch other titles to <h4>
 * 
 * @param { Document } document
 */
export function correctTitles(document) {
    correctMainTitles(document)

    // then switch others <h6> to <h4>
    document.querySelectorAll("h6").forEach(el => {
        const h4 = document.createElement("h4")
        h4.textContent = el.textContent
        el.replaceWith(h4)
    })
}

/**
 * remove "<br><br>" to avoid "   " in Markdown
 * @param { Document } document
 */
export function correctParagraphIndentation(document) {
    document.querySelectorAll(".list--col-1.list--icon-primary li").forEach(el => {
        // perf: apply only if necessary
        if (el.innerHTML.includes("<br><br>")) {
            el.innerHTML = el.innerHTML.replace("<br><br>", "")
        }
    })
}