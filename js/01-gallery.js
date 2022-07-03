import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imgGallery = document.querySelector('.gallery');
console.log(imgGallery);

const listImages = galleryItems
 .map(item => `<div class='gallery__item'>
<a class="gallery__link" href=${item.original}>
<img class='gallery__image'
src = ${item.preview}
data-source = ${item.original}
alt = ${item.description} />
</a>
</div>`).join('');

imgGallery.innerHTML = listImages;

imgGallery.addEventListener('click', showModal);

function showModal (event) {
const link = getLinkOriginalImage(event);
const instance = basicLightbox.create(`<img src=${link} width = "800" height ="600">`);
instance.show(window.addEventListener('keydown', isEscapeDown));
function isEscapeDown (evt) { if (evt.code === 'Escape'){
instance.close(window.removeEventListener('keydown', isEscapeDown));        
        };
    }
}
function getLinkOriginalImage(event) {
if (event.target.nodeName !== 'IMG'){
     return;
}
    
event.preventDefault();
const linkImagePreview = event.target;
const linkImageOriginal = galleryItems.find(item => item.preview === linkImagePreview.src).original;
    
return linkImageOriginal;
}