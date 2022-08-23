import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
    gallery: document.querySelector('.gallery'),
}

// * create markup
const listItemsMarcup = addGalleryListMarkup(galleryItems);

ref.gallery.innerHTML = listItemsMarcup;

function addGalleryListMarkup(items) {
    return items.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
};

//* stop <a> action
const links = document.querySelectorAll('.gallery__link');

links.forEach(link => {
    link.addEventListener('click', stopDefAction, false);
});

function stopDefAction(e) {
    e.preventDefault(); 
};

// * show large img
ref.gallery.addEventListener('click', selectImg);
let instance = '';

function selectImg(e) {
    if (e.target.nodeName !== 'IMG') {
       return 
    }
    
    const selectedSourse = e.target.dataset.source;

    instance = basicLightbox.create(`
    <img src="${selectedSourse}" width="800" height="600">`);

    instance.show() 
};

// * close with Escape
document.addEventListener('keydown', closeWithEscape);

function closeWithEscape({code}) {
    if (!document.querySelector('.basicLightbox--visible')) {
        return
    }

    if (code === 'Escape') {
        instance.close();
    }
};