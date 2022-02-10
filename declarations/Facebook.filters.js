export function removeReturnToTopButtons(document) {
  document.querySelectorAll("._t3o").forEach((element) => element.remove());
}

export function cleanUrls(document) {
  Array.from(document.querySelectorAll('[href="#"]')).map((link) =>
    link.removeAttribute("href")
  );
  const links = document.querySelectorAll(
    '[href*="https://l.facebook.com/l.php?"],[href*="http://l.facebook.com/l.php?"]'
  );

  links.forEach((link) => {
    link.href = decodeURIComponent(
      link.href.replace(/&h=\S*/, "").replace(/(\S*)\?u=(\S*)/, "$2")
    );
  });
}
