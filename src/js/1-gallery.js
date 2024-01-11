import {images} from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

function createGallery(images) {
  const galleryItems = images.map(image => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    const elementLink = document.createElement('a');
    elementLink.classList.add('gallery-link');
    elementLink.href = image.original;

    elementLink.addEventListener('click', function (event) {
      event.preventDefault();
    });

    const imageElement = document.createElement('img');
    imageElement.classList.add('gallery-image');
    imageElement.src = image.preview;
    imageElement.alt = image.description;

    listItem.appendChild(elementLink);
    elementLink.appendChild(imageElement);
    
    return listItem;
  });

  galleryList.append(...galleryItems);
}

createGallery(images);

const galleryBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  fadeSpeed: 250,

  captionPosition: "bottom",
  enableKeyboard: true,
  close: true,
  closeText: "x",
});





