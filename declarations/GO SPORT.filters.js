import DataURIParser from 'datauri/parser.js';
import mime from 'mime';
import fetch from 'node-fetch';

const dataURI = new DataURIParser();

function extractFilename(src = '') {
    return src.substring(src.lastIndexOf('/')+1)   
}

/**
 * 
 * ? call it before call the function downloadImages
 * @param { Document } document 
 * @param { object } object 
 */
export function saveImageFilename(document, { select: selector }) {
    document.querySelectorAll(`${selector} img[src][alt='Image without a name']`).forEach(el => {
        const src = el.getAttribute("src")
        const filenameWithoutExtension = extractFilename(src).replace(/\.[^/.]+$/, "")

        // replace default alt text by filename
        el.setAttribute("alt", filenameWithoutExtension)
        el.setAttribute("title", filenameWithoutExtension)
    })
}

export async function downloadImages(document, { fetch: baseUrl, select: selector }) {
  const images = Array.from(document.querySelectorAll(`${selector} img`));

  return Promise.all(images.map(async ({ src }, index) => {
    if (src.startsWith('data:')) {
      return; // Already a data-URI, skip
    }

    const imageUrl = new URL(src, baseUrl).href; // Ensure url is absolute
    const response = await fetch(imageUrl);
    const mimeType = response.headers.get('content-type');
    const content = await response.arrayBuffer();
    const extension = mime.getExtension(mimeType);

    images[index].src = dataURI.format(extension, content).content;
  }));
}

/**
 * replace <figure><a><img> by only <img>
 * because the <a> has href="#"
 * @param { Document } document 
 */
export function removeLinkInPicture(document) {
    const figure = document.querySelector(".ITC-figure")
    figure.replaceWith(figure.querySelector("img"))
}