import{a as f,S as g,i as c}from"./assets/vendor-BJlxXftY.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function y(e,s=1){const i="https://pixabay.com/api/";try{return(await f.get(i,{params:{key:"48530484-8b1e6b3578d96dabcf99a211e",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}catch(r){throw console.error("Error fetching images:",r),r}}const v=new g(".gallery a",{captions:"true",captionsData:"alt",captionsDelay:250});function L(e){const s=document.querySelector(".gallery");let i=e.hits.map(r=>`<div class="gallery-item" >
      <a class="gallery-link" href="${r.largeImageURL}">
      <img
        class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
      />
      </a>
      <div class="item-text">
        <div><h5 class="top-item-text">Likes:</h5> <p class="numbers"> ${r.likes}</p>
        </div>
        <div> <h5 class="top-item-text">Views:</h5>
        <p class="numbers"> ${r.views}</p>
        </div>
        <div> <h5 class="top-item-text">Comments:</h5>
        <p class="numbers"> ${r.comments}</p>
        </div>
        <div><h5 class="top-item-text">Downloads:</h5>
        <p class="numbers"> ${r.downloads}</p>
        </div>
      </div>
    </div>`).join("");s.insertAdjacentHTML("beforeend",i),v.refresh()}function b(){const e=document.querySelector(".gallery");e.innerHTML=""}const p=document.querySelector(".form"),w=document.querySelector(".search-input"),a=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),n=document.querySelector(".scroll-to-top");let d=1,m="";p.addEventListener("submit",S);l.addEventListener("click",q);n.addEventListener("click",C);async function S(e){if(e.preventDefault(),b(),a.classList.remove("hidden"),m=w.value.trim(),d=1,!m){a.classList.remove("hidden"),a.classList.add("hidden"),c.warning({title:"Caution",message:"Please add request",messageSize:"16px",position:"center",color:"black"});return}await h(),p.reset()}async function q(){d+=1,await h()}async function h(){try{const e=await y(m,d);if(a.classList.add("hidden"),e.total===0){l.classList.add("hidden"),n.classList.add("hidden"),c.info({title:"!",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",position:"center",backgroundColor:"orange"});return}L(e),e.hits.length===0||d*15>=e.totalHits?(l.classList.add("hidden"),c.info({title:"!",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",position:"center",backgroundColor:"#b48dc9"})):l.classList.remove("hidden"),x(),E()}catch(e){console.error(e),c.error({title:"Error",message:"Failed to fatch images. Please try again later",messageSize:"16px",position:"center",backgroundColor:"#EF4040"}),a.classList.add("hidden")}}function x(){const e=document.querySelector(".gallery");if(e){const{height:s}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}function E(){window.scrollY>1e3?n.classList.remove("hidden"):n.classList.add("hidden")}function C(){window.scrollTo({top:0,behavior:"auto"})}window.addEventListener("scroll",n);
//# sourceMappingURL=index.js.map
