import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCollection = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);
let instance;

galleryCollection.addEventListener('click', onGalleryItemClick)
galleryCollection.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(imageArray) {
return imageArray.map(({ preview, original, description }) => {
  return`<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
}).join('');
}


function onGalleryItemClick(event) {
event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
  return;
  }
const imagePath = event.target.getAttribute('data-source');
  instance = basicLightbox.create(`<img src="${imagePath}" width="800" height="600">`, {
    onShow: () => { document.addEventListener("keydown", escapeHandler)},
    onClose: () => { document.removeEventListener("keydown", escapeHandler)}
  });

  instance.show();
}


function escapeHandler(event) {
  if (event.code === "Escape") {
  instance.close();
  }
}

console.log(galleryItems);
