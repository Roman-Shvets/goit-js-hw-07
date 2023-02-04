import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCollection = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryCollection.addEventListener('click', onGalleryItemClick)
galleryCollection.insertAdjacentHTML('beforeend', galleryMarkup);


function createGallery(imageArray) {
return imageArray.map(({ preview, original, description }) => {
return`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('');
}


function onGalleryItemClick(event) {
event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    const imagePath = event.target.closest('.gallery__item').href;
    const lightbox = new SimpleLightbox('.gallery a',
    {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
    });
    
    lightbox.open(imagePath);
}

console.log(galleryItems);
