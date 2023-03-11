
// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(`.gallery`);
//
const addGallaryItem = images => {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            alt=${description}
          />
        </a>`;
    })
    .join(``);
};
gallery.insertAdjacentHTML(`beforeend`, addGallaryItem(galleryItems));
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});