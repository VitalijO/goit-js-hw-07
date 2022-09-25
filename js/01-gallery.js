import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEls = document.querySelector('.gallery');
const markupGaleryEls = createMarkupGalleryEls(galleryItems) 
galleryEls.insertAdjacentHTML('beforeend', markupGaleryEls)

function createMarkupGalleryEls(elements) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    })
    .join('');
}

galleryEls.addEventListener('click', onElHandleClick)

function onElHandleClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image'))return;  
    const selectedEl = e.target.dataset.source
    const instance = basicLightbox.create(` <img class ="modal-img" src= "${selectedEl}"/>`) 
    instance.show() 
    const visible = basicLightbox.visible()
    if (visible) {
        document.addEventListener("keydown", function onCloseEscMod(e) {
        if (e.key !== 'Escape') return
        instance.close()    
        document.removeEventListener("keydown",onCloseEscMod)    
    })
    }
    
}

 
