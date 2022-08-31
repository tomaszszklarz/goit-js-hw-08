// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const fotos = galleryItems.map((foto) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${foto.original}">
            <img
                class="gallery__image"
                src="${foto.preview}"
                data-source="${foto.original}"
                alt="${foto.description}"
            />
        </a>
    </div>`).join("");
gallery.innerHTML = fotos;
gallery.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('data-source');
    const instance = basicLightbox.create(`<img src="${target}" width="800" height="600">`);
    instance.show();
    gallery.addEventListener('keydown', (e) => {
        if (e['key'] === 'Escape') {
            instance.close();
        }
    })
});
console.log(galleryItems);
