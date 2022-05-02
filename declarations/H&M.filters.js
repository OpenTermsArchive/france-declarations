/**
 * @param { Document } document 
 */
export function addTitles(document) {
  document.querySelectorAll('b').forEach(el => {
    if (el.textContent.includes('.')) {
      // h2 is already used
      const h3 = document.createElement("h3")
      h3.textContent = el.textContent
      el.replaceWith(h3)
    }
  })
}

/**
 * @param { Document } document 
 */
export function fixBrTag(document) {
  document.querySelectorAll('i, b').forEach(el => {
    if (el.innerHTML.includes('<br>')) {
      el.innerHTML = el.innerHTML.replace('<br>', '')
      // and then
      el.after(document.createElement("br"))
    }
  })
}