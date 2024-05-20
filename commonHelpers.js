import{i as f,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const m="https://pixabay.com/api/",d=r=>{const e=new URLSearchParams({key:"43952062-1ac9439355a7535a7f5f048fb",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${e}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})},g=r=>r.map(e=>`<li class="gallery-card">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-photo"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
  </a>
  <div class="under-img-info">
    <ul class="list-info">
      <li class="item-info">
        <h3 class="title-info">Likes</h3>
        <p class="text-info">${e.likes}</p>
      </li>
      <li class="item-info">
        <h3 class="title-info">Views</h3>
        <p class="text-info">${e.views}</p>
      </li>
      <li class="item-info">
        <h3 class="title-info">Comments</h3>
        <p class="text-info">${e.comments}</p>
      </li>
      <li class="item-info">
        <h3 class="title-info">Downloads</h3>
        <p class="text-info">${e.downloads}</p>
      </li>
    </ul>
  </div>
</li>`).join(""),a=document.querySelector(".gallery-list"),h=document.querySelector(".form"),c=document.querySelector(".loader");let o;function y(r){r.preventDefault();const e=r.target.elements.query.value.trim();if(e===""){a.innerHTML="",r.target.reset();return}a.innerHTML="",c.classList.remove("is-hidden"),d(e).then(i=>{i.total===0&&(r.target.reset(),f.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,pauseOnHover:!0,color:"red"})),a.innerHTML=g(i.hits),o&&o.refresh()}).catch(i=>console.log(i)).finally(()=>{r.target.reset(),c.classList.add("is-hidden")})}function p(r){r.preventDefault(),r.target!==r.currentTarget&&(o=new u(".gallery-list a",{captionsData:"alt",captionDelay:250}))}h.addEventListener("submit",y);a.addEventListener("click",p);
//# sourceMappingURL=commonHelpers.js.map
