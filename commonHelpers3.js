import{S as l}from"./assets/vendor-c9def49e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const d=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],m=document.querySelector(".gallery"),g=d.map(({preview:t,original:o,description:n})=>`<li class="gallery-item">
    <a class="gallery-link" href="${o}">
    <img
        class="gallery-image"
        src="${t}"
        data-source="${o}"
        alt="${n}"
    />
    </a>
    </li>`).join("");m.insertAdjacentHTML("beforeend",g);new l(".gallery a",{captionsData:"alt",captionDelay:250});const r="feedback-form-state",i=document.querySelector(".feedback-form");i.addEventListener("input",h);i.addEventListener("submit",u);function h(){const t=i.elements.email.value,o=i.elements.message.value;f(r,{email:t,message:o})}function u(t){t.preventDefault();const o=i.elements.email.value,n=i.elements.message.value;o&&n?(localStorage.removeItem(r),i.reset(),p()):alert("Please fill in both fields of the form.")}function f(t,o){const n=JSON.stringify(o);localStorage.setItem(t,n)}function y(t){const o=localStorage.getItem(t);try{return JSON.parse(o)}catch{return null}}function p(){const t=y(r);t&&(i.elements.email.value=t.email||"",i.elements.message.value=t.message||"")}p();
//# sourceMappingURL=commonHelpers3.js.map