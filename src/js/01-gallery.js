import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const createEL = createCards(galleryItems);

gallery.insertAdjacentHTML('beforeend', createEL)

function createCards(){
  return galleryItems.map(({original,preview,description}) => {
    return`
    <div class="gallery__item">
    <a href="${original}" class="gallery__link" rel="noreferrer noopener">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>
    </div>
    `
  }).join("")
}

gallery.innerHTML = createEL;

gallery.addEventListener('click', onLinkClick);

function onLinkClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${event.target.dataset.source}">
  `)
  instance.show();
  instance.element().addEventListener('keydown', onEscPress);

  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);