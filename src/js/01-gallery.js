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



gallery.addEventListener('click', event => {
	event.preventDefault()
	if (event.target.tagName === 'IMG') {
		const instance = basicLightbox.create(
			`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}">`,
			{
				onClose: instance => {
					gallery.removeEventListener('keydown', onEscapePress)
				},
			}
		)

		const onEscapePress = event => {
			if (event.key === 'Escape') {
				instance.close()
			}
		}
		instance.show()
		gallery.addEventListener('keydown', onEscapePress)
	}
})
