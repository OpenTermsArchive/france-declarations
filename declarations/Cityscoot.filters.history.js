export const stopImagesSourcesBlinking = [
  {
    validUntil: '2022-09-20T12:29:40Z',
    filter: function unifyEmailProtectedAddresses(document) {
      [...document.querySelectorAll("a[href^='/cdn-cgi/l/email-protection']")].forEach(link => {
        link.parentNode.innerHTML = link.parentNode.innerHTML.replace(/<a href="\/cdn-cgi\/l\/email-protection" [^>]+>\[email&#160;protected\]<\/a>[cityscoot.eu]*/gmi, '[email&#160;protected]');
      });
    },
  },
];
