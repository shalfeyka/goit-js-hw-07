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
alt = ${item.description}/>
</a>
</div>`).join('');
console.log(listImages)
imgGallery.innerHTML = listImages;
let lightbox = new SimpleLightbox('.gallery a', {captions: true, captionSelector: 'img', captionsData: 'alt', captionDelay: 250});
