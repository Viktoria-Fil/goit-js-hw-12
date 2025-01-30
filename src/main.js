
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import'simplelightbox/dist/simple-lightbox.min.css';

import  getPictures from './js/pixabay-api';
import createMurkup from './js/render-functions';


const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    animation: 250,
    widthRatio: 0.8,
    scaleImageToRatio: true,
  });

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    showLoader();

    const query = e.target.elements.query.value.trim();
    if (!query) {
        showLoader();
        hideLoader();
        iziToast.warning({
            title: "Caution",
            message: "Please add request",
            messageSize: '16px',
            position: 'center',
            color: 'black'
        });
        return
    }




getPictures(query)
    .then(data => {
        showLoader();
        hideLoader();
        if (!data.hits.length) {
            iziToast.info({
                title: '!',
                message: "Sorry, there are no images matching your search query. Please try again!",
                messageSize: '16px',
                position: 'center',
                backgroundColor: 'red'
            });
            hideLoader();
        }
        else {
            gallery.innerHTML = '';
            render(data.hits);
           
            
        }
    })
    .catch(error => {
        showLoader()
        iziToast.error({
            title: "Error",
            message: `Please add request`,
            messageSize: '16px',
            position: 'center',
            backgroundColor: '#EF4040',
        })
        hideLoader();
        gallery.innerHTML = '';
    })
    .finally(() => {
        e.target.reset();
    });
})

function render(hits) {
    const murkup = createMurkup(hits);
    gallery.insertAdjacentHTML('beforeend', murkup);
    lightbox.refresh();
}




const showLoader = () => {
    loader.classList.remove('hidden')
};

   const hideLoader = () => {
  loader.classList.add('hidden');
}; 