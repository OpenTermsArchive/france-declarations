export function removeHrefBlink(document) {
  const regex =
    /(https:\/\/www\.b-z-b\.com\/on\/demandware\.static\/-\/Sites-Bizzbee-SFRA-Library\/fr_FR\/v)[0-9]+(\/cgv\/FormulairedeRetractation\.docx)/i;

  document.querySelectorAll("a").forEach((el) => {
    const href = el.href;
    el.href = href.replace(regex, "$1removed$2");
  });
}
