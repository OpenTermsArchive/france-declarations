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
