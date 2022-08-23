import { galleryItems } from './gallery-items.js';
// Change code below this line
//* create markup
const ref = {
    gallery: document.querySelector('.gallery'),
};

const listItemsMarkup = addGalleryListMarkup(galleryItems);

ref.gallery.innerHTML = listItemsMarkup;

function addGalleryListMarkup(items) {
    return items.map(item => 
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('')
 };

 //* use simplelight-box
const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });