
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

    const lightbox = new SimpleLightbox('.gallery a', {
        captions: 'true',
        captionsData: 'alt',
        captionsDelay: 250
    });

export function createMurkup(data) {
  const gallery = document.querySelector('.gallery');
  
  let images = data.hits.map((image) => 
    `<div class="gallery-item" >
      <a class="gallery-link" href="${image.largeImageURL}">
      <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
      />
      </a>
      <div class="item-text">
        <div><h5 class="top-item-text">Likes:</h5> <p class="numbers"> ${image.likes}</p>
        </div>
        <div> <h5 class="top-item-text">Views:</h5>
        <p class="numbers"> ${image.views}</p>
        </div>
        <div> <h5 class="top-item-text">Comments:</h5>
        <p class="numbers"> ${image.comments}</p>
        </div>
        <div><h5 class="top-item-text">Downloads:</h5>
        <p class="numbers"> ${image.downloads}</p>
        </div>
      </div>
    </div>`)
  .join('');

  gallery.insertAdjacentHTML('beforeend', images);
  lightbox.refresh();
}

export function clearMurkup() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = "";
}


