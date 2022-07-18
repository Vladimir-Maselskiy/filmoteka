function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var s={id:t,exports:{}};return i[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},e.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.e9d0a927.js","2hlj7":"image-not-found-adaptive.85e4068c.png","eM9ss":"library.1bebc91c.js"}')),s("3qV1E");const r=document.querySelector(".advice-list"),a=document.querySelector(".advice-list__nav-btn--left");function o(t){const e=Number(22),i=Number(-22);let n=0;const s=t.currentTarget.classList.contains("advice-list__nav-btn--right"),a=setInterval((()=>{n!=e&&n!=i?(s?n+=1:n-=1,r.scrollBy(n,0)):clearInterval(a)}),30)}document.querySelector(".advice-list__nav-btn--right").addEventListener("click",o),a.addEventListener("click",o),r.addEventListener("touchstart",(function(t){l=t.touches[0].clientX,h=t.touches[0].clientY}),!1),r.addEventListener("touchmove",(function(t){if(!l||!h)return;var e=t.touches[0].clientX,i=t.touches[0].clientY,n=l-e,s=h-i;Math.abs(n),Math.abs(s);l=null,h=null}),!1);var l=null,h=null;t(M=s("2shzp")).defaults.baseURL="https://api.themoviedb.org";async function c(){return await t(M)("3/genre/movie/list?api_key=c8ef48bae82b60cf66a4f0e6e3dd153e")}const u=document.querySelector(".advice-list");!async function(){const t=(await c()).data.genres.map((({id:t,name:e})=>`<li class="advice-list__item"> <button type="button" class="advice-list__btn" data-id="${t}">${e}</button></li>`)).join("");u.innerHTML=t}(),t(M=s("2shzp")).defaults.baseURL="https://api.themoviedb.org";async function f(e){return await t(M)(`/3/movie/${e}/recommendations?api_key=c8ef48bae82b60cf66a4f0e6e3dd153e`)}function d(t){const e=t.length-1;return t[Math.round(Math.random()*(e-0)+0)]}var p=s("1pAej"),g=s("SzfLY"),m=s("dgsde"),y=s("k1A4R"),v=s("iQIUW");const w=document.querySelector(".advice-list");document.querySelector(".backdrop");w.addEventListener("click",(async function(t){if("BUTTON"!==t.target.nodeName)return;try{const e=t.target.dataset.id,i=(await f(e)).data.results,n=d(i).id,s=await(0,g.getModalData)(n);(0,m.showModal)(s),(0,y.spinnerOff)(),(0,p.setResultData)(i)}catch(t){v.Notify.info("We are sorry but this genre is empty.")}})),s("8VnKz"),t(M=s("2shzp")).defaults.baseURL="https://api.themoviedb.org";async function b(e){return await t(M)(`3/trending/all/day?api_key=c8ef48bae82b60cf66a4f0e6e3dd153e&page=${e}`)}var E,T=t(s("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(t,e,i,n,s){var r,a=null!=e?e:t.nullContext||{},o=t.hooks.helperMissing,l="function",h=t.escapeExpression,c=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<li class="gallery-list__item">\n    <div data-filmId="'+h(typeof(r=null!=(r=c(i,"filmId")||(null!=e?c(e,"filmId"):e))?r:o)===l?r.call(a,{name:"filmId",hash:{},data:s,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):r)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="'+h(typeof(r=null!=(r=c(i,"urlImg")||(null!=e?c(e,"urlImg"):e))?r:o)===l?r.call(a,{name:"urlImg",hash:{},data:s,loc:{start:{line:4,column:48},end:{line:4,column:58}}}):r)+'" alt="'+h(typeof(r=null!=(r=c(i,"title")||(null!=e?c(e,"title"):e))?r:o)===l?r.call(a,{name:"title",hash:{},data:s,loc:{start:{line:4,column:65},end:{line:4,column:74}}}):r)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+h(typeof(r=null!=(r=c(i,"title")||(null!=e?c(e,"title"):e))?r:o)===l?r.call(a,{name:"title",hash:{},data:s,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):r)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+h(typeof(r=null!=(r=c(i,"ganres")||(null!=e?c(e,"ganres"):e))?r:o)===l?r.call(a,{name:"ganres",hash:{},data:s,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):r)+' | <span class="gallery-list__Year">'+h(typeof(r=null!=(r=c(i,"relisYer")||(null!=e?c(e,"relisYer"):e))?r:o)===l?r.call(a,{name:"relisYer",hash:{},data:s,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):r)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>\n"},useData:!0}),I=s("aFbFi"),_=s("hIjf5");function S(e){let i="";return e.forEach((e=>{const n=e.genre_ids?e.genre_ids.map((t=>(0,_.convertGanres)(I.genreIds,t))):["Others"];n.length>2&&(n.length=2,n.push("Others"));let s="";s=e.poster_path?`https://image.tmdb.org/t/p/w300${e.poster_path}`:e.profile_path?`https://image.tmdb.org/t/p/w300${e.profile_path}`:t(E);const r={filmId:e.id,title:e.name||e.title||"XXXX",urlImg:s,relisYer:(e.release_date||e.first_air_date||"XXXX").slice(0,4),ganres:n.join(", ")||"Others"};i+=T(r)})),i}E=new URL(s("kyEFX").resolve("2hlj7"),import.meta.url).toString();const A={galleryListEl:document.querySelector(".gallery-list"),libraryEmptyWachEl:document.querySelector(".js-watched-text")};p=s("1pAej"),p=s("1pAej");const C=document.querySelector(".pagination"),k=document.querySelector(".gallery-list");let L=1;async function D(t){try{const e=await b(t),i=await e.data.results,n=e.data.page,s=e.data.total_pages;k.innerHTML="",A.galleryListEl.insertAdjacentHTML("afterbegin",S(i)),(0,p.clearResultData)(),(0,p.setResultData)(i),R(n,s)}catch(t){A.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>')}}function R(t,e){L=t;let i="";t>1&&(i+='<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),t>2&&(i+='<li class="pagination__number display-none">1</li>'),t>4&&(i+='<li class="pagination__number display-none">...</li>'),t>3&&(i+=`<li class="pagination__number">${t-2}</li>`),t>=2&&(i+=`<li class="pagination__number">${t-1}</li>`),i+=`<li class="pagination__number active">${t}</li>`,t<e-1&&(i+=`<li class="pagination__number">${t+1}</li>`),t<e-2&&(i+=`<li class="pagination__number">${t+2}</li>`),t<=e-1&&(t<e-3&&(i+='<li class="pagination__number display-none">...</li>'),i+=`<li class="pagination__number display-none">${e}</li>`),t<e&&(i+="<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),C.innerHTML=i,C.addEventListener("click",N)}function N(t){if("LI"!==t.target.nodeName)return;const e=t.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),e){case"<":D(L-1);break;case">":D(L+1);break;case"...":break;default:D(e)}}document.addEventListener("DOMContentLoaded",(async function(){try{const t=await b(1),e=t.data.results;A.galleryListEl.insertAdjacentHTML("afterbegin",S(e)),R(1,t.data.total_pages),(0,p.clearResultData)(),(0,p.setResultData)(e)}catch(t){A.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>')}}));const P=document.querySelector(".add-block"),O=document.querySelector(".add-block__time"),x=document.querySelector(".add-block__btn");!function(t){const e=t.length-1,i=`<img\n    src="${t[Math.round(Math.random()*(e-0)+0)]}"\n    alt="advertising"\n    class="add-block__image"\n  />`;P.insertAdjacentHTML("beforeend",i)}(["https://re-media.plektan.com/img/prop/40/7f/407f503405e4ad187970a5873d2756a0.jpg","https://highload.today/wp-content/uploads/2022/02/Kotiku-prihoditsya-iskat-rabotu.-Ne-nado-tak.jpg"]),function(){const t=Date.now();let e=0;const i=setInterval((()=>{if(1===e)return clearInterval(i),O.classList.add("is-hidden"),void x.classList.remove("is-hidden");const n=Date.now();e=Number(11-((n-t)/1e3).toFixed()),O.textContent=e}),1e3)}(),x.addEventListener("click",(()=>{P.classList.add("is-hidden")})),s("3qV1E");var M=s("2shzp");const j=new class{async getFilm(t){const e=`https://api.themoviedb.org/3/search/movie?api_key=c8ef48bae82b60cf66a4f0e6e3dd153e&language=en-US&query=${this.searchQuery}&page=${t}&include_adult=false`;try{return await M.get(e)}catch(t){console.error(t)}}get query(){return this.searchQuery}set query(t){this.searchQuery=t}constructor(){this.searchQuery=""}};async function F(t,e){j.query=t;const i=await j.getFilm(e);return{arrayFilms:i.data.results,totalPages:i.data.total_pages}}const U=[{id:12,name:"Adventure"},{id:14,name:"Fantasy"},{id:16,name:"Animation"},{id:18,name:"Drama"},{id:27,name:"Horror"},{id:28,name:"Action"},{id:35,name:"Comedy"},{id:36,name:"History"},{id:37,name:"Western"},{id:53,name:"Thriller"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:878,name:"Science Fiction"},{id:9648,name:"Mystery"},{id:10402,name:"Music"},{id:10749,name:"Romance"},{id:10751,name:"Family"},{id:10752,name:"War"},{id:10759,name:"Action & Adventure"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:10770,name:"TV Movie"}];function q(t,e){let i=[],n="";t.filter((t=>{t.id===e&&i.push(t.name)}));for(const t of i)n+=` ${t}`;return n}function $(e){return e.map((({id:e,original_title:i,title:n,genre_ids:s,poster_path:r,backdrop_path:a,release_date:o})=>{let l="https://image.tmdb.org/t/p/w500";const h=s.map((t=>q(U,t)));return r||a||(l=t(E),r="",a=""),{filmId:e,urlImg:`${l}${r||a}`,title:i||n,ganres:h.length>=3?`${h[0]}, ${h[1]}, Other`:h.join(", ")||"Film",relisYer:(o||"XXXX").slice(0,4)}}))}const H={text:document.querySelector(".home-header_line_message"),galleryList:document.querySelector(".gallery-list"),form:document.querySelector(".home-header_search"),input:document.querySelector(".home-header_search_input"),btn:document.querySelector(".home-header_search_button"),backdropSpinnerRef:document.querySelector(".backdrop-spinner"),paginationList:document.querySelector(".pagination")};var B=t(s("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(t,e,i,n,s){var r,a=null!=e?e:t.nullContext||{},o=t.hooks.helperMissing,l="function",h=t.escapeExpression,c=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<li class="gallery-list__item">\n    <div data-filmId="'+h(typeof(r=null!=(r=c(i,"filmId")||(null!=e?c(e,"filmId"):e))?r:o)===l?r.call(a,{name:"filmId",hash:{},data:s,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):r)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="'+h(typeof(r=null!=(r=c(i,"urlImg")||(null!=e?c(e,"urlImg"):e))?r:o)===l?r.call(a,{name:"urlImg",hash:{},data:s,loc:{start:{line:4,column:48},end:{line:4,column:58}}}):r)+'" alt="'+h(typeof(r=null!=(r=c(i,"title")||(null!=e?c(e,"title"):e))?r:o)===l?r.call(a,{name:"title",hash:{},data:s,loc:{start:{line:4,column:65},end:{line:4,column:74}}}):r)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+h(typeof(r=null!=(r=c(i,"title")||(null!=e?c(e,"title"):e))?r:o)===l?r.call(a,{name:"title",hash:{},data:s,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):r)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+h(typeof(r=null!=(r=c(i,"ganres")||(null!=e?c(e,"ganres"):e))?r:o)===l?r.call(a,{name:"ganres",hash:{},data:s,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):r)+' | <span class="gallery-list__Year">'+h(typeof(r=null!=(r=c(i,"relisYer")||(null!=e?c(e,"relisYer"):e))?r:o)===l?r.call(a,{name:"relisYer",hash:{},data:s,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):r)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>"},useData:!0});function V(t){const e=t.map((t=>B(t))).join("");H.galleryList.innerHTML=e}y=s("k1A4R"),p=s("1pAej"),y=s("k1A4R"),p=s("1pAej");let X=Number(1);function z(t,e){const i=Number(t),n=Number(e);X=Number(i);let s="",r=i-Number(2),a=i-Number(1),o=i+Number(2),l=i+Number(1);i>1&&(s+='<li name="pagin-search-item" class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),i>2&&(s+='<li name="pagin-search-item" class="pagination__number display-none">1</li>'),i>4&&(s+='<li name="pagin-search-item" class="pagination__number display-none">...</li>'),i>3&&(s+=`<li name="pagin-search-item" class="pagination__number">${r}</li>`),i>=2&&(s+=`<li name="pagin-search-item" class="pagination__number">${a}</li>`),s+=`<li name="pagin-search-item" class="pagination__number active">${i}</li>`,i<e-1&&(s+=`<li name="pagin-search-item" class="pagination__number">${l}</li>`),i<e-2&&(s+=`<li name="pagin-search-item" class="pagination__number">${o}</li>`),i<=e-1&&(i<e-3&&(s+='<li name="pagin-search-item" class="pagination__number display-none">...</li>'),s+=`<li name="pagin-search-item" class="pagination__number display-none">${n}</li>`),i<e&&(s+="<li name=\"pagin-search-item\" class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),H.paginationList.innerHTML=s,H.paginationList.removeEventListener("click",N),H.paginationList.addEventListener("click",K)}async function K(t){if("LI"!==t.target.nodeName)return;const e=t.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),e){case"<":G(X-1);break;case">":G(X+1);break;case"...":break;default:G(e)}}async function G(t){let e=j.query;(0,y.spinnerOn)();const{arrayFilms:i,totalPages:n}=await F(e,t);(0,y.spinnerOff)(),(0,p.clearResultData)(),(0,p.setResultData)(i);V($(i)),H.paginationList.innerHTML="",z(t,n)}function Y(){H.text.textContent="Search result not successful. Enter the correct movie name and"}function W(t){H.text.textContent=""}H.form.addEventListener("submit",(async function(t){t.preventDefault(),H.input.addEventListener("input",W);let e=t.currentTarget.elements.searchQuery.value;if(""===e)return void Y();(0,y.spinnerOn)();const{arrayFilms:i,totalPages:n}=await F(e,1);if((0,y.spinnerOff)(),0===i.length)return Y(),void(H.paginationList.innerHTML="");(0,p.clearResultData)(),(0,p.setResultData)(i);V($(i)),H.paginationList.innerHTML="",z(1,n)})),s("k1A4R"),s("2aQXY"),s("hCcLB"),s("e1jet"),(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})();v=s("iQIUW");var J=s("25RCP"),Q=s("ix4Jr"),Z=s("7vF8m"),tt=s("ffjl9"),et=s("4a6xH"),it=(Q=s("ix4Jr"),et=s("4a6xH"),tt=s("ffjl9"),s("cCiiD"));const nt={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},st=new(0,tt.ErrorFactory)("installations","Installations",nt);function rt(t){return t instanceof tt.FirebaseError&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function ot(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function lt(t,e){const i=(await e.json()).error;return st.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ht({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ct(t,{refreshToken:e}){const i=ht(t);return i.append("Authorization",function(t){return`FIS_v2 ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),i}async function ut(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt=/^[cdef][\w-]{21}$/;function pt(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return dt.test(e)?e:""}catch(t){return""}}function gt(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Map;function yt(t,e){const i=gt(t);vt(i,e),function(t,e){const i=bt();i&&i.postMessage({key:t,fid:e});Et()}(i,e)}function vt(t,e){const i=mt.get(t);if(i)for(const t of i)t(e)}let wt=null;function bt(){return!wt&&"BroadcastChannel"in self&&(wt=new BroadcastChannel("[Firebase] FID Change"),wt.onmessage=t=>{vt(t.data.key,t.data.fid)}),wt}function Et(){0===mt.size&&wt&&(wt.close(),wt=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt=null;function It(){return Tt||(Tt=(0,it.openDB)("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-installations-store")}})),Tt}async function _t(t,e){const i=gt(t),n=(await It()).transaction("firebase-installations-store","readwrite"),s=n.objectStore("firebase-installations-store"),r=await s.get(i);return await s.put(e,i),await n.done,r&&r.fid===e.fid||yt(t,e.fid),e}async function St(t){const e=gt(t),i=(await It()).transaction("firebase-installations-store","readwrite");await i.objectStore("firebase-installations-store").delete(e),await i.done}async function At(t,e){const i=gt(t),n=(await It()).transaction("firebase-installations-store","readwrite"),s=n.objectStore("firebase-installations-store"),r=await s.get(i),a=e(r);return void 0===a?await s.delete(i):await s.put(a,i),await n.done,!a||r&&r.fid===a.fid||yt(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(t){let e;const i=await At(t.appConfig,(i=>{const n=function(t){return Dt(t||{fid:pt(),registrationStatus:0})}(i),s=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(st.create("app-offline"))}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=async function(t,e){try{const i=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:i}){const n=at(t),s=ht(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const a={fid:i,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.5.10"},o={method:"POST",headers:s,body:JSON.stringify(a)},l=await ut((()=>fetch(n,o)));if(l.ok){const t=await l.json();return{fid:t.fid||i,registrationStatus:2,refreshToken:t.refreshToken,authToken:ot(t.authToken)}}throw await lt("Create Installation",l)}(t,e);return _t(t.appConfig,i)}catch(i){throw rt(i)&&409===i.customData.serverCode?await St(t.appConfig):await _t(t.appConfig,{fid:e.fid,registrationStatus:0}),i}}(t,i);return{installationEntry:i,registrationPromise:n}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:kt(t)}:{installationEntry:e}}(t,n);return e=s.registrationPromise,s.installationEntry}));return""===i.fid?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}async function kt(t){let e=await Lt(t.appConfig);for(;1===e.registrationStatus;)await ft(100),e=await Lt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:i}=await Ct(t);return i||e}return e}function Lt(t){return At(t,(t=>{if(!t)throw st.create("installation-not-found");return Dt(t)}))}function Dt(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Rt({appConfig:t,heartbeatServiceProvider:e},i){const n=function(t,{fid:e}){return`${at(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,i),s=ct(t,i),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const a={installation:{sdkVersion:"w:0.5.10",appId:t.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},l=await ut((()=>fetch(n,o)));if(l.ok){return ot(await l.json())}throw await lt("Generate Auth Token",l)}async function Nt(t,e=!1){let i;const n=await At(t.appConfig,(n=>{if(!Ot(n))throw st.create("not-registered");const s=n.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}(s))return n;if(1===s.requestStatus)return i=async function(t,e){let i=await Pt(t.appConfig);for(;1===i.authToken.requestStatus;)await ft(100),i=await Pt(t.appConfig);const n=i.authToken;return 0===n.requestStatus?Nt(t,e):n}(t,e),n;{if(!navigator.onLine)throw st.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(n);return i=async function(t,e){try{const i=await Rt(t,e),n=Object.assign(Object.assign({},e),{authToken:i});return await _t(t.appConfig,n),i}catch(i){if(!rt(i)||401!==i.customData.serverCode&&404!==i.customData.serverCode){const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _t(t.appConfig,i)}else await St(t.appConfig);throw i}}(t,e),e}}));return i?await i:n.authToken}function Pt(t){return At(t,(t=>{if(!Ot(t))throw st.create("not-registered");const e=t.authToken;return 1===(i=e).requestStatus&&i.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var i;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Ot(t){return void 0!==t&&2===t.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(t,e=!1){const i=t;await async function(t){const{registrationPromise:e}=await Ct(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i);return(await Nt(i,e)).token}function Mt(t){return st.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=t=>{const e=t.getProvider("app").getImmediate(),i=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(!t||!t.options)throw Mt("App Configuration");if(!t.name)throw Mt("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!t.options[i])throw Mt(i);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:i,heartbeatServiceProvider:(0,Q._getProvider)(e,"heartbeat"),_delete:()=>Promise.resolve()}},Ft=t=>{const e=t.getProvider("app").getImmediate(),i=(0,Q._getProvider)(e,"installations").getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:i,registrationPromise:n}=await Ct(e);return n?n.catch(console.error):Nt(e).catch(console.error),i.fid}(i),getToken:t=>xt(i,t)}};(0,Q._registerComponent)(new(0,et.Component)("installations",jt,"PUBLIC")),(0,Q._registerComponent)(new(0,et.Component)("installations-internal",Ft,"PRIVATE")),(0,Q.registerVersion)("@firebase/installations","0.5.10"),(0,Q.registerVersion)("@firebase/installations","0.5.10","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut=new(0,Z.Logger)("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qt(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function $t(t,e,i,n){return async function(s,r,a){try{"event"===s?await async function(t,e,i,n,s){try{let r=[];if(s&&s.send_to){let t=s.send_to;Array.isArray(t)||(t=[t]);const n=await qt(i);for(const i of t){const t=n.find((t=>t.measurementId===i)),s=t&&e[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",n,s||{})}catch(t){Ut.error(t)}}(t,e,i,r,a):"config"===s?await async function(t,e,i,n,s,r){const a=n[s];try{if(a)await e[a];else{const t=(await qt(i)).find((t=>t.measurementId===s));t&&await e[t.appId]}}catch(t){Ut.error(t)}t("config",s,r)}(t,e,i,n,r,a):t("set",r)}catch(t){Ut.error(t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ht={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Bt=new(0,tt.ErrorFactory)("analytics","Analytics",Ht);const Vt=new class{getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}};function Xt(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zt(t,e=Vt,i){const{appId:n,apiKey:s,measurementId:r}=t.options;if(!n)throw Bt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:n};throw Bt.create("no-api-key")}const a=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Gt;return setTimeout((async()=>{o.abort()}),void 0!==i?i:6e4),Kt({appId:n,apiKey:s,measurementId:r},a,o,e)}async function Kt(t,{throttleEndTimeMillis:e,backoffCount:i},n,s=Vt){const{appId:r,measurementId:a}=t;try{await function(t,e){return new Promise(((i,n)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(i,s);t.addEventListener((()=>{clearTimeout(r),n(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(n,e)}catch(t){if(a)return Ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:r,measurementId:a};throw t}try{const e=await async function(t){var e;const{appId:i,apiKey:n}=t,s={method:"GET",headers:Xt(n)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",i),a=await fetch(r,s);if(200!==a.status&&304!==a.status){let t="";try{const i=await a.json();(null===(e=i.error)||void 0===e?void 0:e.message)&&(t=i.error.message)}catch(t){}throw Bt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:t})}return a.json()}(t);return s.deleteThrottleMetadata(r),e}catch(e){if(!function(t){if(!(t instanceof tt.FirebaseError&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(s.deleteThrottleMetadata(r),a)return Ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:r,measurementId:a};throw e}const o=503===Number(e.customData.httpStatus)?(0,tt.calculateBackoffMillis)(i,s.intervalMillis,30):(0,tt.calculateBackoffMillis)(i,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+o,backoffCount:i+1};return s.setThrottleMetadata(r,l),Ut.debug(`Calling attemptFetch again in ${o} millis`),Kt(t,l,n,s)}}class Gt{addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}constructor(){this.listeners=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(t,e,i,n,s,r,a){var o;const l=zt(t);l.then((e=>{i[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Ut.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Ut.error(t))),e.push(l);const h=async function(){if(!(0,tt.isIndexedDBAvailable)())return Ut.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,tt.validateIndexedDBOpenable)()}catch(t){return Ut.warn(Bt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}().then((t=>t?n.getId():void 0)),[c,u]=await Promise.all([l,h]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes("https://www.googletagmanager.com/gtag/js"))return e;return null})()||function(t,e){const i=document.createElement("script");i.src=`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`,i.async=!0,document.head.appendChild(i)}(r,c.measurementId),s("js",new Date);const f=null!==(o=null==a?void 0:a.config)&&void 0!==o?o:{};return f.origin="firebase",f.update=!0,null!=u&&(f.firebase_id=u),s("config",c.measurementId,f),c.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{_delete(){return delete Jt[this.app.options.appId],Promise.resolve()}constructor(t){this.app=t}}let Jt={},Qt=[];const Zt={};let te,ee,ie="dataLayer",ne="gtag",se=!1;function re(t,e,i){!function(){const t=[];if((0,tt.isBrowserExtension)()&&t.push("This is a browser extension environment."),(0,tt.areCookiesEnabled)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),i=Bt.create("invalid-analytics-context",{errorInfo:e});Ut.warn(i.message)}}();const n=t.options.appId;if(!n)throw Bt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Bt.create("no-api-key");Ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Jt[n])throw Bt.create("already-exists",{id:n});if(!se){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(ie);const{wrappedGtag:t,gtagCore:e}=function(t,e,i,n,s){let r=function(...t){window[n].push(arguments)};return window[s]&&"function"==typeof window[s]&&(r=window[s]),window[s]=$t(r,t,e,i),{gtagCore:r,wrappedGtag:window[s]}}(Jt,Qt,Zt,ie,ne);ee=t,te=e,se=!0}Jt[n]=Yt(t,Qt,Zt,e,te,ie,i);return new Wt(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e,i,n){t=(0,tt.getModularInstance)(t),async function(t,e,i,n,s){if(s&&s.global)t("event",i,n);else{const s=await e;t("event",i,Object.assign(Object.assign({},n),{send_to:s}))}}(ee,Jt[t.app.options.appId],e,i,n).catch((t=>Ut.error(t)))}(0,Q._registerComponent)(new(0,et.Component)("analytics",((t,{options:e})=>re(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),(0,Q._registerComponent)(new(0,et.Component)("analytics-internal",(function(t){try{const e=t.getProvider("analytics").getImmediate();return{logEvent:(t,i,n)=>ae(e,t,i,n)}}catch(t){throw Bt.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),(0,Q.registerVersion)("@firebase/analytics","0.7.10"),(0,Q.registerVersion)("@firebase/analytics","0.7.10","esm2017");var oe,le=s("amyG6"),he=(Q=s("ix4Jr"),et=s("4a6xH"),Z=s("7vF8m"),tt=s("ffjl9"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}),ce={},ue=ue||{},fe=he||self;function de(){}function pe(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ge(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var me="closure_uid_"+(1e9*Math.random()>>>0),ye=0;function ve(t,e,i){return t.call.apply(t.bind,arguments)}function we(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function be(t,e,i){return(be=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ve:we).apply(null,arguments)}function Ee(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Te(t,e){function i(){}i.prototype=e.prototype,t.Z=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Vb=function(t,i,n){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[i].apply(t,s)}}function Ie(){this.s=this.s,this.o=this.o}var _e={};Ie.prototype.s=!1,Ie.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,me)&&t[me]||(t[me]=++ye)}(this);delete _e[t]}},Ie.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Se=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1},Ae=Array.prototype.forEach?function(t,e,i){Array.prototype.forEach.call(t,e,i)}:function(t,e,i){const n=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)r in s&&e.call(i,s[r],r,t)};function Ce(t){return Array.prototype.concat.apply([],arguments)}function ke(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function Le(t){return/^[\s\xa0]*$/.test(t)}var De,Re=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ne(t,e){return-1!=t.indexOf(e)}function Pe(t,e){return t<e?-1:t>e?1:0}t:{var Oe=fe.navigator;if(Oe){var xe=Oe.userAgent;if(xe){De=xe;break t}}De=""}function Me(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function je(t){const e={};for(const i in t)e[i]=t[i];return e}var Fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ue(t,e){let i,n;for(let e=1;e<arguments.length;e++){for(i in n=arguments[e],n)t[i]=n[i];for(let e=0;e<Fe.length;e++)i=Fe[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function qe(t){return qe[" "](t),t}qe[" "]=de;var $e,He,Be=Ne(De,"Opera"),Ve=Ne(De,"Trident")||Ne(De,"MSIE"),Xe=Ne(De,"Edge"),ze=Xe||Ve,Ke=Ne(De,"Gecko")&&!(Ne(De.toLowerCase(),"webkit")&&!Ne(De,"Edge"))&&!(Ne(De,"Trident")||Ne(De,"MSIE"))&&!Ne(De,"Edge"),Ge=Ne(De.toLowerCase(),"webkit")&&!Ne(De,"Edge");function Ye(){var t=fe.document;return t?t.documentMode:void 0}t:{var We="",Je=(He=De,Ke?/rv:([^\);]+)(\)|;)/.exec(He):Xe?/Edge\/([\d\.]+)/.exec(He):Ve?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(He):Ge?/WebKit\/(\S+)/.exec(He):Be?/(?:Version)[ \/]?(\S+)/.exec(He):void 0);if(Je&&(We=Je?Je[1]:""),Ve){var Qe=Ye();if(null!=Qe&&Qe>parseFloat(We)){$e=String(Qe);break t}}$e=We}var Ze,ti={};function ei(){return function(t){var e=ti;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Re(String($e)).split("."),i=Re("9").split("."),n=Math.max(e.length,i.length);for(let a=0;0==t&&a<n;a++){var s=e[a]||"",r=i[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Pe(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Pe(0==s[2].length,0==r[2].length)||Pe(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(fe.document&&Ve){var ii=Ye();Ze=ii||(parseInt($e,10)||void 0)}else Ze=void 0;var ni=Ze,si=function(){if(!fe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{fe.addEventListener("test",de,e),fe.removeEventListener("test",de,e)}catch(t){}return t}();function ri(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ai(t,e){if(ri.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ke){t:{try{qe(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:oi[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ai.Z.h.call(this)}}ri.prototype.h=function(){this.defaultPrevented=!0},Te(ai,ri);var oi={2:"touch",3:"pen",4:"mouse"};ai.prototype.h=function(){ai.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var li="closure_listenable_"+(1e6*Math.random()|0),hi=0;function ci(t,e,i,n,s){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.ia=s,this.key=++hi,this.ca=this.fa=!1}function ui(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function fi(t){this.src=t,this.g={},this.h=0}function di(t,e){var i=e.type;if(i in t.g){var n,s=t.g[i],r=Se(s,e);(n=0<=r)&&Array.prototype.splice.call(s,r,1),n&&(ui(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function pi(t,e,i,n){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!i&&r.ia==n)return s}return-1}fi.prototype.add=function(t,e,i,n,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var a=pi(t,e,n,s);return-1<a?(e=t[a],i||(e.fa=!1)):((e=new ci(e,this.src,r,!!n,s)).fa=i,t.push(e)),e};var gi="closure_lm_"+(1e6*Math.random()|0),mi={};function yi(t,e,i,n,s){if(n&&n.once)return wi(t,e,i,n,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)yi(t,e[r],i,n,s);return null}return i=Ai(i),t&&t[li]?t.N(e,i,ge(n)?!!n.capture:!!n,s):vi(t,e,i,!1,n,s)}function vi(t,e,i,n,s,r){if(!e)throw Error("Invalid event type");var a=ge(s)?!!s.capture:!!s,o=_i(t);if(o||(t[gi]=o=new fi(t)),(i=o.add(e,i,n,a,r)).proxy)return i;if(n=function(){function t(i){return e.call(t.src,t.listener,i)}var e=Ii;return t}(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)si||(s=a),void 0===s&&(s=!1),t.addEventListener(e.toString(),n,s);else if(t.attachEvent)t.attachEvent(Ti(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function wi(t,e,i,n,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)wi(t,e[r],i,n,s);return null}return i=Ai(i),t&&t[li]?t.O(e,i,ge(n)?!!n.capture:!!n,s):vi(t,e,i,!0,n,s)}function bi(t,e,i,n,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)bi(t,e[r],i,n,s);else n=ge(n)?!!n.capture:!!n,i=Ai(i),t&&t[li]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(i=pi(r=t.g[e],i,n,s))&&(ui(r[i]),Array.prototype.splice.call(r,i,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=_i(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pi(e,i,n,s)),(i=-1<t?e[t]:null)&&Ei(i))}function Ei(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[li])di(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(Ti(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=_i(e))?(di(i,t),0==i.h&&(i.src=null,e[gi]=null)):ui(t)}}}function Ti(t){return t in mi?mi[t]:mi[t]="on"+t}function Ii(t,e){if(t.ca)t=!0;else{e=new ai(e,this);var i=t.listener,n=t.ia||t.src;t.fa&&Ei(t),t=i.call(n,e)}return t}function _i(t){return(t=t[gi])instanceof fi?t:null}var Si="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ai(t){return"function"==typeof t?t:(t[Si]||(t[Si]=function(e){return t.handleEvent(e)}),t[Si])}function Ci(){Ie.call(this),this.i=new fi(this),this.P=this,this.I=null}function ki(t,e){var i,n=t.I;if(n)for(i=[];n;n=n.I)i.push(n);if(t=t.P,n=e.type||e,"string"==typeof e)e=new ri(e,t);else if(e instanceof ri)e.target=e.target||t;else{var s=e;Ue(e=new ri(n,t),s)}if(s=!0,i)for(var r=i.length-1;0<=r;r--){var a=e.g=i[r];s=Li(a,n,!0,e)&&s}if(s=Li(a=e.g=t,n,!0,e)&&s,s=Li(a,n,!1,e)&&s,i)for(r=0;r<i.length;r++)s=Li(a=e.g=i[r],n,!1,e)&&s}function Li(t,e,i,n){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var a=e[r];if(a&&!a.ca&&a.capture==i){var o=a.listener,l=a.ia||a.src;a.fa&&di(t.i,a),s=!1!==o.call(l,n)&&s}}return s&&!n.defaultPrevented}Te(Ci,Ie),Ci.prototype[li]=!0,Ci.prototype.removeEventListener=function(t,e,i,n){bi(this,t,e,i,n)},Ci.prototype.M=function(){if(Ci.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)ui(i[n]);delete e.g[t],e.h--}}this.I=null},Ci.prototype.N=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},Ci.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var Di=fe.JSON.stringify;function Ri(){var t=Fi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ni,Pi=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Oi),(t=>t.reset()));class Oi{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function xi(t){fe.setTimeout((()=>{throw t}),0)}function Mi(t,e){Ni||function(){var t=fe.Promise.resolve(void 0);Ni=function(){t.then(Ui)}}(),ji||(Ni(),ji=!0),Fi.add(t,e)}var ji=!1,Fi=new class{add(t,e){const i=Pi.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}constructor(){this.h=this.g=null}};function Ui(){for(var t;t=Ri();){try{t.h.call(t.g)}catch(t){xi(t)}var e=Pi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ji=!1}function qi(t,e){Ci.call(this),this.h=t||1,this.g=e||fe,this.j=be(this.kb,this),this.l=Date.now()}function $i(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Hi(t,e,i){if("function"==typeof t)i&&(t=be(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=be(t.handleEvent,t)}return 2147483647<Number(e)?-1:fe.setTimeout(t,e||0)}function Bi(t){t.g=Hi((()=>{t.g=null,t.i&&(t.i=!1,Bi(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Te(qi,Ci),(oe=qi.prototype).da=!1,oe.S=null,oe.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ki(this,"tick"),this.da&&($i(this),this.start()))}},oe.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},oe.M=function(){qi.Z.M.call(this),$i(this),delete this.g};class Vi extends Ie{l(t){this.h=arguments,this.g?this.i=!0:Bi(this)}M(){super.M(),this.g&&(fe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Xi(t){Ie.call(this),this.h=t,this.g={}}Te(Xi,Ie);var zi=[];function Ki(t,e,i,n){Array.isArray(i)||(i&&(zi[0]=i.toString()),i=zi);for(var s=0;s<i.length;s++){var r=yi(e,i[s],n||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Gi(t){Me(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ei(t)}),t),t.g={}}function Yi(){this.g=!0}function Wi(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var s=n[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var a=1;a<s.length;a++)s[a]=""}}}return Di(i)}catch(t){return e}}(t,i)+(n?" "+n:"")}))}Xi.prototype.M=function(){Xi.Z.M.call(this),Gi(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yi.prototype.Aa=function(){this.g=!1},Yi.prototype.info=function(){};var Ji={},Qi=null;function Zi(){return Qi=Qi||new Ci}function tn(t){ri.call(this,Ji.Ma,t)}function en(t){const e=Zi();ki(e,new tn(e,t))}function nn(t,e){ri.call(this,Ji.STAT_EVENT,t),this.stat=e}function sn(t){const e=Zi();ki(e,new nn(e,t))}function rn(t,e){ri.call(this,Ji.Na,t),this.size=e}function an(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return fe.setTimeout((function(){t()}),e)}Ji.Ma="serverreachability",Te(tn,ri),Ji.STAT_EVENT="statevent",Te(nn,ri),Ji.Na="timingevent",Te(rn,ri);var on={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ln={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function hn(){}function cn(t){return t.h||(t.h=t.i())}function un(){}hn.prototype.h=null;var fn,dn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pn(){ri.call(this,"d")}function gn(){ri.call(this,"c")}function mn(){}function yn(t,e,i,n){this.l=t,this.j=e,this.m=i,this.X=n||1,this.V=new Xi(this),this.P=wn,t=ze?125:void 0,this.W=new qi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new vn}function vn(){this.i=null,this.g="",this.h=!1}Te(pn,ri),Te(gn,ri),Te(mn,hn),mn.prototype.g=function(){return new XMLHttpRequest},mn.prototype.i=function(){return{}},fn=new mn;var wn=45e3,bn={},En={};function Tn(t,e,i){t.K=1,t.v=Xn(Un(e)),t.s=i,t.U=!0,In(t,null)}function In(t,e){t.F=Date.now(),Cn(t),t.A=Un(t.v);var i=t.A,n=t.X;Array.isArray(n)||(n=[String(n)]),ss(i.h,"t",n),t.C=0,i=t.l.H,t.h=new vn,t.g=sr(t.l,i?e:null,!t.s),0<t.O&&(t.L=new Vi(be(t.Ia,t,t.g),t.O)),Ki(t.V,t.g,"readystatechange",t.gb),e=t.H?je(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),en(1),function(t,e,i,n,s,r){t.info((function(){if(t.g)if(r)for(var a="",o=r.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");a=2<=u.length&&"type"==u[1]?a+(c+"=")+h+"&":a+(c+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+n+") [attempt "+s+"]: "+e+"\n"+i+"\n"+a}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function _n(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Sn(t,e,i){let n,s=!0;for(;!t.I&&t.C<i.length;){if(n=An(t,i),n==En){4==e&&(t.o=4,sn(14),s=!1),Wi(t.j,t.m,null,"[Incomplete Response]");break}if(n==bn){t.o=4,sn(15),Wi(t.j,t.m,i,"[Invalid Chunk]"),s=!1;break}Wi(t.j,t.m,n,null),Nn(t,n)}_n(t)&&n!=En&&n!=bn&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,sn(16),s=!1),t.i=t.i&&s,s?0<i.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),Ws(e),e.L=!0,sn(11))):(Wi(t.j,t.m,i,"[Invalid Chunked Response]"),Rn(t),Dn(t))}function An(t,e){var i=t.C,n=e.indexOf("\n",i);return-1==n?En:(i=Number(e.substring(i,n)),isNaN(i)?bn:(n+=1)+i>e.length?En:(e=e.substr(n,i),t.C=n+i,e))}function Cn(t){t.Y=Date.now()+t.P,kn(t,t.P)}function kn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=an(be(t.eb,t),e)}function Ln(t){t.B&&(fe.clearTimeout(t.B),t.B=null)}function Dn(t){0==t.l.G||t.I||Zs(t.l,t)}function Rn(t){Ln(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,$i(t.W),Gi(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Nn(t,e){try{var i=t.l;if(0!=i.G&&(i.g==t||cs(i.i,t)))if(i.I=t.N,!t.J&&cs(i.i,t)&&3==i.G){try{var n=i.Ca.g.parse(e)}catch(t){n=null}if(Array.isArray(n)&&3==n.length){var s=n;if(0==s[0]){t:if(!i.u){if(i.g){if(!(i.g.F+3e3<t.F))break t;Qs(i),$s(i)}Ys(i),sn(18)}}else i.ta=s[1],0<i.ta-i.U&&37500>s[2]&&i.N&&0==i.A&&!i.v&&(i.v=an(be(i.ab,i),6e3));if(1>=hs(i.i)&&i.ka){try{i.ka()}catch(t){}i.ka=void 0}}else er(i,11)}else if((t.J||i.g==t)&&Qs(i),!Le(e))for(s=i.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(i.U=h[0],h=h[1],2==i.G)if("c"==h[0]){i.J=h[1],i.la=h[2];const e=h[3];null!=e&&(i.ma=e,i.h.info("VER="+i.ma));const s=h[4];null!=s&&(i.za=s,i.h.info("SVER="+i.za));const c=h[5];null!=c&&"number"==typeof c&&0<c&&(n=1.5*c,i.K=n,i.h.info("backChannelRequestTimeoutMs_="+n)),n=i;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=n.i;!r.g&&(Ne(t,"spdy")||Ne(t,"quic")||Ne(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(us(r,r.h),r.h=null))}if(n.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.sa=t,Vn(n.F,n.D,t))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-t.F,i.h.info("Handshake RTT: "+i.O+"ms"));var a=t;if((n=i).oa=nr(n,n.H?n.la:null,n.W),a.J){fs(n.i,a);var o=a,l=n.K;l&&o.setTimeout(l),o.B&&(Ln(o),Cn(o)),n.g=a}else Gs(n);0<i.l.length&&Vs(i)}else"stop"!=h[0]&&"close"!=h[0]||er(i,7);else 3==i.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?er(i,7):qs(i):"noop"!=h[0]&&i.j&&i.j.wa(h),i.A=0)}en(4)}catch(t){}}function Pn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(pe(t)||"string"==typeof t)Ae(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var i=t.T();else if(t.R&&"function"==typeof t.R)i=void 0;else if(pe(t)||"string"==typeof t){i=[];for(var n=t.length,s=0;s<n;s++)i.push(s)}else for(s in i=[],n=0,t)i[n++]=s;n=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(pe(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}(t),s=n.length;for(var r=0;r<s;r++)e.call(void 0,n[r],i&&i[r],t)}}function On(t,e){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(t)if(t instanceof On)for(i=t.T(),n=0;n<i.length;n++)this.set(i[n],t.get(i[n]));else for(n in t)this.set(n,t[n])}function xn(t){if(t.i!=t.g.length){for(var e=0,i=0;e<t.g.length;){var n=t.g[e];Mn(t.h,n)&&(t.g[i++]=n),e++}t.g.length=i}if(t.i!=t.g.length){var s={};for(i=e=0;e<t.g.length;)Mn(s,n=t.g[e])||(t.g[i++]=n,s[n]=1),e++;t.g.length=i}}function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(oe=yn.prototype).setTimeout=function(t){this.P=t},oe.gb=function(t){t=t.target;const e=this.L;e&&3==xs(t)?e.l():this.Ia(t)},oe.Ia=function(t){try{if(t==this.g)t:{const c=xs(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>c)&&(3!=c||ze||this.g&&(this.h.h||this.g.ga()||Ms(this.g)))){this.I||4!=c||7==e||en(8==e||0>=u?3:2),Ln(this);var i=this.g.ba();this.N=i;e:if(_n(this)){var n=Ms(this.g);t="";var s=n.length,r=4==xs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Rn(this),Dn(this);var a="";break e}this.h.i=new fe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:r&&e==s-1});n.splice(0,s),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=200==i,function(t,e,i,n,s,r,a){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+s+"]: "+e+"\n"+i+"\n"+r+" "+a}))}(this.j,this.u,this.A,this.m,this.X,c,i),this.i){if(this.$&&!this.J){e:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Le(o)){var h=o;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,sn(12),Rn(this),Dn(this);break t}Wi(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Nn(this,i)}this.U?(Sn(this,c,a),ze&&this.i&&3==c&&(Ki(this.V,this.W,"tick",this.fb),this.W.start())):(Wi(this.j,this.m,a,null),Nn(this,a)),4==c&&Rn(this),this.i&&!this.I&&(4==c?Zs(this.l,this):(this.i=!1,Cn(this)))}else 400==i&&0<a.indexOf("Unknown SID")?(this.o=3,sn(12)):(this.o=0,sn(13)),Rn(this),Dn(this)}}}catch(t){}},oe.fb=function(){if(this.g){var t=xs(this.g),e=this.g.ga();this.C<e.length&&(Ln(this),Sn(this,t,e),this.i&&4!=t&&Cn(this))}},oe.cancel=function(){this.I=!0,Rn(this)},oe.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(en(3),sn(17)),Rn(this),this.o=2,Dn(this)):kn(this,this.Y-t)},(oe=On.prototype).R=function(){xn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},oe.T=function(){return xn(this),this.g.concat()},oe.get=function(t,e){return Mn(this.h,t)?this.h[t]:e},oe.set=function(t,e){Mn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},oe.forEach=function(t,e){for(var i=this.T(),n=0;n<i.length;n++){var s=i[n],r=this.get(s);t.call(e,r,s,this)}};var jn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Fn){this.g=void 0!==e?e:t.g,qn(this,t.j),this.s=t.s,$n(this,t.i),Hn(this,t.m),this.l=t.l,e=t.h;var i=new ts;i.i=e.i,e.g&&(i.g=new On(e.g),i.h=e.h),Bn(this,i),this.o=t.o}else t&&(i=String(t).match(jn))?(this.g=!!e,qn(this,i[1]||"",!0),this.s=zn(i[2]||""),$n(this,i[3]||"",!0),Hn(this,i[4]),this.l=zn(i[5]||"",!0),Bn(this,i[6]||"",!0),this.o=zn(i[7]||"")):(this.g=!!e,this.h=new ts(null,this.g))}function Un(t){return new Fn(t)}function qn(t,e,i){t.j=i?zn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $n(t,e,i){t.i=i?zn(e,!0):e}function Hn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bn(t,e,i){e instanceof ts?(t.h=e,function(t,e){e&&!t.j&&(es(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(is(this,e),ss(this,i,t))}),t)),t.j=e}(t.h,t.g)):(i||(e=Kn(e,Qn)),t.h=new ts(e,t.g))}function Vn(t,e,i){t.h.set(e,i)}function Xn(t){return Vn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kn(t,e,i){return"string"==typeof t?(t=encodeURI(t).replace(e,Gn),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Gn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Fn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Kn(e,Yn,!0),":");var i=this.i;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Kn(e,Yn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&t.push("/"),t.push(Kn(i,"/"==i.charAt(0)?Jn:Wn,!0))),(i=this.h.toString())&&t.push("?",i),(i=this.o)&&t.push("#",Kn(i,Zn)),t.join("")};var Yn=/[#\/\?@]/g,Wn=/[#\?:]/g,Jn=/[#\?]/g,Qn=/[#\?@]/g,Zn=/#/g;function ts(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function es(t){t.g||(t.g=new On,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),s=null;if(0<=n){var r=t[i].substring(0,n);s=t[i].substring(n+1)}else r=t[i];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function is(t,e){es(t),e=rs(t,e),Mn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Mn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&xn(t)))}function ns(t,e){return es(t),e=rs(t,e),Mn(t.g.h,e)}function ss(t,e,i){is(t,e),0<i.length&&(t.i=null,t.g.set(rs(t,e),ke(i)),t.h+=i.length)}function rs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(oe=ts.prototype).add=function(t,e){es(this),this.i=null,t=rs(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},oe.forEach=function(t,e){es(this),this.g.forEach((function(i,n){Ae(i,(function(i){t.call(e,i,n,this)}),this)}),this)},oe.T=function(){es(this);for(var t=this.g.R(),e=this.g.T(),i=[],n=0;n<e.length;n++)for(var s=t[n],r=0;r<s.length;r++)i.push(e[n]);return i},oe.R=function(t){es(this);var e=[];if("string"==typeof t)ns(this,t)&&(e=Ce(e,this.g.get(rs(this,t))));else{t=this.g.R();for(var i=0;i<t.length;i++)e=Ce(e,t[i])}return e},oe.set=function(t,e){return es(this),this.i=null,ns(this,t=rs(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},oe.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},oe.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),i=0;i<e.length;i++){var n=e[i],s=encodeURIComponent(String(n));n=this.R(n);for(var r=0;r<n.length;r++){var a=s;""!==n[r]&&(a+="="+encodeURIComponent(String(n[r]))),t.push(a)}}return this.i=t.join("&")};function as(t){this.l=t||os,fe.PerformanceNavigationTiming?t=0<(t=fe.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(fe.g&&fe.g.Ea&&fe.g.Ea()&&fe.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var os=10;function ls(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hs(t){return t.h?1:t.g?t.g.size:0}function cs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function us(t,e){t.g?t.g.add(e):t.h=e}function fs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ds(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return ke(t.i)}function ps(){}function gs(){this.g=new ps}function ms(t,e,i){const n=i||"";try{Pn(t,(function(t,i){let s=t;ge(t)&&(s=Di(t)),e.push(n+i+"="+encodeURIComponent(s))}))}catch(t){throw e.push(n+"type="+encodeURIComponent("_badmap")),t}}function ys(t,e,i,n,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(n)}catch(t){}}function vs(t){this.l=t.$b||null,this.j=t.ib||!1}function ws(t,e){Ci.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=bs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}as.prototype.cancel=function(){if(this.i=ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ps.prototype.stringify=function(t){return fe.JSON.stringify(t,void 0)},ps.prototype.parse=function(t){return fe.JSON.parse(t,void 0)},Te(vs,hn),vs.prototype.g=function(){return new ws(this.l,this.j)},vs.prototype.i=function(t){return function(){return t}}({}),Te(ws,Ci);var bs=0;function Es(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ts(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Is(t)}function Is(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(oe=ws.prototype).open=function(t,e){if(this.readyState!=bs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Is(this)},oe.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||fe).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},oe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ts(this)),this.readyState=bs},oe.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==fe.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Es(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},oe.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ts(this):Is(this),3==this.readyState&&Es(this)}},oe.Ua=function(t){this.g&&(this.response=this.responseText=t,Ts(this))},oe.Ta=function(t){this.g&&(this.response=t,Ts(this))},oe.ha=function(){this.g&&Ts(this)},oe.setRequestHeader=function(t,e){this.v.append(t,e)},oe.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},oe.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var _s=fe.JSON.parse;function Ss(t){Ci.call(this),this.headers=new On,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=As,this.K=this.L=!1}Te(Ss,Ci);var As="",Cs=/^https?$/i,ks=["POST","PUT"];function Ls(t){return"content-type"==t.toLowerCase()}function Ds(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rs(t),Ps(t)}function Rs(t){t.D||(t.D=!0,ki(t,"complete"),ki(t,"error"))}function Ns(t){if(t.h&&void 0!==ue&&(!t.C[1]||4!=xs(t)||2!=t.ba()))if(t.v&&4==xs(t))Hi(t.Fa,0,t);else if(ki(t,"readystatechange"),4==xs(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===o){var s=String(t.H).match(jn)[1]||null;if(!s&&fe.self&&fe.self.location){var r=fe.self.location.protocol;s=r.substr(0,r.length-1)}n=!Cs.test(s?s.toLowerCase():"")}i=n}if(i)ki(t,"complete"),ki(t,"success");else{t.m=6;try{var a=2<xs(t)?t.g.statusText:""}catch(t){a=""}t.j=a+" ["+t.ba()+"]",Rs(t)}}finally{Ps(t)}}}function Ps(t,e){if(t.g){Os(t);const i=t.g,n=t.C[0]?de:null;t.g=null,t.C=null,e||ki(t,"ready");try{i.onreadystatechange=n}catch(t){}}}function Os(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(fe.clearTimeout(t.A),t.A=null)}function xs(t){return t.g?t.g.readyState:0}function Ms(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case As:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function js(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=function(t){let e="";return Me(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):Vn(t,e,i))}function Fs(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function Us(t){this.za=0,this.l=[],this.h=new Yi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fs("baseRetryDelayMs",5e3,t),this.$a=Fs("retryDelaySeedMs",1e4,t),this.Ya=Fs("forwardChannelMaxRetries",2,t),this.ra=Fs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new as(t&&t.concurrentRequestLimit),this.Ca=new gs,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function qs(t){if(Hs(t),3==t.G){var e=t.V++,i=Un(t.F);Vn(i,"SID",t.J),Vn(i,"RID",e),Vn(i,"TYPE","terminate"),zs(t,i),(e=new yn(t,t.h,e,void 0)).K=2,e.v=Xn(Un(i)),i=!1,fe.navigator&&fe.navigator.sendBeacon&&(i=fe.navigator.sendBeacon(e.v.toString(),"")),!i&&fe.Image&&((new Image).src=e.v,i=!0),i||(e.g=sr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Cn(e)}ir(t)}function $s(t){t.g&&(Ws(t),t.g.cancel(),t.g=null)}function Hs(t){$s(t),t.u&&(fe.clearTimeout(t.u),t.u=null),Qs(t),t.i.cancel(),t.m&&("number"==typeof t.m&&fe.clearTimeout(t.m),t.m=null)}function Bs(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Vs(t)}function Vs(t){ls(t.i)||t.m||(t.m=!0,Mi(t.Ha,t),t.C=0)}function Xs(t,e){var i;i=e?e.m:t.V++;const n=Un(t.F);Vn(n,"SID",t.J),Vn(n,"RID",i),Vn(n,"AID",t.U),zs(t,n),t.o&&t.s&&js(n,t.o,t.s),i=new yn(t,t.h,i,t.C+1),null===t.o&&(i.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ks(t,i,1e3),i.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),us(t.i,i),Tn(i,n,e)}function zs(t,e){t.j&&Pn({},(function(t,i){Vn(e,i,t)}))}function Ks(t,e,i){i=Math.min(t.l.length,i);var n=t.j?be(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let a=0;a<i;a++){let i=s[a].h;const o=s[a].g;if(i-=e,0>i)e=Math.max(0,s[a].h-100),r=!1;else try{ms(o,t,"req"+i+"_")}catch(t){n&&n(o)}}if(r){n=t.join("&");break t}}}return t=t.l.splice(0,i),e.D=t,n}function Gs(t){t.g||t.u||(t.Y=1,Mi(t.Ga,t),t.A=0)}function Ys(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=an(be(t.Ga,t),tr(t,t.A)),t.A++,!0)}function Ws(t){null!=t.B&&(fe.clearTimeout(t.B),t.B=null)}function Js(t){t.g=new yn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Un(t.oa);Vn(e,"RID","rpc"),Vn(e,"SID",t.J),Vn(e,"CI",t.N?"0":"1"),Vn(e,"AID",t.U),zs(t,e),Vn(e,"TYPE","xmlhttp"),t.o&&t.s&&js(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var i=t.g;t=t.la,i.K=1,i.v=Xn(Un(e)),i.s=null,i.U=!0,In(i,t)}function Qs(t){null!=t.v&&(fe.clearTimeout(t.v),t.v=null)}function Zs(t,e){var i=null;if(t.g==e){Qs(t),Ws(t),t.g=null;var n=2}else{if(!cs(t.i,e))return;i=e.D,fs(t.i,e),n=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;ki(n=Zi(),new rn(n,i,e,s)),Vs(t)}else Gs(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==n&&function(t,e){return!(hs(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=an(be(t.Ha,t,e),tr(t,t.C)),t.C++,0)))}(t,e)||2==n&&Ys(t)))switch(i&&0<i.length&&(e=t.i,e.i=e.i.concat(i)),s){case 1:er(t,5);break;case 4:er(t,10);break;case 3:er(t,6);break;default:er(t,2)}}function tr(t,e){let i=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(i*=2),i*e}function er(t,e){if(t.h.info("Error code "+e),2==e){var i=null;t.j&&(i=null);var n=be(t.jb,t);i||(i=new Fn("//www.google.com/images/cleardot.gif"),fe.location&&"http"==fe.location.protocol||qn(i,"https"),Xn(i)),function(t,e){const i=new Yi;if(fe.Image){const n=new Image;n.onload=Ee(ys,i,n,"TestLoadImage: loaded",!0,e),n.onerror=Ee(ys,i,n,"TestLoadImage: error",!1,e),n.onabort=Ee(ys,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=Ee(ys,i,n,"TestLoadImage: timeout",!1,e),fe.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}(i.toString(),n)}else sn(2);t.G=0,t.j&&t.j.va(e),ir(t),Hs(t)}function ir(t){t.G=0,t.I=-1,t.j&&(0==ds(t.i).length&&0==t.l.length||(t.i.i.length=0,ke(t.l),t.l.length=0),t.j.ua())}function nr(t,e,i){let n=function(t){return t instanceof Fn?Un(t):new Fn(t,void 0)}(i);if(""!=n.i)e&&$n(n,e+"."+n.i),Hn(n,n.m);else{const t=fe.location;n=function(t,e,i,n){var s=new Fn(null,void 0);return t&&qn(s,t),e&&$n(s,e),i&&Hn(s,i),n&&(s.l=n),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,i)}return t.aa&&Me(t.aa,(function(t,e){Vn(n,e,t)})),e=t.D,i=t.sa,e&&i&&Vn(n,e,i),Vn(n,"VER",t.ma),zs(t,n),n}function sr(t,e,i){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=i&&t.Ba&&!t.qa?new Ss(new vs({ib:!0})):new Ss(t.qa)).L=t.H,e}function rr(){}function ar(){if(Ve&&!(10<=Number(ni)))throw Error("Environmental error: no available transport.")}function or(t,e){Ci.call(this),this.g=new Us(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Le(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Le(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new cr(this)}function lr(t){pn.call(this);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function hr(){gn.call(this),this.status=1}function cr(t){this.g=t}(oe=Ss.prototype).ea=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fn.g(),this.C=this.u?cn(this.u):cn(fn),this.g.onreadystatechange=be(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ds(this,t)}t=i||"";const s=new On(this.headers);n&&Pn(n,(function(t,e){s.set(e,t)})),n=function(t){t:{var e=Ls;const i=t.length,n="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)if(s in n&&e.call(void 0,n[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),i=fe.FormData&&t instanceof fe.FormData,!(0<=Se(ks,e))||n||i||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Os(this),0<this.B&&((this.K=function(t){return Ve&&ei()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.pa,this)):this.A=Hi(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ds(this,t)}},oe.pa=function(){void 0!==ue&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ki(this,"timeout"),this.abort(8))},oe.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ki(this,"complete"),ki(this,"abort"),Ps(this))},oe.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ps(this,!0)),Ss.Z.M.call(this)},oe.Fa=function(){this.s||(this.F||this.v||this.l?Ns(this):this.cb())},oe.cb=function(){Ns(this)},oe.ba=function(){try{return 2<xs(this)?this.g.status:-1}catch(t){return-1}},oe.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},oe.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),_s(e)}},oe.Da=function(){return this.m},oe.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(oe=Us.prototype).ma=8,oe.G=1,oe.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},oe.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new yn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=je(r),Ue(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,i=0;i<this.l.length;i++){var n=this.l[i];if(void 0===(n="__data__"in n.g&&"string"==typeof(n=n.g.__data__)?n.length:void 0))break;if(4096<(e+=n)){e=i;break t}if(4096===e||i===this.l.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Ks(this,s,e),Vn(i=Un(this.F),"RID",t),Vn(i,"CVER",22),this.D&&Vn(i,"X-HTTP-Session-Id",this.D),zs(this,i),this.o&&r&&js(i,this.o,r),us(this.i,s),this.Ra&&Vn(i,"TYPE","init"),this.ja?(Vn(i,"$req",e),Vn(i,"SID","null"),s.$=!0,Tn(s,i,null)):Tn(s,i,e),this.G=2}}else 3==this.G&&(t?Xs(this,t):0==this.l.length||ls(this.i)||Xs(this))},oe.Ga=function(){if(this.u=null,Js(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=an(be(this.bb,this),t)}},oe.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,sn(10),$s(this),Js(this))},oe.ab=function(){null!=this.v&&(this.v=null,$s(this),Ys(this),sn(19))},oe.jb=function(t){t?(this.h.info("Successfully pinged google.com"),sn(2)):(this.h.info("Failed to ping google.com"),sn(1))},(oe=rr.prototype).xa=function(){},oe.wa=function(){},oe.va=function(){},oe.ua=function(){},oe.Oa=function(){},ar.prototype.g=function(t,e){return new or(t,e)},Te(or,Ci),or.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,i=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mi(be(t.hb,t,e))),sn(0),t.W=e,t.aa=i||{},t.N=t.X,t.F=nr(t,null,t.W),Vs(t)},or.prototype.close=function(){qs(this.g)},or.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Bs(this.g,e)}else this.v?((e={}).__data__=Di(t),Bs(this.g,e)):Bs(this.g,t)},or.prototype.M=function(){this.g.j=null,delete this.j,qs(this.g),delete this.g,or.Z.M.call(this)},Te(lr,pn),Te(hr,gn),Te(cr,rr),cr.prototype.xa=function(){ki(this.g,"a")},cr.prototype.wa=function(t){ki(this.g,new lr(t))},cr.prototype.va=function(t){ki(this.g,new hr(t))},cr.prototype.ua=function(){ki(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,or.prototype.send=or.prototype.u,or.prototype.open=or.prototype.m,or.prototype.close=or.prototype.close,on.NO_ERROR=0,on.TIMEOUT=8,on.HTTP_ERROR=6,ln.COMPLETE="complete",un.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",Ci.prototype.listen=Ci.prototype.N,Ss.prototype.listenOnce=Ss.prototype.O,Ss.prototype.getLastError=Ss.prototype.La,Ss.prototype.getLastErrorCode=Ss.prototype.Da,Ss.prototype.getStatus=Ss.prototype.ba,Ss.prototype.getResponseJson=Ss.prototype.Qa,Ss.prototype.getResponseText=Ss.prototype.ga,Ss.prototype.send=Ss.prototype.ea;ce.createWebChannelTransport=function(){return new ar},ce.getStatEventTarget=function(){return Zi()},ce.ErrorCode=on,ce.EventType=ln,ce.Event=Ji,ce.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ce.FetchXmlHttpFactory=vs,ce.WebChannel=un,ce.XhrIo=Ss,s("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}ur.UNAUTHENTICATED=new ur(null),ur.GOOGLE_CREDENTIALS=new ur("google-credentials-uid"),ur.FIRST_PARTY=new ur("first-party-uid"),ur.MOCK_USER=new ur("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let fr="9.8.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new(0,Z.Logger)("@firebase/firestore");function pr(t,...e){if(dr.logLevel<=Z.LogLevel.DEBUG){const i=e.map(mr);dr.debug(`Firestore (${fr}): ${t}`,...i)}}function gr(t,...e){if(dr.logLevel<=Z.LogLevel.ERROR){const i=e.map(mr);dr.error(`Firestore (${fr}): ${t}`,...i)}}function mr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t="Unexpected state"){const e=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: `+t;throw gr(e),new Error(e)}function vr(t,e){t||yr()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class br extends tt.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ir{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ur.UNAUTHENTICATED)))}shutdown(){}}class _r{start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,t.enqueueRetryable((()=>n(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},a=t=>{pr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>a(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?a(t):(pr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(pr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(vr("string"==typeof e.accessToken),new Tr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return vr(null===t||"string"==typeof t),new ur(t)}constructor(t){this.t=t,this.currentUser=ur.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Sr{constructor(t,e,i){this.type="FirstParty",this.user=ur.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const n=t.auth.getAuthHeaderValueForFirstParty([]);n&&this.headers.set("Authorization",n),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Ar{getToken(){return Promise.resolve(new Sr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ur.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,i){this.h=t,this.l=e,this.m=i}}class Cr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kr{start(t,e){const i=t=>{null!=t.error&&pr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.p;return this.p=t.token,pr("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>i(e)))};const n=t=>{pr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):pr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(vr("string"==typeof t.token),this.p=t.token,new Cr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let e=0;e<t;e++)i[e]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const n=Lr(40);for(let s=0;s<n.length;++s)i.length<20&&n[s]<e&&(i+=t.charAt(n[s]%t.length))}return i}}function Rr(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{get length(){return this.len}isEqual(t){return 0===Nr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Nr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),s=e.get(n);if(i<s)return-1;if(i>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,i){void 0===e?e=0:e>t.length&&yr(),void 0===i?i=t.length-e:i>t.length-e&&yr(),this.segments=t,this.offset=e,this.len=i}}class Pr extends Nr{construct(t,e,i){return new Pr(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new br(wr.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new Pr(e)}static emptyPath(){return new Pr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{static fromPath(t){return new Or(Pr.fromString(t))}static fromName(t){return new Or(Pr.fromString(t).popFirst(5))}static empty(){return new Or(Pr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Pr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Pr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Or(new Pr(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,i,n){this.indexId=t,this.collectionGroup=e,this.fields=i,this.indexState=n}}xr.UNKNOWN_ID=-1;function Mr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
jr.ot=-1;class Fr{insert(t,e){return new Fr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,qr.BLACK,null,null))}remove(t){return new Fr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ur(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ur(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ur(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||qr.EMPTY}}class Ur{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&n&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class qr{copy(t,e,i,n,s){return new qr(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const s=i(t,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===s?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return qr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return qr.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yr();if(this.right.isRed())throw yr();const t=this.left.check();if(t!==this.right.check())throw yr();return t+(this.isRed()?0:1)}constructor(t,e,i,n,s){this.key=t,this.value=e,this.color=null!=i?i:qr.RED,this.left=null!=n?n:qr.EMPTY,this.right=null!=s?s:qr.EMPTY,this.size=this.left.size+1+this.right.size}}qr.EMPTY=null,qr.RED=!0,qr.BLACK=!1,qr.EMPTY=new class{get key(){throw yr()}get value(){throw yr()}get color(){throw yr()}get left(){throw yr()}get right(){throw yr()}copy(t,e,i,n,s){return this}insert(t,e,i){return new qr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Hr(this.data.getIterator())}getIteratorFrom(t){return new Hr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof $r))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new $r(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Fr(this.comparator)}}class Hr{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}let Br=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{static fromBase64String(t){const e=atob(t);return new Vr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new Vr(e)}[Br](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Rr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Vr.EMPTY_BYTE_STRING=new Vr("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function zr(t){return"string"==typeof t?Vr.fromBase64String(t):Vr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(t,e,i,n,s,r,a,o){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class Gr{static empty(){return new Gr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Gr&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){return 0===t&&1/t==-1/0}function Wr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jr,Qr;(Qr=Jr||(Jr={}))[Qr.OK=0]="OK",Qr[Qr.CANCELLED=1]="CANCELLED",Qr[Qr.UNKNOWN=2]="UNKNOWN",Qr[Qr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qr[Qr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qr[Qr.NOT_FOUND=5]="NOT_FOUND",Qr[Qr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qr[Qr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qr[Qr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qr[Qr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qr[Qr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qr[Qr.ABORTED=10]="ABORTED",Qr[Qr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qr[Qr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qr[Qr.INTERNAL=13]="INTERNAL",Qr[Qr.UNAVAILABLE=14]="UNAVAILABLE",Qr[Qr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Fr(Or.comparator);new Fr(Or.comparator);new Fr(Or.comparator),new $r(Or.comparator);new $r(Rr);const Zr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ta=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ea=ta;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Xr(t.integerValue));else if("doubleValue"in t){const i=Xr(t.doubleValue);isNaN(i)?this.ce(e,13):(this.ce(e,15),Yr(i)?e.ae(0):e.ae(i))}else if("timestampValue"in t){const i=t.timestampValue;this.ce(e,20),"string"==typeof i?e.he(i):(e.he(`${i.seconds||""}`),e.ae(i.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(zr(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const i=t.geoPointValue;this.ce(e,45),e.ae(i.latitude||0),e.ae(i.longitude||0)}else"mapValue"in t?Wr(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):yr()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const i=t.fields||{};this.ce(e,55);for(const t of Object.keys(i))this.le(t,e),this.oe(i[t],e)}me(t,e){const i=t.values||[];this.ce(e,50);for(const t of i)this.oe(t,e)}_e(t,e){this.ce(e,37),Or.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}constructor(){}}ia.ye=new ia;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class na{static withCacheSize(t){return new na(t,na.DEFAULT_COLLECTION_PERCENTILE,na.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */na.DEFAULT_COLLECTION_PERCENTILE=10,na.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,na.DEFAULT=new na(41943040,na.DEFAULT_COLLECTION_PERCENTILE,na.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),na.DISABLED=new na(-1,0,0);function sa(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),n=Math.max(0,e-i);n>0&&pr("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,n,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(t,e,i=1e3,n=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=i,this.fo=n,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aa{static createAndSchedule(t,e,i,n,s){const r=Date.now()+i,a=new aa(t,e,r,n,s);return a.start(i),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new br(wr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,i,n,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function oa(t,e){if(gr("AsyncQueue",`${e}: ${t}`),Mr(t))return new br(wr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new br(wr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=oa(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=ur.UNAUTHENTICATED,this.clientId=Dr.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{pr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(t=>(pr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}const ha=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new br(wr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new br(wr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,i,n){if(!0===e&&!0===n)throw new br(wr.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{get app(){if(!this._app)throw new br(wr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new br(wr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ca(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ir;switch(t.type){case"gapi":const e=t.client;return vr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Ar(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new br(wr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ha.get(t);e&&(pr("ComponentProvider","Removing Datastore"),ha.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,i){this._authCredentials=e,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ca({}),this._settingsFrozen=!1,t instanceof Gr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new br(wr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(t.options.projectId)}(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=sa();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Er;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!Mr(t))throw t;pr("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;throw gr("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,i){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const n=aa.createAndSchedule(this,t,e,i,(t=>this.Wc(t)));return this.$c.push(n),n}Gc(){this.Bc&&yr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ra(this,"async_queue_retry"),this.Kc=()=>{const t=sa();t&&pr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=sa();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}}class da extends ua{_terminate(){return this._firestoreClient||pa(this),this._firestoreClient.terminate()}constructor(t,e,i){super(t,e,i),this.type="firestore",this._queue=new fa,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function pa(t){var e;const i=t._freezeSettings(),n=(s=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",a=t._persistenceKey,new Kr(s,r,a,(o=i).host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));var s,r,a,o;t._firestoreClient=new la(t._authCredentials,t._appCheckCredentials,t._queue,n)}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){var i;i=Q.SDK_VERSION,fr=i,(0,Q._registerComponent)(new(0,et.Component)("firestore",((t,{options:i})=>{const n=t.getProvider("app").getImmediate(),s=new da(n,new _r(t.getProvider("auth-internal")),new kr(t.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC")),(0,Q.registerVersion)("@firebase/firestore","3.4.10",t),(0,Q.registerVersion)("@firebase/firestore","3.4.10","esm2017")}();const ga=(0,J.initializeApp)({apiKey:"AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU",authDomain:"team-project-filmoteka-4a376.firebaseapp.com",projectId:"team-project-filmoteka-4a376",storageBucket:"team-project-filmoteka-4a376.appspot.com",messagingSenderId:"642268048302",appId:"1:642268048302:web:153e44a9f24c349d73f63f",measurementId:"G-0YT3H2K0Y7"}),ma=(function(t=(0,Q.getApp)()){t=(0,tt.getModularInstance)(t);const e=(0,Q._getProvider)(t,"analytics");e.isInitialized()?e.getImmediate():function(t,e={}){const i=(0,Q._getProvider)(t,"analytics");if(i.isInitialized()){const t=i.getImmediate();if((0,tt.deepEqual)(e,i.getOptions()))return t;throw Bt.create("already-initialized")}i.initialize({options:e})}(t)}(ga),function(t=(0,Q.getApp)()){(0,Q._getProvider)(t,"firestore").getImmediate()}(ga),(0,le.getAuth)()),ya=document.querySelector("#btnLogin"),va=document.querySelector("#btnSignup"),wa=document.querySelector("#user-email"),ba=document.querySelector("#user-name"),Ea=document.querySelector("[data-modal]"),Ta=document.querySelector("#user-login"),Ia=document.querySelector("#user-library"),_a=document.querySelector("#user-logout");ya.addEventListener("click",(async t=>{t.preventDefault();const e=wa.value,i=ba.value;try{await(0,le.signInWithEmailAndPassword)(ma,e,i).then((t=>{t&&(Ea.classList.toggle("is-hidden"),wa.value="",ba.value="")}))}catch(t){Sa(t)}}));va.addEventListener("click",(async t=>{t.preventDefault();const e=wa.value,i=ba.value;try{await(0,le.createUserWithEmailAndPassword)(ma,e,i).then((async t=>{Ea.classList.toggle("is-hidden")}))}catch(t){i.length<7?v.Notify.info("Your password have less than 6 characters"):Sa(t)}}));const Sa=t=>{t.code==le.AuthErrorCodes.INVALID_PASSWORD?v.Notify.info("Wrong password. Try again"):v.Notify.info(`Error: ${t.message}`)};(0,le.onAuthStateChanged)(ma,(t=>{t&&Aa()}));function Aa(){Ta.classList.toggle("hidden-link"),Ia.classList.toggle("hidden-link"),_a.classList.toggle("hidden-link")}_a.addEventListener("click",(async()=>{await(0,le.signOut)(ma),Aa()}));
//# sourceMappingURL=index.e9d0a927.js.map
