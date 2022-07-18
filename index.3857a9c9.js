!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"EVgbq":"index.3857a9c9.js","6q1P2":"image-not-found-adaptive.85e4068c.png","7nwxg":"library.17916b71.js"}')),i("7SdJ7");var a=i("bpxeT"),s=i("2TvXO"),o=document.querySelector(".advice-list"),u=document.querySelector(".advice-list__nav-btn--left");function c(t){var e=Number(22),n=Number(-22),r=0,i=t.currentTarget.classList.contains("advice-list__nav-btn--right"),a=setInterval((function(){r!=e&&r!=n?(i?r+=1:r-=1,o.scrollBy(r,0)):clearInterval(a)}),30)}document.querySelector(".advice-list__nav-btn--right").addEventListener("click",c),u.addEventListener("click",c),o.addEventListener("touchstart",(function(t){l=t.touches[0].clientX,h=t.touches[0].clientY}),!1),o.addEventListener("touchmove",(function(t){if(!l||!h)return;var e=t.touches[0].clientX,n=t.touches[0].clientY,r=l-e,i=h-n;Math.abs(r),Math.abs(i);l=null,h=null}),!1);var l=null,h=null;a=i("bpxeT"),s=i("2TvXO");t(it=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var f="c8ef48bae82b60cf66a4f0e6e3dd153e";function p(){return d.apply(this,arguments)}function d(){return(d=t(a)(t(s).mark((function e(){return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(it)("3/genre/movie/list?api_key=".concat(f));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g,v=document.querySelector(".advice-list");(g=t(a)(t(s).mark((function e(){var n,r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:n=t.sent,r=n.data.genres,i=r.map((function(t){var e=t.id,n=t.name;return'<li class="advice-list__item"> <button type="button" class="advice-list__btn" data-id="'.concat(e,'">').concat(n,"</button></li>")})).join(""),v.innerHTML=i;case 6:case"end":return t.stop()}}),e)}))),function(){return g.apply(this,arguments)})();a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO");t(it=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var y="c8ef48bae82b60cf66a4f0e6e3dd153e";function m(t){return b.apply(this,arguments)}function b(){return(b=t(a)(t(s).mark((function e(n){return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(it)("/3/movie/".concat(n,"/recommendations?api_key=").concat(y));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(t){var e=t.length-1;return t[Math.round(Math.random()*(e-0)+0)]}var w=i("jtBSM"),x=i("bsgZn"),T=i("k88BM"),E=i("13upn"),I=i("h6c0i"),_=document.querySelector(".advice-list");document.querySelector(".backdrop");function S(){return(S=t(a)(t(s).mark((function e(n){var r,i,a,o,u,c;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("BUTTON"===n.target.nodeName){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,r=n.target.dataset.id,t.next=6,m(r);case 6:return i=t.sent,a=i.data.results,o=k(a),u=o.id,t.next=12,(0,x.getModalData)(u);case 12:c=t.sent,(0,T.showModal)(c),(0,E.spinnerOff)(),(0,w.setResultData)(a),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),I.Notify.info("We are sorry but this genre is empty.");case 21:case"end":return t.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}_.addEventListener("click",(function(t){return S.apply(this,arguments)})),i("3gTut");a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO");t(it=i("dIxxU")).defaults.baseURL="https://api.themoviedb.org";var A="c8ef48bae82b60cf66a4f0e6e3dd153e";function C(t){return L.apply(this,arguments)}function L(){return(L=t(a)(t(s).mark((function e(n){return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(it)("3/trending/all/day?api_key=".concat(A,"&page=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D,R=i("l5bVx"),N=t(i("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,n,r,i,a){var s,o=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,c="function",l=e.escapeExpression,h=e.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<li class="gallery-list__item">\n    <div data-filmId="'+l((void 0===(s=null!=(s=h(r,"filmId")||(null!=n?h(n,"filmId"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):s)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="'+l((void 0===(s=null!=(s=h(r,"urlImg")||(null!=n?h(n,"urlImg"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"urlImg",hash:{},data:a,loc:{start:{line:4,column:48},end:{line:4,column:58}}}):s)+'" alt="'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:4,column:65},end:{line:4,column:74}}}):s)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):s)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+l((void 0===(s=null!=(s=h(r,"ganres")||(null!=n?h(n,"ganres"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"ganres",hash:{},data:a,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):s)+' | <span class="gallery-list__Year">'+l((void 0===(s=null!=(s=h(r,"relisYer")||(null!=n?h(n,"relisYer"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"relisYer",hash:{},data:a,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):s)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>\n"},useData:!0}),O=i("88LCY"),P=i("4ltia");function M(e){var n="";return e.forEach((function(e){var r=e.genre_ids?e.genre_ids.map((function(t){return(0,P.convertGanres)(O.genreIds,t)})):["Others"];r.length>2&&(r.length=2,r.push("Others"));var i="";i=e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):e.profile_path?"https://image.tmdb.org/t/p/w300".concat(e.profile_path):t(D);var a={filmId:e.id,title:e.name||e.title||"XXXX",urlImg:i,relisYer:(e.release_date||e.first_air_date||"XXXX").slice(0,4),ganres:r.join(", ")||"Others"};n+=N(a)})),n}D=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("6q1P2");var j={galleryListEl:document.querySelector(".gallery-list"),libraryEmptyWachEl:document.querySelector(".js-watched-text")},F=(w=i("jtBSM"),a=i("bpxeT"),s=i("2TvXO"),w=i("jtBSM"),document.querySelector(".pagination")),U=document.querySelector(".gallery-list"),q=1;function B(t){return H.apply(this,arguments)}function H(){return(H=t(a)(t(s).mark((function e(n){var r,i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(n);case 3:return r=t.sent,t.next=6,r.data.results;case 6:i=t.sent,a=r.data.page,o=r.data.total_pages,U.innerHTML="",j.galleryListEl.insertAdjacentHTML("afterbegin",M(i)),(0,w.clearResultData)(),(0,w.setResultData)(i),X(a,o),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),j.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>');case 19:case"end":return t.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function X(t,e){q=t;var n="",r=t-1,i=t+2,a=t+1;t>1&&(n+='<li class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),t>2&&(n+='<li class="pagination__number display-none">1</li>'),t>4&&(n+='<li class="pagination__number display-none">...</li>'),t>3&&(n+='<li class="pagination__number">'.concat(t-2,"</li>")),t>=2&&(n+='<li class="pagination__number">'.concat(r,"</li>")),n+='<li class="pagination__number active">'.concat(t,"</li>"),t<e-1&&(n+='<li class="pagination__number">'.concat(a,"</li>")),t<e-2&&(n+='<li class="pagination__number">'.concat(i,"</li>")),t<=e-1&&(t<e-3&&(n+='<li class="pagination__number display-none">...</li>'),n+='<li class="pagination__number display-none">'.concat(e,"</li>")),t<e&&(n+="<li class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),F.innerHTML=n,F.addEventListener("click",V)}function V(t){if("LI"===t.target.nodeName){var e=t.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),e){case"<":B(q-1);break;case">":B(q+1);break;case"...":break;default:B(e)}}}function K(){return(K=t(a)(t(s).mark((function e(){var n,r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(1);case 3:n=t.sent,r=n.data.results,j.galleryListEl.insertAdjacentHTML("afterbegin",M(r)),X(1,n.data.total_pages),(0,w.clearResultData)(),(0,w.setResultData)(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),j.galleryListEl.insertAdjacentHTML("afterbegin",'<li class="gallery-list__error">No connection to server!!!</li>');case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return K.apply(this,arguments)}));var z,Y,G,W,J,$,Q,Z=document.querySelector(".add-block"),tt=document.querySelector(".add-block__time"),et=document.querySelector(".add-block__btn");Y=(z=["https://re-media.plektan.com/img/prop/40/7f/407f503405e4ad187970a5873d2756a0.jpg","https://highload.today/wp-content/uploads/2022/02/Kotiku-prihoditsya-iskat-rabotu.-Ne-nado-tak.jpg"]).length-1,G=Math.round(Math.random()*(Y-0)+0),W='<img\n    src="'.concat(z[G],'"\n    alt="advertising"\n    class="add-block__image"\n  />'),Z.insertAdjacentHTML("beforeend",W),J=Date.now(),$=0,Q=setInterval((function(){if(1===$)return clearInterval(Q),tt.classList.add("is-hidden"),void et.classList.remove("is-hidden");var t=Date.now();$=Number(11-((t-J)/1e3).toFixed()),tt.textContent=$}),1e3),et.addEventListener("click",(function(){Z.classList.add("is-hidden")})),i("7SdJ7");a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT"),s=i("2TvXO"),a=i("bpxeT");var nt=i("8MBJY"),rt=i("a2hTj"),it=(s=i("2TvXO"),i("dIxxU")),at=new(function(){"use strict";function e(){t(nt)(this,e),this.searchQuery=""}return t(rt)(e,[{key:"getFilm",value:function(e){var n=this;return t(a)(t(s).mark((function r(){var i,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("c8ef48bae82b60cf66a4f0e6e3dd153e","&language=en-US&query=").concat(n.searchQuery,"&page=").concat(e,"&include_adult=false"),t.prev=1,t.next=4,it.get(i);case 4:return a=t.sent,t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),r,null,[[1,8]])})))()}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),e}());function st(t,e){return ot.apply(this,arguments)}function ot(){return(ot=t(a)(t(s).mark((function e(n,r){var i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return at.query=n,t.next=3,at.getFilm(r);case 3:return i=t.sent,a=i.data.results,o=i.data.total_pages,t.abrupt("return",{arrayFilms:a,totalPages:o});case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var ut=[{id:12,name:"Adventure"},{id:14,name:"Fantasy"},{id:16,name:"Animation"},{id:18,name:"Drama"},{id:27,name:"Horror"},{id:28,name:"Action"},{id:35,name:"Comedy"},{id:36,name:"History"},{id:37,name:"Western"},{id:53,name:"Thriller"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:878,name:"Science Fiction"},{id:9648,name:"Mystery"},{id:10402,name:"Music"},{id:10749,name:"Romance"},{id:10751,name:"Family"},{id:10752,name:"War"},{id:10759,name:"Action & Adventure"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:10770,name:"TV Movie"}];function ct(t,e){var n=[],r="";t.filter((function(t){t.id===e&&n.push(t.name)}));var i=!0,a=!1,s=void 0;try{for(var o,u=n[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;r+=" ".concat(c)}}catch(t){a=!0,s=t}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}return r}function lt(e){return e.map((function(e){var n=e.id,r=e.original_title,i=e.title,a=e.genre_ids,s=e.poster_path,o=e.backdrop_path,u=e.release_date,c="https://image.tmdb.org/t/p/w500",l=a.map((function(t){return ct(ut,t)}));return s||o||(c=t(D),s="",o=""),{filmId:n,urlImg:"".concat(c).concat(s||o),title:r||i,ganres:l.length>=3?"".concat(l[0],", ").concat(l[1],", Other"):l.join(", ")||"Film",relisYer:(u||"XXXX").slice(0,4)}}))}var ht={text:document.querySelector(".home-header_line_message"),galleryList:document.querySelector(".gallery-list"),form:document.querySelector(".home-header_search"),input:document.querySelector(".home-header_search_input"),btn:document.querySelector(".home-header_search_button"),backdropSpinnerRef:document.querySelector(".backdrop-spinner"),paginationList:document.querySelector(".pagination")},ft=(R=i("l5bVx"),t(i("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,n,r,i,a){var s,o=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,c="function",l=e.escapeExpression,h=e.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<li class="gallery-list__item">\n    <div data-filmId="'+l((void 0===(s=null!=(s=h(r,"filmId")||(null!=n?h(n,"filmId"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"filmId",hash:{},data:a,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):s)+'" class="gallery-list__card">\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="'+l((void 0===(s=null!=(s=h(r,"urlImg")||(null!=n?h(n,"urlImg"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"urlImg",hash:{},data:a,loc:{start:{line:4,column:48},end:{line:4,column:58}}}):s)+'" alt="'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:4,column:65},end:{line:4,column:74}}}):s)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+l((void 0===(s=null!=(s=h(r,"title")||(null!=n?h(n,"title"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"title",hash:{},data:a,loc:{start:{line:8,column:44},end:{line:8,column:53}}}):s)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+l((void 0===(s=null!=(s=h(r,"ganres")||(null!=n?h(n,"ganres"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"ganres",hash:{},data:a,loc:{start:{line:11,column:47},end:{line:11,column:57}}}):s)+' | <span class="gallery-list__Year">'+l((void 0===(s=null!=(s=h(r,"relisYer")||(null!=n?h(n,"relisYer"):n))?s:u)?"undefined":t(R)(s))===c?s.call(o,{name:"relisYer",hash:{},data:a,loc:{start:{line:11,column:93},end:{line:11,column:105}}}):s)+"</span> </p>\n\n            </div>\n            </div>\n    </div>\n</li>"},useData:!0}));function pt(t){var e=t.map((function(t){return ft(t)})).join("");ht.galleryList.innerHTML=e}E=i("13upn"),w=i("jtBSM"),a=i("bpxeT"),s=i("2TvXO"),E=i("13upn"),w=i("jtBSM");var dt=Number(1);function gt(t,e){var n=Number(t),r=Number(e);dt=Number(n);var i="",a=n-Number(2),s=n-Number(1),o=n+Number(2),u=n+Number(1);n>1&&(i+='<li name="pagin-search-item" class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),n>2&&(i+='<li name="pagin-search-item" class="pagination__number display-none">1</li>'),n>4&&(i+='<li name="pagin-search-item" class="pagination__number display-none">...</li>'),n>3&&(i+='<li name="pagin-search-item" class="pagination__number">'.concat(a,"</li>")),n>=2&&(i+='<li name="pagin-search-item" class="pagination__number">'.concat(s,"</li>")),i+='<li name="pagin-search-item" class="pagination__number active">'.concat(n,"</li>"),n<e-1&&(i+='<li name="pagin-search-item" class="pagination__number">'.concat(u,"</li>")),n<e-2&&(i+='<li name="pagin-search-item" class="pagination__number">'.concat(o,"</li>")),n<=e-1&&(n<e-3&&(i+='<li name="pagin-search-item" class="pagination__number display-none">...</li>'),i+='<li name="pagin-search-item" class="pagination__number display-none">'.concat(r,"</li>")),n<e&&(i+="<li name=\"pagin-search-item\" class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),ht.paginationList.innerHTML=i,ht.paginationList.removeEventListener("click",V),ht.paginationList.addEventListener("click",vt)}function vt(t){return yt.apply(this,arguments)}function yt(){return(yt=t(a)(t(s).mark((function e(n){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"===n.target.nodeName){t.next=2;break}return t.abrupt("return");case 2:r=n.target.textContent,window.scrollTo({top:240,behavior:"smooth"}),t.t0=r,t.next="<"===t.t0?7:">"===t.t0?9:"..."===t.t0?11:12;break;case 7:return mt(dt-1),t.abrupt("break",13);case 9:return mt(dt+1),t.abrupt("break",13);case 11:return t.abrupt("break",13);case 12:mt(r);case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function mt(t){return bt.apply(this,arguments)}function bt(){return(bt=t(a)(t(s).mark((function e(n){var r,i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=at.query,(0,E.spinnerOn)(),t.next=4,st(r,n);case 4:i=t.sent,a=i.arrayFilms,o=i.totalPages,(0,E.spinnerOff)(),(0,w.clearResultData)(),(0,w.setResultData)(a),pt(lt(a)),ht.paginationList.innerHTML="",gt(n,o);case 14:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function kt(){return(kt=t(a)(t(s).mark((function e(n){var r,i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),ht.input.addEventListener("input",xt),""!==(r=n.currentTarget.elements.searchQuery.value)){t.next=6;break}return wt(),t.abrupt("return");case 6:return(0,E.spinnerOn)(),t.next=9,st(r,1);case 9:if(i=t.sent,a=i.arrayFilms,o=i.totalPages,(0,E.spinnerOff)(),0!==a.length){t.next=17;break}return wt(),ht.paginationList.innerHTML="",t.abrupt("return");case 17:(0,w.clearResultData)(),(0,w.setResultData)(a),pt(lt(a)),ht.paginationList.innerHTML="",gt(1,o);case 23:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function wt(){ht.text.textContent="Search result not successful. Enter the correct movie name and"}function xt(t){ht.text.textContent=""}ht.form.addEventListener("submit",(function(t){return kt.apply(this,arguments)})),i("13upn"),i("6SrrD"),i("74hJy"),i("2Eauc"),function(){var t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)}();a=i("bpxeT"),s=i("2TvXO"),I=i("h6c0i");var Tt,Et=i("6Urw1"),It=(a=i("bpxeT"),nt=i("8MBJY"),rt=i("a2hTj"),i("hKHmD")),_t=i("1t1Wn"),St=(s=i("2TvXO"),i("MjY8E")),At=i("kZfxc"),Ct=i("2xDiJ"),Lt=i("6ExWU"),Dt=(a=i("bpxeT"),It=i("hKHmD"),i("8nrFW")),Rt=(s=i("2TvXO"),St=i("MjY8E"),Lt=i("6ExWU"),Ct=i("2xDiJ"),i("ajgRO")),Nt="@firebase/installations",Ot="0.5.10",Pt=1e4,Mt="w:".concat(Ot),jt="FIS_v2",Ft=36e5,Ut=(Tt={},t(It)(Tt,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),t(It)(Tt,"not-registered","Firebase Installation is not registered."),t(It)(Tt,"installation-not-found","Firebase Installation not found."),t(It)(Tt,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),t(It)(Tt,"app-offline","Could not process request. Application offline."),t(It)(Tt,"delete-pending-registration","Can't delete installation while there is a pending registration request."),Tt),qt=new(0,Ct.ErrorFactory)("installations","Installations",Ut);function Bt(t){return t instanceof Ct.FirebaseError&&t.code.includes("request-failed")}
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
 */function Ht(t){var e=t.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(e,"/installations")}function Xt(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function Vt(t,e){return Kt.apply(this,arguments)}function Kt(){return(Kt=t(a)(t(s).mark((function e(n,r){var i,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.json();case 2:return i=t.sent,a=i.error,t.abrupt("return",qt.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function zt(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Yt(t,e){var n=e.refreshToken,r=zt(t);return r.append("Authorization",function(t){return"".concat(jt," ").concat(t)}(n)),r}function Gt(t){return Wt.apply(this,arguments)}function Wt(){return(Wt=t(a)(t(s).mark((function e(n){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:if(!((r=t.sent).status>=500&&r.status<600)){t.next=5;break}return t.abrupt("return",n());case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Jt(t,e){return $t.apply(this,arguments)}function $t(){return($t=
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
t(a)(t(s).mark((function e(n,r){var i,a,o,u,c,l,h,f,p,d,g,v;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,u=Ht(i),c=zt(i),!(l=a.getImmediate({optional:!0}))){t.next=9;break}return t.next=7,l.getHeartbeatsHeader();case 7:(h=t.sent)&&c.append("x-firebase-client",h);case 9:return f={fid:o,authVersion:jt,appId:i.appId,sdkVersion:Mt},p={method:"POST",headers:c,body:JSON.stringify(f)},t.next=13,Gt((function(){return fetch(u,p)}));case 13:if(!(d=t.sent).ok){t.next=22;break}return t.next=17,d.json();case 17:return g=t.sent,v={fid:g.fid||o,registrationStatus:2,refreshToken:g.refreshToken,authToken:Xt(g.authToken)},t.abrupt("return",v);case 22:return t.next=24,Vt("Create Installation",d);case 24:throw t.sent;case 25:case"end":return t.stop()}}),e)})))).apply(this,arguments)}
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
 */function Qt(t){return new Promise((function(e){setTimeout(e,t)}))}
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
var Zt=/^[cdef][\w-]{21}$/;function te(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var n=function(e){return(n=e,btoa((r=String).fromCharCode.apply(r,t(Dt)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(e);return Zt.test(n)?n:""}catch(t){return""}}function ee(t){return"".concat(t.appName,"!").concat(t.appId)}
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
 */var ne=new Map;function re(t,e){var n=ee(t);ie(n,e),function(t,e){var n=se();n&&n.postMessage({key:t,fid:e});oe()}(n,e)}function ie(t,e){var n=ne.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){(0,s.value)(e)}}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}}var ae=null;function se(){return!ae&&"BroadcastChannel"in self&&((ae=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){ie(t.data.key,t.data.fid)}),ae}function oe(){0===ne.size&&ae&&(ae.close(),ae=null)}
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
 */var ue="firebase-installations-store",ce=null;function le(){return ce||(ce=(0,Rt.openDB)("firebase-installations-database",1,{upgrade:function(t,e){if(0===e)t.createObjectStore(ue)}})),ce}function he(t,e){return fe.apply(this,arguments)}function fe(){return(fe=t(a)(t(s).mark((function e(n,r){var i,a,o,u,c;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=ee(n),t.next=3,le();case 3:return a=t.sent,o=a.transaction(ue,"readwrite"),u=o.objectStore(ue),t.next=8,u.get(i);case 8:return c=t.sent,t.next=11,u.put(r,i);case 11:return t.next=13,o.done;case 13:return c&&c.fid===r.fid||re(n,r.fid),t.abrupt("return",r);case 15:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function pe(t){return de.apply(this,arguments)}function de(){return(de=t(a)(t(s).mark((function e(n){var r,i,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=ee(n),t.next=3,le();case 3:return i=t.sent,a=i.transaction(ue,"readwrite"),t.next=7,a.objectStore(ue).delete(r);case 7:return t.next=9,a.done;case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function ge(t,e){return ve.apply(this,arguments)}function ve(){return(ve=t(a)(t(s).mark((function e(n,r){var i,a,o,u,c,l;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=ee(n),t.next=3,le();case 3:return a=t.sent,o=a.transaction(ue,"readwrite"),u=o.objectStore(ue),t.next=8,u.get(i);case 8:if(c=t.sent,void 0!==(l=r(c))){t.next=15;break}return t.next=13,u.delete(i);case 13:t.next=17;break;case 15:return t.next=17,u.put(l,i);case 17:return t.next=19,o.done;case 19:return!l||c&&c.fid===l.fid||re(n,l.fid),t.abrupt("return",l);case 21:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function ye(t){return me.apply(this,arguments)}function me(){return(me=
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
t(a)(t(s).mark((function e(n){var r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,ge(n.appConfig,(function(t){var e=be(t),i=ke(n,e);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=t.sent).fid){t.next=9;break}return t.next=7,r;case 7:return t.t0=t.sent,t.abrupt("return",{installationEntry:t.t0});case 9:return t.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function be(t){return Ie(t||{fid:te(),registrationStatus:0})}function ke(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(qt.create("app-offline"))};var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=function(t,e){return we.apply(this,arguments)}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:xe(t)}:{installationEntry:e}}function we(){return(we=t(a)(t(s).mark((function e(n,r){var i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Jt(n,r);case 3:return i=t.sent,t.abrupt("return",he(n.appConfig,i));case 7:if(t.prev=7,t.t0=t.catch(0),!Bt(t.t0)||409!==t.t0.customData.serverCode){t.next=14;break}return t.next=12,pe(n.appConfig);case 12:t.next=16;break;case 14:return t.next=16,he(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw t.t0;case 17:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function xe(t){return Te.apply(this,arguments)}function Te(){return(Te=t(a)(t(s).mark((function e(n){var r,i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(n.appConfig);case 2:r=t.sent;case 3:if(1!==r.registrationStatus){t.next=11;break}return t.next=6,Qt(100);case 6:return t.next=8,Ee(n.appConfig);case 8:r=t.sent,t.next=3;break;case 11:if(0!==r.registrationStatus){t.next=22;break}return t.next=14,ye(n);case 14:if(i=t.sent,a=i.installationEntry,!(o=i.registrationPromise)){t.next=21;break}return t.abrupt("return",o);case 21:return t.abrupt("return",a);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Ee(t){return ge(t,(function(t){if(!t)throw qt.create("installation-not-found");return Ie(t)}))}function Ie(t){return 1===(e=t).registrationStatus&&e.registrationTime+Pt<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function _e(t,e){return Se.apply(this,arguments)}function Se(){return(Se=
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
t(a)(t(s).mark((function e(n,r){var i,a,o,u,c,l,h,f,p,d,g;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=Ae(i,r),u=Yt(i,r),!(c=a.getImmediate({optional:!0}))){t.next=9;break}return t.next=7,c.getHeartbeatsHeader();case 7:(l=t.sent)&&u.append("x-firebase-client",l);case 9:return h={installation:{sdkVersion:Mt,appId:i.appId}},f={method:"POST",headers:u,body:JSON.stringify(h)},t.next=13,Gt((function(){return fetch(o,f)}));case 13:if(!(p=t.sent).ok){t.next=22;break}return t.next=17,p.json();case 17:return d=t.sent,g=Xt(d),t.abrupt("return",g);case 22:return t.next=24,Vt("Generate Auth Token",p);case 24:throw t.sent;case 25:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Ae(t,e){var n=e.fid;return"".concat(Ht(t),"/").concat(n,"/authTokens:generate")}function Ce(t){return Le.apply(this,arguments)}function Le(){return Le=
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
t(a)(t(s).mark((function e(n){var r,i,a,o,u=arguments;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],t.next=4,ge(n.appConfig,(function(t){if(!Me(t))throw qt.create("not-registered");var e=t.authToken;if(!r&&je(e))return t;if(1===e.requestStatus)return i=De(n,r),t;if(!navigator.onLine)throw qt.create("app-offline");var a=Fe(t);return i=Oe(n,a),a}));case 4:if(a=t.sent,!i){t.next=11;break}return t.next=8,i;case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=a.authToken;case 12:return o=t.t0,t.abrupt("return",o);case 14:case"end":return t.stop()}}),e)}))),Le.apply(this,arguments)}function De(t,e){return Re.apply(this,arguments)}function Re(){return(Re=t(a)(t(s).mark((function e(n,r){var i,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ne(n.appConfig);case 2:i=t.sent;case 3:if(1!==i.authToken.requestStatus){t.next=11;break}return t.next=6,Qt(100);case 6:return t.next=8,Ne(n.appConfig);case 8:i=t.sent,t.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){t.next=16;break}return t.abrupt("return",Ce(n,r));case 16:return t.abrupt("return",a);case 17:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Ne(t){return ge(t,(function(t){if(!Me(t))throw qt.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+Pt<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}function Oe(t,e){return Pe.apply(this,arguments)}function Pe(){return(Pe=t(a)(t(s).mark((function e(n,r){var i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_e(n,r);case 3:return i=t.sent,a=Object.assign(Object.assign({},r),{authToken:i}),t.next=7,he(n.appConfig,a);case 7:return t.abrupt("return",i);case 10:if(t.prev=10,t.t0=t.catch(0),!Bt(t.t0)||401!==t.t0.customData.serverCode&&404!==t.t0.customData.serverCode){t.next=17;break}return t.next=15,pe(n.appConfig);case 15:t.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),t.next=20,he(n.appConfig,o);case 20:throw t.t0;case 21:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function Me(t){return void 0!==t&&2===t.registrationStatus}function je(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ft}(t)}function Fe(t){var e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ue(){return(Ue=
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
t(a)(t(s).mark((function e(n){var r,i,a,o;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n,t.next=3,ye(r);case 3:return i=t.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):Ce(r).catch(console.error),t.abrupt("return",a.fid);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function qe(){return qe=
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
t(a)(t(s).mark((function e(n){var r,i,a,o=arguments;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,t.next=4,Be(i);case 4:return t.next=6,Ce(i,r);case 6:return a=t.sent,t.abrupt("return",a.token);case 8:case"end":return t.stop()}}),e)}))),qe.apply(this,arguments)}function Be(t){return He.apply(this,arguments)}function He(){return(He=t(a)(t(s).mark((function e(n){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ye(n);case 2:if(!(r=t.sent.registrationPromise)){t.next=6;break}return t.next=6,r;case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Xe(t){return qt.create("missing-app-config-values",{valueName:t})}
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
 */var Ve="installations",Ke=function(t){var e=t.getProvider("app").getImmediate(),n=
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
function(t){if(!t||!t.options)throw Xe("App Configuration");if(!t.name)throw Xe("App Name");var e=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var s=i.value;if(!t.options[s])throw Xe(s)}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:(0,St._getProvider)(e,"heartbeat"),_delete:function(){return Promise.resolve()}}},ze=function(t){var e=t.getProvider("app").getImmediate(),n=(0,St._getProvider)(e,Ve).getImmediate(),r={getId:function(){return function(t){return Ue.apply(this,arguments)}(n)},getToken:function(t){return function(t){return qe.apply(this,arguments)}(n,t)}};return r};(0,St._registerComponent)(new(0,Lt.Component)(Ve,Ke,"PUBLIC")),(0,St._registerComponent)(new(0,Lt.Component)("installations-internal",ze,"PRIVATE")),(0,St.registerVersion)(Nt,Ot),(0,St.registerVersion)(Nt,Ot,"esm2017");
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
var Ye,Ge="analytics",We=6e4,Je="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$e="https://www.googletagmanager.com/gtag/js",Qe=new(0,At.Logger)("@firebase/analytics");
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
function Ze(t){return Promise.all(t.map((function(t){return t.catch((function(t){return t}))})))}function tn(t,e){var n=document.createElement("script");n.src="".concat($e,"?l=").concat(t,"&id=").concat(e),n.async=!0,document.head.appendChild(n)}function en(t,e,n,r,i,a){return nn.apply(this,arguments)}function nn(){return(nn=t(a)(t(s).mark((function e(n,r,i,a,o,u){var c,l,h;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a[o],t.prev=1,!c){t.next=7;break}return t.next=5,r[c];case 5:t.next=14;break;case 7:return t.next=9,Ze(i);case 9:if(l=t.sent,!(h=l.find((function(t){return t.measurementId===o})))){t.next=14;break}return t.next=14,r[h.appId];case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),Qe.error(t.t0);case 19:n("config",o,u);case 20:case"end":return t.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function rn(t,e,n,r,i){return an.apply(this,arguments)}function an(){return(an=t(a)(t(s).mark((function e(n,r,i,a,o){var u,c,l,h,f,p,d,g,v,y,m;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,u=[],!o||!o.send_to){t.next=38;break}return c=o.send_to,Array.isArray(c)||(c=[c]),t.next=7,Ze(i);case 7:l=t.sent,h=!0,f=!1,p=void 0,t.prev=9,d=c[Symbol.iterator]();case 11:if(h=(g=d.next()).done){t.next=24;break}if(v=g.value,y=l.find((function(t){return t.measurementId===v})),!(m=y&&r[y.appId])){t.next=19;break}u.push(m),t.next=21;break;case 19:return u=[],t.abrupt("break",24);case 21:h=!0,t.next=11;break;case 24:t.next=30;break;case 26:t.prev=26,t.t0=t.catch(9),f=!0,p=t.t0;case 30:t.prev=30,t.prev=31,h||null==d.return||d.return();case 33:if(t.prev=33,!f){t.next=36;break}throw p;case 36:return t.finish(33);case 37:return t.finish(30);case 38:return 0===u.length&&(u=Object.values(r)),t.next=41,Promise.all(u);case 41:n("event",a,o||{}),t.next=47;break;case 44:t.prev=44,t.t1=t.catch(0),Qe.error(t.t1);case 47:case"end":return t.stop()}}),e,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function sn(e,n,r,i,o){var u=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];window[i].push(arguments)};return window[o]&&"function"==typeof window[o]&&(u=window[o]),window[o]=function(e,n,r,i){function o(){return(o=t(a)(t(s).mark((function a(o,u,c){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"event"!==o){t.next=6;break}return t.next=4,rn(e,n,r,u,c);case 4:t.next=12;break;case 6:if("config"!==o){t.next=11;break}return t.next=9,en(e,n,r,i,u,c);case 9:t.next=12;break;case 11:e("set",u);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),Qe.error(t.t0);case 17:case"end":return t.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(t,e,n){return o.apply(this,arguments)}}(u,e,n,r),{gtagCore:u,wrappedGtag:window[o]}}function on(){var t=window.document.getElementsByTagName("script"),e=!0,n=!1,r=void 0;try{for(var i,a=Object.values(t)[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var s=i.value;if(s.src&&s.src.includes($e))return s}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return null}
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
var un=(Ye={},t(It)(Ye,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),t(It)(Ye,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),t(It)(Ye,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),t(It)(Ye,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),t(It)(Ye,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(It)(Ye,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(It)(Ye,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),t(It)(Ye,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),t(It)(Ye,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),t(It)(Ye,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Ye),cn=new(0,Ct.ErrorFactory)("analytics","Analytics",un),ln=function(){"use strict";function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t(nt)(this,e),this.throttleMetadata=n,this.intervalMillis=r}return t(rt)(e,[{key:"getThrottleMetadata",value:function(t){return this.throttleMetadata[t]}},{key:"setThrottleMetadata",value:function(t,e){this.throttleMetadata[t]=e}},{key:"deleteThrottleMetadata",value:function(t){delete this.throttleMetadata[t]}}]),e}(),hn=new ln;function fn(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}function pn(t){return dn.apply(this,arguments)}function dn(){return(dn=t(a)(t(s).mark((function e(n){var r,i,a,o,u,c,l,h;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:fn(a)},u=Je.replace("{app-id}",i),t.next=6,fetch(u,o);case 6:if(200===(c=t.sent).status||304===c.status){t.next=19;break}return l="",t.prev=9,t.next=12,c.json();case 12:h=t.sent,(null===(r=h.error)||void 0===r?void 0:r.message)&&(l=h.error.message),t.next=18;break;case 16:t.prev=16,t.t0=t.catch(9);case 18:throw cn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return t.abrupt("return",c.json());case 20:case"end":return t.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function gn(t){return vn.apply(this,arguments)}function vn(){return vn=t(a)(t(s).mark((function e(n){var r,i,o,u,c,l,h,f,p=arguments;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:hn,i=p.length>2?p[2]:void 0,o=n.options,u=o.appId,c=o.apiKey,l=o.measurementId,u){e.next=4;break}throw cn.create("no-app-id");case 4:if(c){e.next=8;break}if(!l){e.next=7;break}return e.abrupt("return",{measurementId:l,appId:u});case 7:throw cn.create("no-api-key");case 8:return h=r.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new wn,setTimeout(t(a)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.abort();case 1:case"end":return t.stop()}}),e)}))),void 0!==i?i:We),e.abrupt("return",yn({appId:u,apiKey:c,measurementId:l},h,f,r));case 12:case"end":return e.stop()}}),e)}))),vn.apply(this,arguments)}function yn(t,e,n){return mn.apply(this,arguments)}function mn(){return mn=t(a)(t(s).mark((function e(n,r,i){var a,o,u,c,l,h,f,p,d=arguments;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,u=d.length>3&&void 0!==d[3]?d[3]:hn,c=n.appId,l=n.measurementId,t.prev=2,t.next=5,bn(i,a);case 5:t.next=13;break;case 7:if(t.prev=7,t.t0=t.catch(2),!l){t.next=12;break}return Qe.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(t.t0.message,"]")),t.abrupt("return",{appId:c,measurementId:l});case 12:throw t.t0;case 13:return t.prev=13,t.next=16,pn(n);case 16:return h=t.sent,u.deleteThrottleMetadata(c),t.abrupt("return",h);case 21:if(t.prev=21,t.t1=t.catch(13),kn(t.t1)){t.next=31;break}if(u.deleteThrottleMetadata(c),!l){t.next=30;break}return Qe.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(t.t1.message,"]")),t.abrupt("return",{appId:c,measurementId:l});case 30:throw t.t1;case 31:return f=503===Number(t.t1.customData.httpStatus)?(0,Ct.calculateBackoffMillis)(o,u.intervalMillis,30):(0,Ct.calculateBackoffMillis)(o,u.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:o+1},u.setThrottleMetadata(c,p),Qe.debug("Calling attemptFetch again in ".concat(f," millis")),t.abrupt("return",yn(n,p,i,u));case 36:case"end":return t.stop()}}),e,null,[[2,7],[13,21]])}))),mn.apply(this,arguments)}function bn(t,e){return new Promise((function(n,r){var i=Math.max(e-Date.now(),0),a=setTimeout(n,i);t.addEventListener((function(){clearTimeout(a),r(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function kn(t){if(!(t instanceof Ct.FirebaseError&&t.customData))return!1;var e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}var wn=function(){"use strict";function e(){t(nt)(this,e),this.listeners=[]}return t(rt)(e,[{key:"addEventListener",value:function(t){this.listeners.push(t)}},{key:"abort",value:function(){this.listeners.forEach((function(t){return t()}))}}]),e}();function xn(){return Tn.apply(this,arguments)}function Tn(){return(Tn=
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
t(a)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,Ct.isIndexedDBAvailable)()){t.next=5;break}return Qe.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),t.abrupt("return",!1);case 5:return t.prev=5,t.next=8,(0,Ct.validateIndexedDBOpenable)();case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(5),Qe.warn(cn.create("indexeddb-unavailable",{errorInfo:t.t0}).message),t.abrupt("return",!1);case 14:return t.abrupt("return",!0);case 15:case"end":return t.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}function En(){return(En=t(a)(t(s).mark((function e(n,r,i,a,o,u,c){var l,h,f,p,d,g,v;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(h=gn(n)).then((function(t){i[t.measurementId]=t.appId,n.options.measurementId&&t.measurementId!==n.options.measurementId&&Qe.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(t.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(t){return Qe.error(t)})),r.push(h),f=xn().then((function(t){return t?a.getId():void 0})),e.t0=t(_t),e.next=8,Promise.all([h,f]);case 8:return e.t1=e.sent,p=(0,e.t0)(e.t1,2),d=p[0],g=p[1],on()||tn(u,d.measurementId),o("js",new Date),(v=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",v.update=!0,null!=g&&(v.firebase_id=g),o("config",d.measurementId,v),e.abrupt("return",d.measurementId);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var In,_n,Sn=function(){"use strict";function e(n){t(nt)(this,e),this.app=n}return t(rt)(e,[{key:"_delete",value:function(){return delete An[this.app.options.appId],Promise.resolve()}}]),e}(),An={},Cn=[],Ln={},Dn="dataLayer",Rn="gtag",Nn=!1;function On(t,e,n){!function(){var t=[];if((0,Ct.isBrowserExtension)()&&t.push("This is a browser extension environment."),(0,Ct.areCookiesEnabled)()||t.push("Cookies are not available."),t.length>0){var e=t.map((function(t,e){return"(".concat(e+1,") ").concat(t)})).join(" "),n=cn.create("invalid-analytics-context",{errorInfo:e});Qe.warn(n.message)}}();var r,i,a=t.options.appId;if(!a)throw cn.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw cn.create("no-api-key");Qe.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(t.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=An[a])throw cn.create("already-exists",{id:a});if(!Nn){r=Dn,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var s=sn(An,Cn,Ln,Dn,Rn),o=s.wrappedGtag,u=s.gtagCore;_n=o,In=u,Nn=!0}return An[a]=function(t,e,n,r,i,a,s){return En.apply(this,arguments)}(t,Cn,Ln,e,In,Dn,n),new Sn(t)}function Pn(){return(Pn=
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
t(a)(t(s).mark((function e(n,r,i,a,o){var u,c;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o||!o.global){t.next=5;break}return n("event",i,a),t.abrupt("return");case 5:return t.next=7,r;case 7:u=t.sent,c=Object.assign(Object.assign({},a),{send_to:u}),n("event",i,c);case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Mn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,St._getProvider)(t,Ge);if(n.isInitialized()){var r=n.getImmediate();if((0,Ct.deepEqual)(e,n.getOptions()))return r;throw cn.create("already-initialized")}var i=n.initialize({options:e});return i}function jn(t,e,n,r){t=(0,Ct.getModularInstance)(t),function(t,e,n,r,i){return Pn.apply(this,arguments)}(_n,An[t.app.options.appId],e,n,r).catch((function(t){return Qe.error(t)}))}var Fn="@firebase/analytics",Un="0.7.10";(0,St._registerComponent)(new(0,Lt.Component)(Ge,(function(t,e){var n=e.options;return On(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),(0,St._registerComponent)(new(0,Lt.Component)("analytics-internal",(function(t){try{var e=t.getProvider(Ge).getImmediate();return{logEvent:function(t,n,r){return jn(e,t,n,r)}}}catch(t){throw cn.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),(0,St.registerVersion)(Fn,Un),(0,St.registerVersion)(Fn,Un,"esm2017");var qn,Bn=i("3SEMc"),Hn=(a=i("bpxeT"),nt=i("8MBJY"),i("ge8co"),rt=i("a2hTj"),i("jh8P3")),Xn=i("fVNic"),Vn=i("eYQtU"),Kn=i("jmhxu"),zn=(_t=i("1t1Wn"),Dt=i("8nrFW"),R=i("l5bVx"),i("2MbLg")),Yn=(s=i("2TvXO"),St=i("MjY8E"),Lt=i("6ExWU"),At=i("kZfxc"),Ct=i("2xDiJ"),nt=i("8MBJY"),rt=i("a2hTj"),Hn=i("jh8P3"),Xn=i("fVNic"),Vn=i("eYQtU"),R=i("l5bVx"),zn=i("2MbLg"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}),Gn={},Wn=Wn||{},Jn=Yn||self;function $n(){}function Qn(e){var n=void 0===e?"undefined":t(R)(e);return"array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length}function Zn(e){var n=void 0===e?"undefined":t(R)(e);return"object"==n&&null!=e||"function"==n}var tr="closure_uid_"+(1e9*Math.random()>>>0),er=0;function nr(t,e,n){return t.call.apply(t.bind,arguments)}function rr(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ir(t,e,n){return(ir=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?nr:rr).apply(null,arguments)}function ar(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function sr(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return e.prototype[n].apply(t,i)}}function or(){this.s=this.s,this.o=this.o}var ur={};or.prototype.s=!1,or.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,tr)&&t[tr]||(t[tr]=++er)}(this);delete ur[t]}},or.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var cr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},lr=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,a=0;a<r;a++)a in i&&e.call(n,i[a],a,t)};function hr(t){return Array.prototype.concat.apply([],arguments)}function fr(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function pr(t){return/^[\s\xa0]*$/.test(t)}var dr,gr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function vr(t,e){return-1!=t.indexOf(e)}function yr(t,e){return t<e?-1:t>e?1:0}t:{var mr=Jn.navigator;if(mr){var br=mr.userAgent;if(br){dr=br;break t}}dr=""}function kr(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function wr(t){var e={};for(var n in t)e[n]=t[n];return e}var xr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tr(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var a=0;a<xr.length;a++)n=xr[a],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Er(t){return Er[" "](t),t}Er[" "]=$n;var Ir,_r,Sr=vr(dr,"Opera"),Ar=vr(dr,"Trident")||vr(dr,"MSIE"),Cr=vr(dr,"Edge"),Lr=Cr||Ar,Dr=vr(dr,"Gecko")&&!(vr(dr.toLowerCase(),"webkit")&&!vr(dr,"Edge"))&&!(vr(dr,"Trident")||vr(dr,"MSIE"))&&!vr(dr,"Edge"),Rr=vr(dr.toLowerCase(),"webkit")&&!vr(dr,"Edge");function Nr(){var t=Jn.document;return t?t.documentMode:void 0}t:{var Or="",Pr=(_r=dr,Dr?/rv:([^\);]+)(\)|;)/.exec(_r):Cr?/Edge\/([\d\.]+)/.exec(_r):Ar?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(_r):Rr?/WebKit\/(\S+)/.exec(_r):Sr?/(?:Version)[ \/]?(\S+)/.exec(_r):void 0);if(Pr&&(Or=Pr?Pr[1]:""),Ar){var Mr=Nr();if(null!=Mr&&Mr>parseFloat(Or)){Ir=String(Mr);break t}}Ir=Or}var jr,Fr={};function Ur(){return function(t){var e=Fr;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=gr(String(Ir)).split("."),n=gr("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var a=e[i]||"",s=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break;t=yr(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||yr(0==a[2].length,0==s[2].length)||yr(a[2],s[2]),a=a[3],s=s[3]}while(0==t)}return 0<=t}))}if(Jn.document&&Ar){var qr=Nr();jr=qr||(parseInt(Ir,10)||void 0)}else jr=void 0;var Br=jr,Hr=function(){if(!Jn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Jn.addEventListener("test",$n,e),Jn.removeEventListener("test",$n,e)}catch(t){}return t}();function Xr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Vr(t,e){if(Xr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Dr){t:{try{Er(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Kr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vr.Z.h.call(this)}}Xr.prototype.h=function(){this.defaultPrevented=!0},sr(Vr,Xr);var Kr={2:"touch",3:"pen",4:"mouse"};Vr.prototype.h=function(){Vr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),Yr=0;function Gr(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Yr,this.ca=this.fa=!1}function Wr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Jr(t){this.src=t,this.g={},this.h=0}function $r(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],a=cr(i,e);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(Wr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Qr(t,e,n,r){for(var i=0;i<t.length;++i){var a=t[i];if(!a.ca&&a.listener==e&&a.capture==!!n&&a.ia==r)return i}return-1}Jr.prototype.add=function(t,e,n,r,i){var a=t.toString();(t=this.g[a])||(t=this.g[a]=[],this.h++);var s=Qr(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):((e=new Gr(e,this.src,a,!!r,i)).fa=n,t.push(e)),e};var Zr="closure_lm_"+(1e6*Math.random()|0),ti={};function ei(t,e,n,r,i){if(r&&r.once)return ri(t,e,n,r,i);if(Array.isArray(e)){for(var a=0;a<e.length;a++)ei(t,e[a],n,r,i);return null}return n=li(n),t&&t[zr]?t.N(e,n,Zn(r)?!!r.capture:!!r,i):ni(t,e,n,!1,r,i)}function ni(t,e,n,r,i,a){if(!e)throw Error("Invalid event type");var s=Zn(i)?!!i.capture:!!i,o=ui(t);if(o||(t[Zr]=o=new Jr(t)),(n=o.add(e,n,r,s,a)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=oi;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Hr||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(si(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ri(t,e,n,r,i){if(Array.isArray(e)){for(var a=0;a<e.length;a++)ri(t,e[a],n,r,i);return null}return n=li(n),t&&t[zr]?t.O(e,n,Zn(r)?!!r.capture:!!r,i):ni(t,e,n,!0,r,i)}function ii(t,e,n,r,i){if(Array.isArray(e))for(var a=0;a<e.length;a++)ii(t,e[a],n,r,i);else r=Zn(r)?!!r.capture:!!r,n=li(n),t&&t[zr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Qr(a=t.g[e],n,r,i))&&(Wr(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[e],t.h--)))):t&&(t=ui(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qr(e,n,r,i)),(n=-1<t?e[t]:null)&&ai(n))}function ai(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[zr])$r(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(si(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ui(e))?($r(n,t),0==n.h&&(n.src=null,e[Zr]=null)):Wr(t)}}}function si(t){return t in ti?ti[t]:ti[t]="on"+t}function oi(t,e){if(t.ca)t=!0;else{e=new Vr(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ai(t),t=n.call(r,e)}return t}function ui(t){return(t=t[Zr])instanceof Jr?t:null}var ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function li(t){return"function"==typeof t?t:(t[ci]||(t[ci]=function(e){return t.handleEvent(e)}),t[ci])}function hi(){or.call(this),this.i=new Jr(this),this.P=this,this.I=null}function fi(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new Xr(e,t);else if(e instanceof Xr)e.target=e.target||t;else{var i=e;Tr(e=new Xr(r,t),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var s=e.g=n[a];i=pi(s,r,!0,e)&&i}if(i=pi(s=e.g=t,r,!0,e)&&i,i=pi(s,r,!1,e)&&i,n)for(a=0;a<n.length;a++)i=pi(s=e.g=n[a],r,!1,e)&&i}function pi(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,a=0;a<e.length;++a){var s=e[a];if(s&&!s.ca&&s.capture==n){var o=s.listener,u=s.ia||s.src;s.fa&&$r(t.i,s),i=!1!==o.call(u,r)&&i}}return i&&!r.defaultPrevented}sr(hi,or),hi.prototype[zr]=!0,hi.prototype.removeEventListener=function(t,e,n,r){ii(this,t,e,n,r)},hi.prototype.M=function(){if(hi.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Wr(n[r]);delete e.g[t],e.h--}}this.I=null},hi.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},hi.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var di=Jn.JSON.stringify;function gi(){var t=Ti,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var vi,yi=function(){"use strict";function e(){t(nt)(this,e),this.h=this.g=null}return t(rt)(e,[{key:"add",value:function(t,e){var n=mi.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}]),e}(),mi=new(function(){"use strict";function e(n,r){t(nt)(this,e),this.i=n,this.j=r,this.h=0,this.g=null}return t(rt)(e,[{key:"get",value:function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}]),e}())((function(){return new bi}),(function(t){return t.reset()})),bi=function(){"use strict";function e(){t(nt)(this,e),this.next=this.g=this.h=null}return t(rt)(e,[{key:"set",value:function(t,e){this.h=t,this.g=e,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),e}();function ki(t){Jn.setTimeout((function(){throw t}),0)}function wi(t,e){vi||function(){var t=Jn.Promise.resolve(void 0);vi=function(){t.then(Ei)}}(),xi||(vi(),xi=!0),Ti.add(t,e)}var xi=!1,Ti=new yi;function Ei(){for(var t;t=gi();){try{t.h.call(t.g)}catch(t){ki(t)}var e=mi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xi=!1}function Ii(t,e){hi.call(this),this.h=t||1,this.g=e||Jn,this.j=ir(this.kb,this),this.l=Date.now()}function _i(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Si(t,e,n){if("function"==typeof t)n&&(t=ir(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ir(t.handleEvent,t)}return 2147483647<Number(e)?-1:Jn.setTimeout(t,e||0)}function Ai(t){t.g=Si((function(){t.g=null,t.i&&(t.i=!1,Ai(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}sr(Ii,hi),(qn=Ii.prototype).da=!1,qn.S=null,qn.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),fi(this,"tick"),this.da&&(_i(this),this.start()))}},qn.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},qn.M=function(){Ii.Z.M.call(this),_i(this),delete this.g};var Ci=function(e){"use strict";t(Vn)(r,e);var n=t(zn)(r);function r(e,i){var a;return t(nt)(this,r),(a=n.call(this)).m=e,a.j=i,a.h=null,a.i=!1,a.g=null,a}return t(rt)(r,[{key:"l",value:function(t){this.h=arguments,this.g?this.i=!0:Ai(this)}},{key:"M",value:function(){t(Hn)(t(Xn)(r.prototype),"M",this).call(this),this.g&&(Jn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(or);function Li(t){or.call(this),this.h=t,this.g={}}sr(Li,or);var Di=[];function Ri(t,e,n,r){Array.isArray(n)||(n&&(Di[0]=n.toString()),n=Di);for(var i=0;i<n.length;i++){var a=ei(e,n[i],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}}function Ni(t){kr(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ai(t)}),t),t.g={}}function Oi(){this.g=!0}function Pi(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var s=1;s<i.length;s++)i[s]=""}}}return di(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Li.prototype.M=function(){Li.Z.M.call(this),Ni(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Oi.prototype.Aa=function(){this.g=!1},Oi.prototype.info=function(){};var Mi={},ji=null;function Fi(){return ji=ji||new hi}function Ui(t){Xr.call(this,Mi.Ma,t)}function qi(t){var e=Fi();fi(e,new Ui(e,t))}function Bi(t,e){Xr.call(this,Mi.STAT_EVENT,t),this.stat=e}function Hi(t){var e=Fi();fi(e,new Bi(e,t))}function Xi(t,e){Xr.call(this,Mi.Na,t),this.size=e}function Vi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Jn.setTimeout((function(){t()}),e)}Mi.Ma="serverreachability",sr(Ui,Xr),Mi.STAT_EVENT="statevent",sr(Bi,Xr),Mi.Na="timingevent",sr(Xi,Xr);var Ki={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},zi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yi(){}function Gi(t){return t.h||(t.h=t.i())}function Wi(){}Yi.prototype.h=null;var Ji,$i={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Qi(){Xr.call(this,"d")}function Zi(){Xr.call(this,"c")}function ta(){}function ea(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Li(this),this.P=ra,t=Lr?125:void 0,this.W=new Ii(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new na}function na(){this.i=null,this.g="",this.h=!1}sr(Qi,Xr),sr(Zi,Xr),sr(ta,Yi),ta.prototype.g=function(){return new XMLHttpRequest},ta.prototype.i=function(){return{}},Ji=new ta;var ra=45e3,ia={},aa={};function sa(t,e,n){t.K=1,t.v=Ca(Ta(e)),t.s=n,t.U=!0,oa(t,null)}function oa(t,e){t.F=Date.now(),ha(t),t.A=Ta(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ha(n.h,"t",r),t.C=0,n=t.l.H,t.h=new na,t.g=Xs(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ci(ir(t.Ia,t,t.g),t.O)),Ri(t.V,t.g,"readystatechange",t.gb),e=t.H?wr(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),qi(1),function(t,e,n,r,i,a){t.info((function(){if(t.g)if(a)for(var s="",o=a.split("&"),u=0;u<o.length;u++){var c=o[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+c+"&":s+(l+"=redacted&")}}else s=null;else s=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ua(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ca(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=la(t,n))==aa){4==e&&(t.o=4,Hi(14),i=!1),Pi(t.j,t.m,null,"[Incomplete Response]");break}if(r==ia){t.o=4,Hi(15),Pi(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Pi(t.j,t.m,r,null),va(t,r)}ua(t)&&r!=aa&&r!=ia&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Hi(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ps(e),e.L=!0,Hi(11))):(Pi(t.j,t.m,n,"[Invalid Chunked Response]"),ga(t),da(t))}function la(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?aa:(n=Number(e.substring(n,r)),isNaN(n)?ia:(r+=1)+n>e.length?aa:(e=e.substr(r,n),t.C=r+n,e))}function ha(t){t.Y=Date.now()+t.P,fa(t,t.P)}function fa(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Vi(ir(t.eb,t),e)}function pa(t){t.B&&(Jn.clearTimeout(t.B),t.B=null)}function da(t){0==t.l.G||t.I||Fs(t.l,t)}function ga(t){pa(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,_i(t.W),Ni(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function va(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Wa(n.i,t)))if(n.I=t.N,!t.J&&Wa(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;js(n),_s(n)}Os(n),Hi(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Vi(ir(n.ab,n),6e3));if(1>=Ga(n.i)&&n.ka){try{n.ka()}catch(a){}n.ka=void 0}}else qs(n,11)}else if((t.J||n.g==t)&&js(n),!pr(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var a=i[e];if(n.U=a[0],a=a[1],2==n.G)if("c"==a[0]){n.J=a[1],n.la=a[2];var s=a[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var o=a[4];null!=o&&(n.za=o,n.h.info("SVER="+n.za));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=t.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(vr(l,"spdy")||vr(l,"quic")||vr(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Ja(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,Aa(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var p=t;if((r=n).oa=Hs(r,r.H?r.la:null,r.W),p.J){$a(r.i,p);var d=p,g=r.K;g&&d.setTimeout(g),d.B&&(pa(d),ha(d)),r.g=p}else Ns(r);0<n.l.length&&Cs(n)}else"stop"!=a[0]&&"close"!=a[0]||qs(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?qs(n,7):Is(n):"noop"!=a[0]&&n.j&&n.j.wa(a),n.A=0)}qi(4)}catch(a){}}function ya(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Qn(t)||"string"==typeof t)lr(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Qn(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Qn(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length;for(var a=0;a<i;a++)e.call(void 0,r[a],n&&n[a],t)}}function ma(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ma)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function ba(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ka(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)ka(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function ka(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(qn=ea.prototype).setTimeout=function(t){this.P=t},qn.gb=function(t){t=t.target;var e=this.L;e&&3==ks(t)?e.l():this.Ia(t)},qn.Ia=function(t){try{if(t==this.g)t:{var e=ks(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||Lr||this.g&&(this.h.h||this.g.ga()||ws(this.g)))){this.I||4!=e||7==n||qi(8==n||0>=r?3:2),pa(this);var i=this.g.ba();this.N=i;e:if(ua(this)){var a=ws(this.g);t="";var s=a.length,o=4==ks(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ga(this),da(this);var u="";break e}this.h.i=new Jn.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(a[n],{stream:o&&n==s-1});a.splice(0,s),this.h.g+=t,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,a,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+a+" "+s}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pr(c)){var h=c;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,Hi(12),ga(this),da(this);break t}Pi(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,va(this,i)}this.U?(ca(this,e,u),Lr&&this.i&&3==e&&(Ri(this.V,this.W,"tick",this.fb),this.W.start())):(Pi(this.j,this.m,u,null),va(this,u)),4==e&&ga(this),this.i&&!this.I&&(4==e?Fs(this.l,this):(this.i=!1,ha(this)))}else 400==i&&0<u.indexOf("Unknown SID")?(this.o=3,Hi(12)):(this.o=0,Hi(13)),ga(this),da(this)}}}catch(e){}},qn.fb=function(){if(this.g){var t=ks(this.g),e=this.g.ga();this.C<e.length&&(pa(this),ca(this,t,e),this.i&&4!=t&&ha(this))}},qn.cancel=function(){this.I=!0,ga(this)},qn.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(qi(3),Hi(17)),ga(this),this.o=2,da(this)):fa(this,this.Y-t)},(qn=ma.prototype).R=function(){ba(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},qn.T=function(){return ba(this),this.g.concat()},qn.get=function(t,e){return ka(this.h,t)?this.h[t]:e},qn.set=function(t,e){ka(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},qn.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],a=this.get(i);t.call(e,a,i,this)}};var wa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function xa(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof xa){this.g=void 0!==e?e:t.g,Ea(this,t.j),this.s=t.s,Ia(this,t.i),_a(this,t.m),this.l=t.l,e=t.h;var n=new Fa;n.i=e.i,e.g&&(n.g=new ma(e.g),n.h=e.h),Sa(this,n),this.o=t.o}else t&&(n=String(t).match(wa))?(this.g=!!e,Ea(this,n[1]||"",!0),this.s=La(n[2]||""),Ia(this,n[3]||"",!0),_a(this,n[4]),this.l=La(n[5]||"",!0),Sa(this,n[6]||"",!0),this.o=La(n[7]||"")):(this.g=!!e,this.h=new Fa(null,this.g))}function Ta(t){return new xa(t)}function Ea(t,e,n){t.j=n?La(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ia(t,e,n){t.i=n?La(e,!0):e}function _a(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sa(t,e,n){e instanceof Fa?(t.h=e,function(t,e){e&&!t.j&&(Ua(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(qa(this,e),Ha(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Da(e,Ma)),t.h=new Fa(e,t.g))}function Aa(t,e,n){t.h.set(e,n)}function Ca(t){return Aa(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function La(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Da(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ra),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ra(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}xa.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Da(e,Na,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Da(e,Na,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Da(n,"/"==n.charAt(0)?Pa:Oa,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Da(n,ja)),t.join("")};var Na=/[#\/\?@]/g,Oa=/[#\?:]/g,Pa=/[#\?]/g,Ma=/[#\?@]/g,ja=/#/g;function Fa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ua(t){t.g||(t.g=new ma,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var a=t[n].substring(0,r);i=t[n].substring(r+1)}else a=t[n];e(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function qa(t,e){Ua(t),e=Xa(t,e),ka(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,ka((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ba(t)))}function Ba(t,e){return Ua(t),e=Xa(t,e),ka(t.g.h,e)}function Ha(t,e,n){qa(t,e),0<n.length&&(t.i=null,t.g.set(Xa(t,e),fr(n)),t.h+=n.length)}function Xa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(qn=Fa.prototype).add=function(t,e){Ua(this),this.i=null,t=Xa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},qn.forEach=function(t,e){Ua(this),this.g.forEach((function(n,r){lr(n,(function(n){t.call(e,n,r,this)}),this)}),this)},qn.T=function(){Ua(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],a=0;a<i.length;a++)n.push(e[r]);return n},qn.R=function(t){Ua(this);var e=[];if("string"==typeof t)Ba(this,t)&&(e=hr(e,this.g.get(Xa(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=hr(e,t[n])}return e},qn.set=function(t,e){return Ua(this),this.i=null,Ba(this,t=Xa(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},qn.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},qn.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var a=0;a<r.length;a++){var s=i;""!==r[a]&&(s+="="+encodeURIComponent(String(r[a]))),t.push(s)}}return this.i=t.join("&")};var Va=function e(n,r){"use strict";t(nt)(this,e),this.h=n,this.g=r};function Ka(t){this.l=t||za,Jn.PerformanceNavigationTiming?t=0<(t=Jn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Jn.g&&Jn.g.Ea&&Jn.g.Ea()&&Jn.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var za=10;function Ya(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ga(t){return t.h?1:t.g?t.g.size:0}function Wa(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ja(t,e){t.g?t.g.add(e):t.h=e}function $a(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Qa(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var e=t.i,n=!0,r=!1,i=void 0;try{for(var a,s=t.g.values()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;e=e.concat(o.D)}}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return e}return fr(t.i)}function Za(){}function ts(){this.g=new Za}function es(t,e,n){var r=n||"";try{ya(t,(function(t,n){var i=t;Zn(t)&&(i=di(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function ns(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function rs(t){this.l=t.$b||null,this.j=t.ib||!1}function is(t,e){hi.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=as,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ka.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var t=!0,e=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.cancel()}}catch(t){e=!0,n=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}this.g.clear()}},Za.prototype.stringify=function(t){return Jn.JSON.stringify(t,void 0)},Za.prototype.parse=function(t){return Jn.JSON.parse(t,void 0)},sr(rs,Yi),rs.prototype.g=function(){return new is(this.l,this.j)},rs.prototype.i=function(t){return function(){return t}}({}),sr(is,hi);var as=0;function ss(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function os(t){t.readyState=4,t.l=null,t.j=null,t.A=null,us(t)}function us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(qn=is.prototype).open=function(t,e){if(this.readyState!=as)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,us(this)},qn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Jn).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},qn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,os(this)),this.readyState=as},qn.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Jn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ss(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},qn.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?os(this):us(this),3==this.readyState&&ss(this)}},qn.Ua=function(t){this.g&&(this.response=this.responseText=t,os(this))},qn.Ta=function(t){this.g&&(this.response=t,os(this))},qn.ha=function(){this.g&&os(this)},qn.setRequestHeader=function(t,e){this.v.append(t,e)},qn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},qn.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(is.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var cs=Jn.JSON.parse;function ls(t){hi.call(this),this.headers=new ma,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hs,this.K=this.L=!1}sr(ls,hi);var hs="",fs=/^https?$/i,ps=["POST","PUT"];function ds(t){return"content-type"==t.toLowerCase()}function gs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vs(t),ms(t)}function vs(t){t.D||(t.D=!0,fi(t,"complete"),fi(t,"error"))}function ys(t){if(t.h&&void 0!==Wn&&(!t.C[1]||4!=ks(t)||2!=t.ba()))if(t.v&&4==ks(t))Si(t.Fa,0,t);else if(fi(t,"readystatechange"),4==ks(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var a=String(t.H).match(wa)[1]||null;if(!a&&Jn.self&&Jn.self.location){var s=Jn.self.location.protocol;a=s.substr(0,s.length-1)}i=!fs.test(a?a.toLowerCase():"")}e=i}if(e)fi(t,"complete"),fi(t,"success");else{t.m=6;try{var o=2<ks(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",vs(t)}}finally{ms(t)}}}function ms(t,e){if(t.g){bs(t);var n=t.g,r=t.C[0]?$n:null;t.g=null,t.C=null,e||fi(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function bs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Jn.clearTimeout(t.A),t.A=null)}function ks(t){return t.g?t.g.readyState:0}function ws(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function xs(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return kr(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Aa(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Es(t){this.za=0,this.l=[],this.h=new Oi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ts("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ts("baseRetryDelayMs",5e3,t),this.$a=Ts("retryDelaySeedMs",1e4,t),this.Ya=Ts("forwardChannelMaxRetries",2,t),this.ra=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ka(t&&t.concurrentRequestLimit),this.Ca=new ts,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Is(t){if(Ss(t),3==t.G){var e=t.V++,n=Ta(t.F);Aa(n,"SID",t.J),Aa(n,"RID",e),Aa(n,"TYPE","terminate"),Ds(t,n),(e=new ea(t,t.h,e,void 0)).K=2,e.v=Ca(Ta(n)),n=!1,Jn.navigator&&Jn.navigator.sendBeacon&&(n=Jn.navigator.sendBeacon(e.v.toString(),"")),!n&&Jn.Image&&((new Image).src=e.v,n=!0),n||(e.g=Xs(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ha(e)}Bs(t)}function _s(t){t.g&&(Ps(t),t.g.cancel(),t.g=null)}function Ss(t){_s(t),t.u&&(Jn.clearTimeout(t.u),t.u=null),js(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Jn.clearTimeout(t.m),t.m=null)}function As(t,e){t.l.push(new Va(t.Za++,e)),3==t.G&&Cs(t)}function Cs(t){Ya(t.i)||t.m||(t.m=!0,wi(t.Ha,t),t.C=0)}function Ls(t,e){var n;n=e?e.m:t.V++;var r=Ta(t.F);Aa(r,"SID",t.J),Aa(r,"RID",n),Aa(r,"AID",t.U),Ds(t,r),t.o&&t.s&&xs(r,t.o,t.s),n=new ea(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Rs(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ja(t.i,n),sa(n,r,e)}function Ds(t,e){t.j&&ya({},(function(t,n){Aa(e,n,t)}))}function Rs(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ir(t.j.Oa,t.j,t):null;t:for(var i=t.l,a=-1;;){var s=["count="+n];-1==a?0<n?(a=i[0].h,s.push("ofs="+a)):a=0:s.push("ofs="+a);for(var o=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),o=!1;else try{es(l,s,"req"+c+"_")}catch(t){r&&r(l)}}if(o){r=s.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function Ns(t){t.g||t.u||(t.Y=1,wi(t.Ga,t),t.A=0)}function Os(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Vi(ir(t.Ga,t),Us(t,t.A)),t.A++,!0)}function Ps(t){null!=t.B&&(Jn.clearTimeout(t.B),t.B=null)}function Ms(t){t.g=new ea(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ta(t.oa);Aa(e,"RID","rpc"),Aa(e,"SID",t.J),Aa(e,"CI",t.N?"0":"1"),Aa(e,"AID",t.U),Ds(t,e),Aa(e,"TYPE","xmlhttp"),t.o&&t.s&&xs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ca(Ta(e)),n.s=null,n.U=!0,oa(n,t)}function js(t){null!=t.v&&(Jn.clearTimeout(t.v),t.v=null)}function Fs(t,e){var n=null;if(t.g==e){js(t),Ps(t),t.g=null;var r=2}else{if(!Wa(t.i,e))return;n=e.D,$a(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;fi(r=Fi(),new Xi(r,n,e,i)),Cs(t)}else Ns(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Ga(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Vi(ir(t.Ha,t,e),Us(t,t.C)),t.C++,0)))}(t,e)||2==r&&Os(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:qs(t,5);break;case 4:qs(t,10);break;case 3:qs(t,6);break;default:qs(t,2)}}function Us(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function qs(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=ir(t.jb,t);n||(n=new xa("//www.google.com/images/cleardot.gif"),Jn.location&&"http"==Jn.location.protocol||Ea(n,"https"),Ca(n)),function(t,e){var n=new Oi;if(Jn.Image){var r=new Image;r.onload=ar(ns,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ar(ns,n,r,"TestLoadImage: error",!1,e),r.onabort=ar(ns,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ar(ns,n,r,"TestLoadImage: timeout",!1,e),Jn.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Hi(2);t.G=0,t.j&&t.j.va(e),Bs(t),Ss(t)}function Bs(t){t.G=0,t.I=-1,t.j&&(0==Qa(t.i).length&&0==t.l.length||(t.i.i.length=0,fr(t.l),t.l.length=0),t.j.ua())}function Hs(t,e,n){var r=function(t){return t instanceof xa?Ta(t):new xa(t,void 0)}(n);if(""!=r.i)e&&Ia(r,e+"."+r.i),_a(r,r.m);else{var i=Jn.location;r=function(t,e,n,r){var i=new xa(null,void 0);return t&&Ea(i,t),e&&Ia(i,e),n&&_a(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&kr(t.aa,(function(t,e){Aa(r,e,t)})),e=t.D,n=t.sa,e&&n&&Aa(r,e,n),Aa(r,"VER",t.ma),Ds(t,r),r}function Xs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new ls(new rs({ib:!0})):new ls(t.qa)).L=t.H,e}function Vs(){}function Ks(){if(Ar&&!(10<=Number(Br)))throw Error("Environmental error: no available transport.")}function zs(t,e){hi.call(this),this.g=new Es(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pr(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ws(this)}function Ys(t){Qi.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Gs(){Zi.call(this),this.status=1}function Ws(t){this.g=t}(qn=ls.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ji.g(),this.C=this.u?Gi(this.u):Gi(Ji),this.g.onreadystatechange=ir(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void gs(this,t)}t=n||"";var i=new ma(this.headers);r&&ya(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=ds,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Jn.FormData&&t instanceof Jn.FormData,!(0<=cr(ps,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bs(this),0<this.B&&((this.K=function(t){return Ar&&Ur()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ir(this.pa,this)):this.A=Si(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){gs(this,t)}},qn.pa=function(){void 0!==Wn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fi(this,"timeout"),this.abort(8))},qn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,fi(this,"complete"),fi(this,"abort"),ms(this))},qn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ms(this,!0)),ls.Z.M.call(this)},qn.Fa=function(){this.s||(this.F||this.v||this.l?ys(this):this.cb())},qn.cb=function(){ys(this)},qn.ba=function(){try{return 2<ks(this)?this.g.status:-1}catch(t){return-1}},qn.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},qn.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),cs(e)}},qn.Da=function(){return this.m},qn.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(qn=Es.prototype).ma=8,qn.G=1,qn.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},qn.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new ea(this,this.h,t,void 0),n=this.s;if(this.P&&(n?Tr(n=wr(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var a=this.l[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=Rs(this,e,r),Aa(i=Ta(this.F),"RID",t),Aa(i,"CVER",22),this.D&&Aa(i,"X-HTTP-Session-Id",this.D),Ds(this,i),this.o&&n&&xs(i,this.o,n),Ja(this.i,e),this.Ra&&Aa(i,"TYPE","init"),this.ja?(Aa(i,"$req",r),Aa(i,"SID","null"),e.$=!0,sa(e,i,null)):sa(e,i,r),this.G=2}}else 3==this.G&&(t?Ls(this,t):0==this.l.length||Ya(this.i)||Ls(this))},qn.Ga=function(){if(this.u=null,Ms(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Vi(ir(this.bb,this),t)}},qn.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Hi(10),_s(this),Ms(this))},qn.ab=function(){null!=this.v&&(this.v=null,_s(this),Os(this),Hi(19))},qn.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Hi(2)):(this.h.info("Failed to ping google.com"),Hi(1))},(qn=Vs.prototype).xa=function(){},qn.wa=function(){},qn.va=function(){},qn.ua=function(){},qn.Oa=function(){},Ks.prototype.g=function(t,e){return new zs(t,e)},sr(zs,hi),zs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),wi(ir(t.hb,t,e))),Hi(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Hs(t,null,t.W),Cs(t)},zs.prototype.close=function(){Is(this.g)},zs.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,As(this.g,e)}else this.v?((e={}).__data__=di(t),As(this.g,e)):As(this.g,t)},zs.prototype.M=function(){this.g.j=null,delete this.j,Is(this.g),delete this.g,zs.Z.M.call(this)},sr(Ys,Qi),sr(Gs,Zi),sr(Ws,Vs),Ws.prototype.xa=function(){fi(this.g,"a")},Ws.prototype.wa=function(t){fi(this.g,new Ys(t))},Ws.prototype.va=function(t){fi(this.g,new Gs(t))},Ws.prototype.ua=function(){fi(this.g,"b")},Ks.prototype.createWebChannel=Ks.prototype.g,zs.prototype.send=zs.prototype.u,zs.prototype.open=zs.prototype.m,zs.prototype.close=zs.prototype.close,Ki.NO_ERROR=0,Ki.TIMEOUT=8,Ki.HTTP_ERROR=6,zi.COMPLETE="complete",Wi.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",hi.prototype.listen=hi.prototype.N,ls.prototype.listenOnce=ls.prototype.O,ls.prototype.getLastError=ls.prototype.La,ls.prototype.getLastErrorCode=ls.prototype.Da,ls.prototype.getStatus=ls.prototype.ba,ls.prototype.getResponseJson=ls.prototype.Qa,ls.prototype.getResponseText=ls.prototype.ga,ls.prototype.send=ls.prototype.ea;Gn.createWebChannelTransport=function(){return new Ks},Gn.getStatEventTarget=function(){return Fi()},Gn.ErrorCode=Ki,Gn.EventType=zi,Gn.Event=Mi,Gn.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Gn.FetchXmlHttpFactory=rs,Gn.WebChannel=Wi,Gn.XhrIo=ls,i("6qd2L");var Js="@firebase/firestore",$s=function(){"use strict";function e(n){t(nt)(this,e),this.uid=n}return t(rt)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(t){return t.uid===this.uid}}]),e}();$s.UNAUTHENTICATED=new $s(null),$s.GOOGLE_CREDENTIALS=new $s("google-credentials-uid"),$s.FIRST_PARTY=new $s("first-party-uid"),$s.MOCK_USER=new $s("mock-user");
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
var Qs="9.8.3",Zs=new(0,At.Logger)("@firebase/firestore");
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
 */function to(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Zs.logLevel<=At.LogLevel.DEBUG){var a,s=r.map(no);(a=Zs).debug.apply(a,["Firestore (".concat(Qs,"): ").concat(e)].concat(t(Dt)(s)))}}function eo(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Zs.logLevel<=At.LogLevel.ERROR){var a,s=r.map(no);(a=Zs).error.apply(a,["Firestore (".concat(Qs,"): ").concat(e)].concat(t(Dt)(s)))}}function no(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function ro(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",e="FIRESTORE (".concat(Qs,") INTERNAL ASSERTION FAILED: ")+t;throw eo(e),new Error(e)}function io(t,e){t||ro()}
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
var ao={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},so=function(e){"use strict";t(Vn)(r,e);var n=t(zn)(r);function r(e,i){var a;return t(nt)(this,r),(a=n.call(this,e,i)).code=e,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},t(Kn)(a)}return r}(Ct.FirebaseError),oo=function e(){"use strict";var n=this;t(nt)(this,e),this.promise=new Promise((function(t,e){n.resolve=t,n.reject=e}))},uo=function e(n,r){"use strict";t(nt)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},co=function(){"use strict";function e(){t(nt)(this,e)}return t(rt)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(t,e){t.enqueueRetryable((function(){return e($s.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),lo=function(){"use strict";function e(n){t(nt)(this,e),this.t=n,this.currentUser=$s.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return t(rt)(e,[{key:"start",value:function(e,n){var r=this,i=this.i,o=function(t){return r.i!==i?(i=r.i,n(t)):Promise.resolve()},u=new oo;this.o=function(){var t=r;r.i++,r.currentUser=r.u(),u.resolve(),u=new oo,e.enqueueRetryable((function(){return o(t.currentUser)}))};var c=function(){var n=u,i=r;e.enqueueRetryable(t(a)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.promise;case 2:return t.next=4,o(i.currentUser);case 4:case"end":return t.stop()}}),e)}))))},l=function(t){to("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=t,r.auth.addAuthTokenListener(r.o),c()};this.t.onInit((function(t){return l(t)})),setTimeout((function(){if(!r.auth){var t=r.t.getImmediate({optional:!0});t?l(t):(to("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new oo)}}),0),c()}},{key:"getToken",value:function(){var t=this,e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return t.i!==e?(to("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),t.getToken()):n?(io("string"==typeof n.accessToken),new uo(n.accessToken,t.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var t=this.auth&&this.auth.getUid();return io(null===t||"string"==typeof t),new $s(t)}}]),e}(),ho=function e(n,r,i){"use strict";t(nt)(this,e),this.type="FirstParty",this.user=$s.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",r);var a=n.auth.getAuthHeaderValueForFirstParty([]);a&&this.headers.set("Authorization",a),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)},fo=function(){"use strict";function e(n,r,i){t(nt)(this,e),this.h=n,this.l=r,this.m=i}return t(rt)(e,[{key:"getToken",value:function(){return Promise.resolve(new ho(this.h,this.l,this.m))}},{key:"start",value:function(t,e){t.enqueueRetryable((function(){return e($s.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),po=function e(n){"use strict";t(nt)(this,e),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},go=function(){"use strict";function e(n){t(nt)(this,e),this.g=n,this.forceRefresh=!1,this.appCheck=null,this.p=null}return t(rt)(e,[{key:"start",value:function(t,e){var n=this;this.o=function(r){t.enqueueRetryable((function(){return function(t){null!=t.error&&to("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(t.error.message));var r=t.token!==n.p;return n.p=t.token,to("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?e(t.token):Promise.resolve()}(r)}))};var r=function(t){to("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=t,n.appCheck.addTokenListener(n.o)};this.g.onInit((function(t){return r(t)})),setTimeout((function(){if(!n.appCheck){var t=n.g.getImmediate({optional:!0});t?r(t):to("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var t=this,e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((function(e){return e?(io("string"==typeof e.token),t.p=e.token,new po(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),e}();
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
function vo(t){var e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(var r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var yo=function(){"use strict";function e(){t(nt)(this,e)}return t(rt)(e,null,[{key:"I",value:function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";n.length<20;)for(var r=vo(40),i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length));return n}}]),e}();function mo(t,e){return t<e?-1:t>e?1:0}
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
var bo=function(){"use strict";function e(n,r,i){t(nt)(this,e),void 0===r?r=0:r>n.length&&ro(),void 0===i?i=n.length-r:i>n.length-r&&ro(),this.segments=n,this.offset=r,this.len=i}return t(rt)(e,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(t){return 0===e.comparator(this,t)}},{key:"child",value:function(t){var n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((function(t){n.push(t)})):n.push(t),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(t){return this.segments[this.offset+t]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(t){if(t.length<this.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}},{key:"isImmediateParentOf",value:function(t){if(this.length+1!==t.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}},{key:"forEach",value:function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),a=e.get(r);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}]),e}(),ko=function(e){"use strict";t(Vn)(r,e);var n=t(zn)(r);function r(){return t(nt)(this,r),n.apply(this,arguments)}return t(rt)(r,[{key:"construct",value:function(t,e,n){return new r(t,e,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var a=[],s=!0,o=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new so(ao.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,t(Dt)(f.split("/").filter((function(t){return t.length>0}))))}}catch(t){o=!0,u=t}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(bo),wo=function(){"use strict";function e(n){t(nt)(this,e),this.path=n}return t(rt)(e,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(t){return null!==t&&0===ko.comparator(this.path,t.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(t){return new e(ko.fromString(t))}},{key:"fromName",value:function(t){return new e(ko.fromString(t).popFirst(5))}},{key:"empty",value:function(){return new e(ko.emptyPath())}},{key:"comparator",value:function(t,e){return ko.comparator(t.path,e.path)}},{key:"isDocumentKey",value:function(t){return t.length%2==0}},{key:"fromSegments",value:function(t){return new e(new ko(t.slice()))}}]),e}(),xo=function e(n,r,i,a){"use strict";t(nt)(this,e),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
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
 */xo.UNKNOWN_ID=-1;function To(t){return"IndexedDbTransactionError"===t.name}var Eo=function(){"use strict";function e(n,r){var i=this;t(nt)(this,e),this.previousValue=n,r&&(r.sequenceNumberHandler=function(t){return i.it(t)},this.rt=function(t){return r.writeSequenceNumber(t)})}return t(rt)(e,[{key:"it",value:function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}},{key:"next",value:function(){var t=++this.previousValue;return this.rt&&this.rt(t),t}}]),e}();
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
Eo.ot=-1;var Io=function(){"use strict";function e(n,r){t(nt)(this,e),this.comparator=n,this.root=r||So.EMPTY}return t(rt)(e,[{key:"insert",value:function(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,So.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,So.BLACK,null,null))}},{key:"get",value:function(t){for(var e=this.root;!e.isEmpty();){var n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}},{key:"indexOf",value:function(t){for(var e=0,n=this.root;!n.isEmpty();){var r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(t){return this.root.inorderTraversal(t)}},{key:"forEach",value:function(t){this.inorderTraversal((function(e,n){return t(e,n),!1}))}},{key:"toString",value:function(){var t=[];return this.inorderTraversal((function(e,n){return t.push("".concat(e,":").concat(n)),!1})),"{".concat(t.join(", "),"}")}},{key:"reverseTraversal",value:function(t){return this.root.reverseTraversal(t)}},{key:"getIterator",value:function(){return new _o(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(t){return new _o(this.root,t,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new _o(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(t){return new _o(this.root,t,this.comparator,!0)}}]),e}(),_o=function(){"use strict";function e(n,r,i,a){t(nt)(this,e),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return t(rt)(e,[{key:"getNext",value:function(){var t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}]),e}(),So=function(){"use strict";function e(n,r,i,a,s){t(nt)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:e.EMPTY,this.right=null!=s?s:e.EMPTY,this.size=this.left.size+1+this.right.size}return t(rt)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}},{key:"reverseTraversal",value:function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(t,e,n){var r=this,i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}},{key:"moveRedLeft",value:function(){var t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}},{key:"moveRedRight",value:function(){var t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}},{key:"checkMaxDepth",value:function(){var t=this.check();return Math.pow(2,t)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw ro();if(this.right.isRed())throw ro();var t=this.left.check();if(t!==this.right.check())throw ro();return t+(this.isRed()?0:1)}}]),e}();So.EMPTY=null,So.RED=!0,So.BLACK=!1,So.EMPTY=new(function(){"use strict";function e(){t(nt)(this,e),this.size=0}return t(rt)(e,[{key:"key",get:function(){throw ro()}},{key:"value",get:function(){throw ro()}},{key:"color",get:function(){throw ro()}},{key:"left",get:function(){throw ro()}},{key:"right",get:function(){throw ro()}},{key:"copy",value:function(t,e,n,r,i){return this}},{key:"insert",value:function(t,e,n){return new So(t,e)}},{key:"remove",value:function(t,e){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(t){return!1}},{key:"reverseTraversal",value:function(t){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
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
var Ao=function(){"use strict";function e(n){t(nt)(this,e),this.comparator=n,this.data=new Io(this.comparator)}return t(rt)(e,[{key:"has",value:function(t){return null!==this.data.get(t)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(t){return this.data.indexOf(t)}},{key:"forEach",value:function(t){this.data.inorderTraversal((function(e,n){return t(e),!1}))}},{key:"forEachInRange",value:function(t,e){for(var n=this.data.getIteratorFrom(t[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}},{key:"forEachWhile",value:function(t,e){var n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(t){var e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}},{key:"getIterator",value:function(){return new Co(this.data.getIterator())}},{key:"getIteratorFrom",value:function(t){return new Co(this.data.getIteratorFrom(t))}},{key:"add",value:function(t){return this.copy(this.data.remove(t).insert(t,!0))}},{key:"delete",value:function(t){return this.has(t)?this.copy(this.data.remove(t)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(t){var e=this;return e.size<t.size&&(e=t,t=this),t.forEach((function(t){e=e.add(t)})),e}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.data.getIterator(),r=t.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var t=[];return this.forEach((function(e){t.push(e)})),t}},{key:"toString",value:function(){var t=[];return this.forEach((function(e){return t.push(e)})),"SortedSet("+t.toString()+")"}},{key:"copy",value:function(t){var n=new e(this.comparator);return n.data=t,n}}]),e}(),Co=function(){"use strict";function e(n){t(nt)(this,e),this.iter=n}return t(rt)(e,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),e}();var Lo=Symbol.iterator,Do=function(){"use strict";function e(n){t(nt)(this,e),this.binaryString=n}return t(rt)(e,[{key:Lo,value:function(){var t=this,e=0;return{next:function(){return e<t.binaryString.length?{value:t.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var t;return t=this.binaryString,btoa(t)}},{key:"toUint8Array",value:function(){return function(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(t){return mo(this.binaryString,t.binaryString)}},{key:"isEqual",value:function(t){return this.binaryString===t.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(atob(t))}},{key:"fromUint8Array",value:function(t){return new e(function(t){for(var e="",n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t))}}]),e}();
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
 */Do.EMPTY_BYTE_STRING=new Do("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ro(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function No(t){return"string"==typeof t?Do.fromBase64String(t):Do.fromUint8Array(t)}
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
var Oo=function e(n,r,i,a,s,o,u,c){"use strict";t(nt)(this,e),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.useFetchStreams=c},Po=function(){"use strict";function e(n,r){t(nt)(this,e),this.projectId=n,this.database=r||"(default)"}return t(rt)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}();function Mo(t){return 0===t&&1/t==-1/0}function jo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}var Fo,Uo;(Uo=Fo||(Fo={}))[Uo.OK=0]="OK",Uo[Uo.CANCELLED=1]="CANCELLED",Uo[Uo.UNKNOWN=2]="UNKNOWN",Uo[Uo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Uo[Uo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Uo[Uo.NOT_FOUND=5]="NOT_FOUND",Uo[Uo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Uo[Uo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Uo[Uo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Uo[Uo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Uo[Uo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Uo[Uo.ABORTED=10]="ABORTED",Uo[Uo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Uo[Uo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Uo[Uo.INTERNAL=13]="INTERNAL",Uo[Uo.UNAVAILABLE=14]="UNAVAILABLE",Uo[Uo.DATA_LOSS=15]="DATA_LOSS";
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
new Io(wo.comparator);
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
 */new Io(wo.comparator);new Io(wo.comparator),new Ao(wo.comparator);new Ao(mo);var qo=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bo=(t(Dt)(qo).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),Ho=Bo;
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
 */t(Dt)(Ho).concat(["indexConfiguration","indexState","indexEntries"]);
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
 */var Xo=function(){"use strict";function e(){t(nt)(this,e)}return t(rt)(e,[{key:"re",value:function(t,e){this.oe(t,e),e.ue()}},{key:"oe",value:function(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Ro(t.integerValue));else if("doubleValue"in t){var n=Ro(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Mo(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){var r=t.timestampValue;this.ce(e,20),"string"==typeof r?e.he(r):(e.he("".concat(r.seconds||"")),e.ae(r.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(No(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){var i=t.geoPointValue;this.ce(e,45),e.ae(i.latitude||0),e.ae(i.longitude||0)}else"mapValue"in t?jo(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):ro()}},{key:"le",value:function(t,e){this.ce(e,25),this.ge(t,e)}},{key:"ge",value:function(t,e){e.he(t)}},{key:"we",value:function(t,e){var n=t.fields||{};this.ce(e,55);var r=!0,i=!1,a=void 0;try{for(var s,o=Object.keys(n)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;this.le(u,e),this.oe(n[u],e)}}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"me",value:function(t,e){var n=t.values||[];this.ce(e,50);var r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;this.oe(u,e)}}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"_e",value:function(t,e){var n=this;this.ce(e,37),wo.fromName(t).path.forEach((function(t){n.ce(e,60),n.ge(t,e)}))}},{key:"ce",value:function(t,e){t.ae(e)}},{key:"fe",value:function(t){t.ae(2)}}]),e}();Xo.ye=new Xo;
/**
 * @license
 * Copyright 2022 Google LLC
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
new Uint8Array(0);
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
var Vo=function(){"use strict";function e(n,r,i){t(nt)(this,e),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return t(rt)(e,null,[{key:"withCacheSize",value:function(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),e}();
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
 */Vo.DEFAULT_COLLECTION_PERCENTILE=10,Vo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vo.DEFAULT=new Vo(41943040,Vo.DEFAULT_COLLECTION_PERCENTILE,Vo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vo.DISABLED=new Vo(-1,0,0);function Ko(){return"undefined"!=typeof document?document:null}
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
 */var zo=function(){"use strict";function e(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;t(nt)(this,e),this.js=n,this.timerId=r,this.lo=i,this.fo=a,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}return t(rt)(e,[{key:"reset",value:function(){this.wo=0}},{key:"po",value:function(){this.wo=this._o}},{key:"Io",value:function(t){var e=this;this.cancel();var n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&to("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.wo," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(function(){return e.yo=Date.now(),t()})),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}},{key:"Eo",value:function(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}},{key:"cancel",value:function(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}},{key:"To",value:function(){return(Math.random()-.5)*this.wo}}]),e}();
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
var Yo=function(){"use strict";function e(n,r,i,a,s){t(nt)(this,e),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new oo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(t){}))}return t(rt)(e,[{key:"start",value:function(t){var e=this;this.timerHandle=setTimeout((function(){return e.handleDelayElapsed()}),t)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new so(ao.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}},{key:"handleDelayElapsed",value:function(){var t=this;this.asyncQueue.enqueueAndForget((function(){return null!==t.timerHandle?(t.clearTimeout(),t.op().then((function(e){return t.deferred.resolve(e)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(t,n,r,i,a){var s=new e(t,n,Date.now()+r,i,a);return s.start(r),s}}]),e}();function Go(t,e){if(eo("AsyncQueue","".concat(e,": ").concat(t)),To(t))return new so(ao.UNAVAILABLE,"".concat(e,": ").concat(t));throw t}
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
var Wo=function(){"use strict";function e(n,r,i,o){var u=this;t(nt)(this,e);var c,l=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=o,this.user=$s.UNAUTHENTICATED,this.clientId=yo.I(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(i,(c=t(a)(t(s).mark((function e(n){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return to("FirestoreClient","Received user=",n.uid),t.next=3,l.authCredentialListener(n);case 3:l.user=n;case 4:case"end":return t.stop()}}),e)}))),function(t){return c.apply(this,arguments)})),this.appCheckCredentials.start(i,(function(t){return to("FirestoreClient","Received new app check token=",t),u.appCheckCredentialListener(t,u.user)}))}return t(rt)(e,[{key:"getConfiguration",value:function(){var e=this;return t(a)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{asyncQueue:e.asyncQueue,databaseInfo:e.databaseInfo,clientId:e.clientId,authCredentials:e.authCredentials,appCheckCredentials:e.appCheckCredentials,initialUser:e.user,maxConcurrentLimboResolutions:100});case 1:case"end":return t.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(t){this.authCredentialListener=t}},{key:"setAppCheckTokenChangeListener",value:function(t){this.appCheckCredentialListener=t}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new so(ao.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var e=new oo,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(t(a)(t(s).mark((function r(){var i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=n.onlineComponents,!t.t0){t.next=5;break}return t.next=5,n.onlineComponents.terminate();case 5:if(t.t1=n.offlineComponents,!t.t1){t.next=9;break}return t.next=9,n.offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),e.resolve(),t.next=18;break;case 14:t.prev=14,t.t2=t.catch(0),i=Go(t.t2,"Failed to shutdown persistence"),e.reject(i);case 18:case"end":return t.stop()}}),r,null,[[0,14]])})))),e.promise}}]),e}();
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
 */var Jo=new Map;
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
var $o=function(){"use strict";function e(n){var r;if(t(nt)(this,e),void 0===n.host){if(void 0!==n.ssl)throw new so(ao.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new so(ao.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new so(ao.INVALID_ARGUMENT,"".concat(t," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return t(rt)(e,[{key:"isEqual",value:function(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}]),e}(),Qo=function(){"use strict";function e(n,r,i){t(nt)(this,e),this._authCredentials=r,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $o({}),this._settingsFrozen=!1,n instanceof Po?this._databaseId=n:(this._app=n,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new so(ao.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(t.options.projectId)}(n))}return t(rt)(e,[{key:"app",get:function(){if(!this._app)throw new so(ao.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(t){if(this._settingsFrozen)throw new so(ao.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $o(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new co;switch(t.type){case"gapi":var e=t.client;return io(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new fo(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new so(ao.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return t=this,(e=Jo.get(t))&&(to("ComponentProvider","Removing Datastore"),Jo.delete(t),e.terminate()),Promise.resolve();var t,e}}]),e}();
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
var Zo=function(){"use strict";function e(){var n=this;t(nt)(this,e),this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new zo(this,"async_queue_retry"),this.Kc=function(){var t=Ko();t&&to("AsyncQueue","Visibility state changed to "+t.visibilityState),n.So.Eo()};var r=Ko();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Kc)}return t(rt)(e,[{key:"isShuttingDown",get:function(){return this.Fc}},{key:"enqueueAndForget",value:function(t){this.enqueue(t)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(t){this.Gc(),this.Qc(t)}},{key:"enterRestrictedMode",value:function(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;var e=Ko();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}},{key:"enqueue",value:function(t){var e=this;if(this.Gc(),this.Fc)return new Promise((function(){}));var n=new oo;return this.Qc((function(){return e.Fc&&e.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(t){var e=this;this.enqueueAndForget((function(){return e.Mc.push(t),e.jc()}))}},{key:"jc",value:function(){var e=this;return t(a)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.Mc.length){t.next=14;break}return t.prev=1,t.next=4,e.Mc[0]();case 4:e.Mc.shift(),e.So.reset(),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(1),To(t.t0)){t.next=12;break}throw t.t0;case 12:to("AsyncQueue","Operation failed with retryable error: "+t.t0);case 13:e.Mc.length>0&&e.So.Io((function(){return e.jc()}));case 14:case"end":return t.stop()}}),n,null,[[1,8]])})))()}},{key:"Qc",value:function(t){var e=this,n=this.Oc.then((function(){return e.Lc=!0,t().catch((function(t){var n,r;throw e.Bc=t,e.Lc=!1,eo("INTERNAL UNHANDLED ERROR: ",(r=(n=t).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),t})).then((function(t){return e.Lc=!1,t}))}));return this.Oc=n,n}},{key:"enqueueAfterDelay",value:function(t,e,n){var r=this;this.Gc(),this.qc.indexOf(t)>-1&&(e=0);var i=Yo.createAndSchedule(this,t,e,n,(function(t){return r.Wc(t)}));return this.$c.push(i),i}},{key:"Gc",value:function(){this.Bc&&ro()}},{key:"verifyOperationInProgress",value:function(){}},{key:"zc",value:function(){var e=this;return t(a)(t(s).mark((function n(){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:return r=e.Oc,t.next=4,r;case 4:if(r!==e.Oc){t.next=1;break}case 5:case"end":return t.stop()}}),n)})))()}},{key:"Hc",value:function(t){var e=!0,n=!1,r=void 0;try{for(var i,a=this.$c[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){if(i.value.timerId===t)return!0}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"Jc",value:function(t){var e=this;return this.zc().then((function(){e.$c.sort((function(t,e){return t.targetTimeMs-e.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,s=e.$c[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;if(o.skipDelay(),"all"!==t&&o.timerId===t)break}}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return e.zc()}))}},{key:"Yc",value:function(t){this.qc.push(t)}},{key:"Wc",value:function(t){var e=this.$c.indexOf(t);this.$c.splice(e,1)}}]),e}();var tu=function(e){"use strict";t(Vn)(r,e);var n=t(zn)(r);function r(e,i,a){var s;return t(nt)(this,r),(s=n.call(this,e,i,a)).type="firestore",s._queue=new Zo,s._persistenceKey="name"in e?e.name:"[DEFAULT]",t(Kn)(s)}return t(rt)(r,[{key:"_terminate",value:function(){return this._firestoreClient||eu(this),this._firestoreClient.terminate()}}]),r}(Qo);
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
 */function eu(t){var e,n,r,i,a,s=t._freezeSettings(),o=(n=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",i=t._persistenceKey,new Oo(n,r,i,(a=s).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));t._firestoreClient=new Wo(t._authCredentials,t._appCheckCredentials,t._queue,o)}new RegExp("[~\\*/\\[\\]]");!function(t){var e,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=St.SDK_VERSION,Qs=e,(0,St._registerComponent)(new(0,Lt.Component)("firestore",(function(t,e){var r=e.options,i=t.getProvider("app").getImmediate(),a=new tu(i,new lo(t.getProvider("auth-internal")),new go(t.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a}),"PUBLIC")),(0,St.registerVersion)(Js,"3.4.10",t),(0,St.registerVersion)(Js,"3.4.10","esm2017")}();var nu,ru=(0,Et.initializeApp)({apiKey:"AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU",authDomain:"team-project-filmoteka-4a376.firebaseapp.com",projectId:"team-project-filmoteka-4a376",storageBucket:"team-project-filmoteka-4a376.appspot.com",messagingSenderId:"642268048302",appId:"1:642268048302:web:153e44a9f24c349d73f63f",measurementId:"G-0YT3H2K0Y7"}),iu=(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,St.getApp)();t=(0,Ct.getModularInstance)(t);var e=(0,St._getProvider)(t,Ge);e.isInitialized()?e.getImmediate():Mn(t)}(ru),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,St.getApp)();(0,St._getProvider)(t,"firestore").getImmediate()}(ru),(0,Bn.getAuth)()),au=document.querySelector("#btnLogin"),su=document.querySelector("#btnSignup"),ou=document.querySelector("#user-email"),uu=document.querySelector("#user-name"),cu=document.querySelector("[data-modal]"),lu=document.querySelector("#user-login"),hu=document.querySelector("#user-library"),fu=document.querySelector("#user-logout"),pu=(nu=t(a)(t(s).mark((function e(n){var r,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=ou.value,i=uu.value,t.prev=3,t.next=6,(0,Bn.signInWithEmailAndPassword)(iu,r,i).then((function(t){t&&(cu.classList.toggle("is-hidden"),ou.value="",uu.value="")}));case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),vu(t.t0);case 12:case"end":return t.stop()}}),e,null,[[3,9]])}))),function(t){return nu.apply(this,arguments)});au.addEventListener("click",pu);var du,gu=(du=t(a)(t(s).mark((function e(n){var r,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=ou.value,i=uu.value,e.prev=3,e.next=6,(0,Bn.createUserWithEmailAndPassword)(iu,r,i).then(function(){var e=t(a)(t(s).mark((function e(n){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:cu.classList.toggle("is-hidden");case 1:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),i.length<7?I.Notify.info("Your password have less than 6 characters"):vu(e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])}))),function(t){return du.apply(this,arguments)});su.addEventListener("click",gu);var vu=function(t){t.code==Bn.AuthErrorCodes.INVALID_PASSWORD?I.Notify.info("Wrong password. Try again"):I.Notify.info("Error: ".concat(t.message))};(0,Bn.onAuthStateChanged)(iu,(function(t){t&&mu()}));var yu=function(){var e=t(a)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,Bn.signOut)(iu);case 2:mu();case 3:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function mu(){lu.classList.toggle("hidden-link"),hu.classList.toggle("hidden-link"),fu.classList.toggle("hidden-link")}fu.addEventListener("click",yu)}();
//# sourceMappingURL=index.3857a9c9.js.map
