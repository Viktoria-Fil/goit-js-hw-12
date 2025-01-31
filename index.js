import{a as f,S as g,i as d}from"./assets/vendor-BJlxXftY.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function y(e,s=1){const i="https://pixabay.com/api/";try{return(await f.get(i,{params:{key:"48530484-8b1e6b3578d96dabcf99a211e",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}catch(o){throw console.error("Error fetching images:",o),o}}const v=new g(".gallery a",{captions:"true",captionsData:"alt",captionsDelay:250});function L(e){const s=document.querySelector(".gallery");let i=e.hits.map(o=>`<div class="gallery-item" >
      <a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
      />
      </a>
      <div class="item-text">
        <div><h5 class="top-item-text">Likes:</h5> <p class="numbers"> ${o.likes}</p>
        </div>
        <div> <h5 class="top-item-text">Views:</h5>
        <p class="numbers"> ${o.views}</p>
        </div>
        <div> <h5 class="top-item-text">Comments:</h5>
        <p class="numbers"> ${o.comments}</p>
        </div>
        <div><h5 class="top-item-text">Downloads:</h5>
        <p class="numbers"> ${o.downloads}</p>
        </div>
      </div>
    </div>`).join("");s.insertAdjacentHTML("beforeend",i),v.refresh()}function b(){const e=document.querySelector(".gallery");e.innerHTML=""}const p=document.querySelector(".form"),w=document.querySelector(".search-input"),u=document.querySelector(".loader"),a=document.querySelector(".load-more-btn"),n=document.querySelector(".scroll-to-top");let c=1,m="";p.addEventListener("submit",S);a.addEventListener("click",q);n.addEventListener("click",C);async function S(e){e.preventDefault(),b(),u.classList.remove("hidden"),m=w.value.trim(),c=1,await h(),p.reset()}async function q(){c+=1,await h()}async function h(){try{const e=await y(m,c);if(u.classList.add("hidden"),e.total===0||m===""){a.classList.add("hidden"),n.classList.add("hidden"),d.info({title:"!",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",position:"center",backgroundColor:"orange"});return}L(e),e.hits.length===0||c*15>=e.totalHits?(a.classList.add("hidden"),d.info({title:"!",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",position:"center",backgroundColor:"#b48dc9"})):a.classList.remove("hidden"),x(),E()}catch(e){console.error(e),d.error({title:"Error",message:"Please add request",messageSize:"16px",position:"center",backgroundColor:"#EF4040"}),u.classList.add("hidden")}}function x(){const e=document.querySelector(".gallery");if(e){const{height:s}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}function E(){window.scrollY>1e3?n.classList.remove("hidden"):n.classList.add("hidden")}function C(){window.scrollTo({top:0,behavior:"auto"})}window.addEventListener("scroll",n);
//# sourceMappingURL=index.js.map
