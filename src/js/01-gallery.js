import { galleryItems } from './gallery-items.js'
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector('.gallery')

const imagesHTML = galleryItems.map(({ preview, original, description }) => {
	return `<div class='gallery__item'>
	  <a class='gallery__link' href='${original}'>
		<img class='gallery__image' src='${preview}' data-source='${original}' alt='${description}' />
	  </a>
	</div>`
})
gallery.insertAdjacentHTML('beforeend', imagesHTML.join(''))

const lightbox = new SimpleLightbox('.gallery a', {
	loop: true,
	captionsData: 'alt',
	captionDelay: 250,
	docClose: true,
	alertErrorMessage: 'Image not found, next image will be loaded'
  });