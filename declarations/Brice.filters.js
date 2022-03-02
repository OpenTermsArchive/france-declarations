export function removeHrefBlink(document) {
  const regex =
    /(https:\/\/www\.brice\.fr\/on\/demandware\.static\/-\/Sites-Brice-SFRA-Library\/fr_FR\/v)[0-9]+(\/cgv\/formulaire-de-retractation\.pdf)/i;

  document.querySelectorAll("a").forEach((el) => {
    const href = el.href;
    el.href = href.replace(regex, "$1removed$2");
  });
}
