(()=>{var t={643:()=>{var t=document.querySelectorAll(".c-points-list__info"),e=function(){t.forEach((function(t){t.classList.contains("c-points-list__info--animate")||(t.classList.add("c-points-list__info--animate"),setTimeout((function(){t.classList.remove("c-points-list__info--animate")}),3800))}))};window.addEventListener("load",(function(){var t,n,o,i,c,r,s;document.querySelectorAll(".js-load").forEach((function(t){var e=Array.from(t.classList);"js-load"!==e[0]&&t.classList.add("".concat(e[0],"--loaded")),e.length>=2&&"js-load"!==e[1]&&t.classList.add("".concat(e[1],"--loaded"))})),window.Swiper&&new window.Swiper(".swiper",{loop:!0,speed:600,pagination:{el:".js-swiper-pagination",clickable:!0,bulletClass:"js-swiper-bullet",bulletActiveClass:"js-swiper-bullet-active"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),e(),setInterval(e,5e3),t=document.querySelectorAll(".c-kokuchi-pattern"),n=document.getElementById("kokuchiPattern1"),o=document.getElementById("kokuchiPattern2"),i=document.getElementById("kokuchiPattern3"),c=document.getElementById("kokuchiPattern4"),r=document.querySelectorAll(".c-kokuchi-question__button"),s=function(){t.forEach((function(t){t.classList.remove("c-kokuchi-pattern--current")}))},r.forEach((function(t){return t.addEventListener("click",(function(t){return r=(e=t.target).textContent.trim(),a=e.closest(".c-kokuchi-question"),u=e.getAttribute("data-step"),function(t,e){e.querySelectorAll(".c-kokuchi-question__button").forEach((function(t){return t.classList.remove("c-kokuchi-question__button--selected")})),t.classList.add("c-kokuchi-question__button--selected")}(e,a),void("1"===u?(s(),"はい"===r?n.classList.add("c-kokuchi-pattern--current"):o.classList.add("c-kokuchi-pattern--current"),document.querySelectorAll('[data-step="2"]').forEach((function(t){return t.classList.remove("c-kokuchi-question__button--selected")}))):"2"===u&&(s(),"はい"===r?i.classList.add("c-kokuchi-pattern--current"):c.classList.add("c-kokuchi-pattern--current"),o.classList.add("c-kokuchi-pattern--current")));var e,r,a,u}))}))}))},945:()=>{var t,e;t=document.querySelector('meta[name="viewport"]'),e=function(){var e=window.outerWidth>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==e&&t.setAttribute("content",e)},window.addEventListener("resize",e),e(),document.addEventListener("DOMContentLoaded",(function(){var t=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("is-inview")}))}),{threshold:.1});document.querySelectorAll(".js-fade, .js-fadeup, .js-fadein, .js-scrollin").forEach((function(e){t.observe(e)}));var e=document.querySelector(".js-anchor-link");if(e){var n=e.offsetHeight;document.querySelectorAll(".js-scroll-link").forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var o=t.getAttribute("href").substring(1);if(""!==o){var i=document.getElementById(o).getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:i,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"})}))}))}}))}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,n),c.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(945),n(643)})()})();