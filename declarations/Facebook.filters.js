export function removeEmptyAnchorsLinks(document) {
  Array.from(document.querySelectorAll('[href="#"]')).map((link) =>
    link.removeAttribute("href")
  );
}
export function removeTrackingIDs(document) {
  document.querySelectorAll("a").forEach((el) => {
    const href = el.getAttribute("href");
    const params = new URLSearchParams(href);
    if (params.has("h")) {
      params.delete("h");
      el.setAttribute("href", params.toString());
    }
  });
}
