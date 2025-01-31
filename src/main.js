import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import getPictures from './js/pixabay-api';
import {createMurkup, clearMurkup} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more-btn');
const scrollBtn = document.querySelector('.scroll-to-top');

let pageC = 1;
let queryC = "";

form.addEventListener('submit', submitBtn);
loadMore.addEventListener('click', handleLoadMore);
scrollBtn.addEventListener('click', scrollToTop);

async function submitBtn(e) {
    e.preventDefault();
    clearMurkup();
    loader.classList.remove('hidden');

    queryC = input.value.trim();
    pageC = 1;
     
    await fetchImg();

    form.reset();
    
}

async function handleLoadMore() {
    pageC += 1;
    await fetchImg();
}

async function fetchImg() {
    
    try {
        const data = await getPictures(queryC, pageC);
        loader.classList.add('hidden');
        if (data.total === 0 || queryC === "") {
            loadMore.classList.add('hidden');
            scrollBtn.classList.add('hidden');
            iziToast.info({
                title: '!',
                message: "Sorry, there are no images matching your search query. Please try again!",
                messageSize: '16px',
                position: 'center',
                backgroundColor: 'orange'
            });
            return;
        }
        createMurkup(data);

        if (data.hits.length === 0 || pageC * 15 >= data.totalHits) {
            loadMore.classList.add('hidden');
            iziToast.info({
                title: '!',
                message: "We're sorry, but you've reached the end of search results.",
                messageSize: '16px',
                position: 'center',
                backgroundColor: '#b48dc9'
            });
        } else {
            loadMore.classList.remove('hidden');
        }

        smoothScroll();
        showScrollToTop();
    }  catch (error) {
        console.error(error);
        iziToast.error({
            title: "Error",
            message: `Please add request`,
            messageSize: '16px',
            position: 'center',
            backgroundColor: '#EF4040',
        });
        loader.classList.add('hidden');

    };
}

function smoothScroll() {
    const gallery = document.querySelector('.gallery');
    if (gallery) {
        const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
        });
    }
}

function showScrollToTop() {
    if (window.scrollY > 1000) {
        scrollBtn.classList.remove('hidden');
        
    } else {
        scrollBtn.classList.add('hidden');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'auto',
    });
}

window.addEventListener('scroll', scrollBtn);
 