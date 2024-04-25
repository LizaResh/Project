"use strict";function addToBasket(){document.querySelectorAll(".basket").forEach((function(t){var e=t.querySelector(".basket__minus"),s=t.querySelector(".basket__plus"),a=t.querySelector(".basket__count");s.addEventListener("click",(function(t){1!==a.textContent&&e.classList.remove("basket__minus--disabled");var n=a.textContent;n++,a.textContent=n,n>99998?(a.textContent=99999,s.classList.add("basket__plus--disabled")):s.classList.remove("basket__plus--disabled")})),1==a.textContent?e.classList.add("basket__minus--disabled"):e.classList.remove("basket__minus--disabled"),e.addEventListener("click",(function(t){var s=a.textContent;s--,a.textContent=s,s<=1?(a.textContent=1,e.classList.add("basket__minus--disabled")):e.classList.remove("basket__minus--disabled")}))}))}addToBasket();
"use strict";var brandsSlider=new Swiper(".brands__swiper",{slidesPerView:2,spaceBetween:18,navigation:{nextEl:".brands__next",prevEl:".brands__prev"},pagination:{el:".brands-pagination",type:"bullets",clickable:!0},breakpoints:{1024:{slidesPerView:4},1440:{slidesPerView:6}}});
"use strict";function headerMobile(){var e=document.querySelector(".burger--mobile"),r=document.querySelector(".burger-wrapper"),t=document.querySelector(".header-mobile");r.addEventListener("click",(function(){e.classList.toggle("burger--active"),r.classList.toggle("burger-wrapper--active"),t.classList.toggle("header-mobile--active"),document.body.classList.toggle("dis-scroll")}))}headerMobile();
"use strict";function changeCity(){var e=document.querySelector(".address"),s=document.querySelector(".address-popup"),t=s.querySelector(".address-popup__close"),d=document.querySelector(".address-wrap");e.addEventListener("click",(function(){s.classList.add("address-popup--active")})),d.addEventListener("mouseenter",(function(){s.classList.add("address-popup--active")})),d.addEventListener("mouseleave",(function(){s.classList.remove("address-popup--active")})),t.addEventListener("click",(function(){s.classList.remove("address-popup--active")})),document.addEventListener("click",(function(e){e.target.closest(".address-wrap")||s.classList.remove("address-popup--active")}))}changeCity();
"use strict";var time=2e3;function outNumber(e,o,t,r,n){var c=o,u=0,l=Math.round(n/Math.round(e/t)),a=setInterval((function(){(u+=t)===e&&clearInterval(a),c.innerHTML="".concat(u).concat(r)}),l)}var bool=0;window.addEventListener("scroll",(function e(){window.scrollY+100>=document.querySelector(".trust").offsetTop&&(outNumber(17,document.querySelector(".caption-age"),1," лет",400),outNumber(100,document.querySelector(".caption-clients"),1,"%",800),outNumber(500,document.querySelector(".caption-stores"),5,"+",1200),outNumber(99,document.querySelector(".caption-orders"),1,"%",800),bool=1),1==bool&&window.removeEventListener("scroll",e)}));
"use strict";function deleteSimplebar(){var e=document.querySelector(".seo__left");window.innerWidth<768&&delete e.dataset.simplebar,document.querySelectorAll(".footer-catalog__right").forEach((function(e){window.innerWidth<768&&delete e.dataset.simplebar}))}deleteSimplebar();
"use strict";function footerCatalog(){for(var o=document.querySelectorAll(".footer-catalog__link"),e=document.querySelectorAll(".footer-catalog__right"),t=function(t){o[t].addEventListener("click",(function(){for(var l=0;l<o.length;l++)o[l].classList.remove("footer-catalog__link--active");o[t].classList.add("footer-catalog__link--active");for(var c=0;c<e.length;c++)e[c].classList.remove("menu--active");e[t].classList.add("menu--active")}))},l=0;l<o.length;l++)t(l)}function footerMobile(){var o=document.querySelectorAll(".footer-catalog__link");console.log(o),o.forEach((function(o){console.log(o),o.addEventListener("click",(function(){o.closest(".menu").querySelector(".menu__wrap").classList.toggle("menu__wrap--active"),o.classList.toggle("footer-catalog__link--active")}))}))}window.innerWidth>768?footerCatalog():footerMobile();
"use strict";function openFooterBlocks(){document.querySelectorAll(".footer__subtitle").forEach((function(o){o.addEventListener("click",(function(){o.closest(".footer__block").querySelector(".footer__menu").classList.toggle("footer__menu--open"),o.classList.toggle("footer__subtitle--open")}))}))}openFooterBlocks();
"use strict";var goodsSlider=new Swiper(".goods-swiper",{slidesPerView:2,spaceBetween:20,updateOnWindowResize:!0,navigation:{nextEl:".goods__next",prevEl:".goods__prev"},breakpoints:{1024:{slidesPerView:3},1200:{slidesPerView:4}}});window.innerWidth<769&&goodsSlider.destroy(),window.addEventListener("resize",(function(){window.innerWidth<769&&goodsSlider.destroy()}));
"use strict";function catalog(){var e=document.querySelector(".catalog--desktop"),t=e.querySelector(".burger--catalog"),o=document.querySelector(".header-catalog");e.addEventListener("click",(function(){var e=window.innerWidth-document.body.offsetWidth+"px";t.classList.toggle("burger--active"),o.classList.toggle("header-catalog--visible"),document.body.classList.toggle("dis-scroll"),document.body.style.paddingRight=e}))}function mobileCatalog(){if(document.querySelector(".catalog--mobile")){var e=document.querySelector(".catalog--mobile"),t=e.querySelector(".burger-catalog--mobile"),o=document.querySelector(".header-mobile__menu");e.addEventListener("click",(function(){t.classList.toggle("burger--active"),o.classList.toggle("menu--visible")}))}}catalog(),mobileCatalog();
"use strict";function init(){ymaps=window.ymaps;var o=new ymaps.Map("map",{center:[45.058822,39.036336],zoom:11,controls:[]});o.controls.remove("geolocationControl"),o.controls.remove("searchControl"),o.controls.remove("trafficControl"),o.controls.remove("typeSelector"),o.controls.remove("fullscreenControl"),o.controls.remove("zoomControl"),o.controls.remove("rulerControl"),o.behaviors.disable(["scrollZoom"]);var e=new ymaps.Placemark([45.088822,39.036336],{},{iconLayout:"default#image",iconImageHref:"img/location.png",iconImageSize:[48,55]}),a=new ymaps.Placemark([45.125822,39.011336],{},{iconLayout:"default#image",iconImageHref:"img/location-2.png",iconImageSize:[16,16]}),n=new ymaps.Placemark([45.010822,39.09],{},{iconLayout:"default#image",iconImageHref:"img/location-2.png",iconImageSize:[16,16]});o.geoObjects.add(e),o.geoObjects.add(a),o.geoObjects.add(n)}ymaps.ready(init);
"use strict";function modalBasket(){var e=document.querySelector(".header-links__link--basket"),t=document.querySelector(".modal-basket"),o=t.querySelector(".modal-close");function s(){document.body.style.paddingRight="0px",t.classList.remove("modal-basket--open"),document.body.classList.remove("stop-scroll")}e.addEventListener("click",(function(){var e=window.innerWidth-document.body.offsetWidth+"px";document.body.style.paddingRight=e,t.classList.add("modal-basket--open"),document.body.classList.add("stop-scroll"),document.addEventListener("click",(function(e){t.classList.contains("modal-basket--open")&&(e.target.closest(".modal-basket__content")||e.target.closest(".header-links__link--basket")||(console.log("oi9uytr"),s()))}))})),o.addEventListener("click",(function(){s()}))}modalBasket();
"use strict";var newsSlider=new Swiper(".news__swiper",{slidesPerView:4,slidesPerGroup:1,spaceBetween:18,updateOnWindowResize:!0,speed:500,navigation:{nextEl:".news__next",prevEl:".news__prev"},pagination:{el:".news-pagination",type:"bullets",clickable:!0},on:{init:function(){document.querySelectorAll(".news-pagination .swiper-pagination-bullet").forEach((function(e){e.innerHTML='<span class="news-pagination__svg">\n                  <svg>\n                    <use xlink:href="img/sprite.svg#pag"></use>\n                  </svg>\n                </span>'}))}}});newsSlider.on("slideChange",(function(){document.querySelector(".news__swiper .swiper-slide-active").style.setProperty("width","calc((100% - 54px) / 4)","important")})),newsSlider.on("slideChangeTransitionStart",(function(){document.querySelector(".news__swiper .swiper-slide-active").style.removeProperty("width","calc((100% - 54px) / 4)","important"),document.querySelector(".news__swiper .swiper-slide-next").style.removeProperty("width","calc((100% - 54px) / 4)","important");for(var e,n=3+newsSlider.realIndex,i=document.querySelectorAll(".news__swiper .swiper-slide"),s=[],t=0;e=i[t];++t)s.push(e);s.forEach((function(e){e.classList.remove("news__slide--last")})),s[n].classList.add("news__slide--last");var r=document.querySelector(".news__swiper .swiper-slide-prev");r&&r.style.setProperty("width","calc((100% - 54px) / 4)","important")})),window.innerWidth<1201?newsSlider.destroy():newsSlider.update(),window.addEventListener("resize",(function(){window.innerWidth<1201&&newsSlider.destroy()}));
"use strict";var offersSlider=new Swiper(".offers-swiper",{slidesPerView:2,spaceBetween:20,updateOnWindowResize:!0,navigation:{nextEl:".offers-next",prevEl:".offers-prev"},breakpoints:{1024:{slidesPerView:3},1200:{slidesPerView:4}}});window.innerWidth<769?offersSlider.destroy():offersSlider.init(),window.addEventListener("resize",(function(){window.innerWidth<769&&offersSlider.destroy()}));
"use strict";function openCards(){document.querySelectorAll(".goods__open").forEach((function(o){o.addEventListener("click",(function(){o.closest(".goods").querySelectorAll(".goods-slide").forEach((function(o){o.classList.add("goods-slide--open")})),o.remove()}))}))}openCards();
"use strict";function popupAdd(){var e=document.querySelectorAll(".icon-add"),t=document.querySelector(".popup-add"),o=t.querySelector(".modal-close");e.forEach((function(e){var o=e.closest(".goods-slide"),c=o.querySelector(".goods-slide__subtitle");e.addEventListener("click",(function(){if(e.classList.toggle("icon-add--active"),e.classList.contains("icon-add--active")){t.classList.add("popup-add--visible"),document.querySelector(".popup-add__descr").textContent=c.textContent;var d=o.querySelector(".goods-slide__img"),i=document.querySelector(".popup-add__img img"),s=d.querySelector("img").getAttribute("src");i.setAttribute("src",s)}e.classList.contains("icon-add--active")||t.classList.remove("popup-add--visible")}))})),o.addEventListener("click",(function(){t.classList.remove("popup-add--visible")}))}popupAdd();
"use strict";var pumpsSlider=new Swiper(".pumps__swiper",{slidesPerView:1,spaceBetween:20,speed:800,allowTouchMove:!1,autoplay:{delay:3e3},navigation:{nextEl:".pumps__next",prevEl:".pumps__prev"},pagination:{el:".pumps-pagination",type:"bullets",clickable:!0},breakpoints:{1024:{allowTouchMove:!0},1200:{slidesPerView:1,spaceBetween:20,allowTouchMove:!0}},loop:!0}),slider=document.querySelector(".pumps__swiper");slider&&(slider.addEventListener("mouseenter",(function(){pumpsSlider.autoplay.stop()})),slider.addEventListener("mouseleave",(function(){pumpsSlider.params.autoplay.disableOnInteraction=!1,pumpsSlider.params.autoplay.delay=3e3,pumpsSlider.autoplay.start()})));
"use strict";var brandsSlider=new Swiper(".quick-view__swiper",{slidesPerView:1,spaceBetween:18,navigation:{nextEl:".quick-view__next",prevEl:".quick-view__prev"},pagination:{el:".quick-view-pagination",type:"bullets",clickable:!0}});
"use strict";function createRating(){var t=document.querySelectorAll(".rating");t.length>0&&function(){var n,e;function c(t){r(t),i()}function r(t){n=t.querySelector(".rating__active"),e=t.querySelector(".rating__value")}function i(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.innerHTML)/.05;n.style.width="".concat(t,"%")}t.forEach((function(t){c(t)}))}()}createRating();
"use strict";var reviewsSlider=new Swiper(".reviews__swiper",{slidesPerView:"auto",spaceBetween:10,updateOnWindowResize:!0,grid:{rows:1,fill:"row"},navigation:{nextEl:".reviews__next",prevEl:".reviews__prev"},pagination:{el:".reviews-pagination",type:"bullets",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1024:{grid:{rows:2}},1200:{slidesPerView:3,grid:{rows:2}}},on:{init:function(){document.querySelectorAll(".reviews-pagination .swiper-pagination-bullet").forEach((function(e){e.innerHTML='<span class="reviews-pagination__svg">\n                  <svg>\n                    <use xlink:href="img/sprite.svg#pag"></use>\n                  </svg>\n                </span>'}))}}});
"use strict";function searchClean(){var e=document.querySelectorAll(".search-history__item");e.forEach((function(e){e.querySelector(".search-history__close").addEventListener("click",(function(){e.classList.add("search-history__item--delete")}))})),document.querySelector(".search__clean").addEventListener("click",(function(){e.forEach((function(e){e.classList.add("search-history__item--delete"),document.querySelector(".search__title-block").classList.add("search__title-block--delete")}))}))}searchClean();
"use strict";function seoOpen(){var e=document.querySelector(".seo__open"),n=document.querySelector(".seo__hidden");e.addEventListener("click",(function(){n.classList.add("seo__hidden--open"),e.remove()}))}seoOpen();
"use strict";var toTop=document.querySelector(".to-top"),links=document.querySelector(".links"),heroHeight=500;if(links){var isVisibleToTop=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)>=heroHeight?links.classList.add("links--active"):links.classList.remove("links--active")};isVisibleToTop(window.scrollY),window.addEventListener("scroll",(function(){var i=window.scrollY;isVisibleToTop(i)}),{passive:!0}),toTop.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}