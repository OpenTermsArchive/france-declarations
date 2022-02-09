export function removeUnessecaryHrefHQueryParam(document) {
  document.querySelectorAll("a").forEach((el) => {
    const href = el.getAttribute("href");
    const params = new URLSearchParams(href);
    if (params.has("h") === true) {
      params.delete("h");
      el.setAttribute("href", params.toString());
    }
  });
}
