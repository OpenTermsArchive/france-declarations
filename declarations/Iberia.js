export function setpreviousVersionsLink(document) {
    document.querySelectorAll("a[title][data-contenttype]").forEach(aElement => {
        const modalTitle = aElement.getAttribute("title")
        const contenttype = aElement.getAttribute("data-contenttype")
        const contentorigin = aElement.getAttribute("data-contentorigin")
        const contentid = aElement.getAttribute("data-contentid")

        const params = new URLSearchParams()
        params.set("pagename", "IB_SE/CacheControl6h/BrowserCache3600/Page/ShowModal");
        params.set("locale", "fr")
        params.set("market", "FR")
        params.set("assettype", contenttype)
        params.set("assetid", contentid)
        params.set("origin", contentorigin)
        params.set("modalTitle", modalTitle)
        params.set("url", "#")
        params.set("d", "")

        aElement.setAttribute("href", "https://www.iberia.com/cs/Satellite?" + params.toString());
    })
}

export function removeAccordionsLinks(document) {
    Array.from(document.querySelectorAll('[href="#"]')).map((link) =>
        link.removeAttribute("href")
    );
}
