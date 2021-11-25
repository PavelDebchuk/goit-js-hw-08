
import { galleryItems } from './gallery-items'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);

const galeryContainer = document.querySelector('.gallery');
const cardGalery = createGalery('galery');
galeryContainer.insertAdjacentHTML('beforeend', cardGalery);

function createGalery (galery) {
  return galleryItems.map(({preview, original, description}) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}"> 
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </li>
    `;
  })
  .join('');
  return markup;
}

const folsA = document.querySelector('.gallery');
folsA.addEventListener("click", noLink);

  function noLink(events) {
    events.preventDefault();
  };

const listLi = document.querySelector('.gallery');
listLi.style.listStyleType = "none";

  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {

  });