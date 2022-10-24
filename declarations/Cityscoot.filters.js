export function unifyEmailProtectedAddresses(document) {
  [...document.querySelectorAll("a[href^='/cdn-cgi/l/email-protection']")].forEach(link => {
    link.innerHTML = '[email&#160;protected]';
  });
}
