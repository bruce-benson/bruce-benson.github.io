function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,r=t&&"classList"in document.createElement("p"),o={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,r=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var r="data-"+e;null!==n?t.setAttribute(r,n):t.removeAttribute(r)},c=function(t){return"true"===i(t,"was-processed")},l=function(t,e){return s(t,"ll-timeout",e)},u=function(t){return i(t,"ll-timeout")},d=function(t,e,n,r){t&&(void 0===r?void 0===n?t(e):t(e,n):t(e,n,r))},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish,t)},_=function(t){for(var e,n=[],r=0;e=t.children[r];r+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},b=function(t,e){v(t,"sizes",i(t,e.data_sizes)),v(t,"srcset",i(t,e.data_srcset)),v(t,"src",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){b(t,e)});b(t,e)},IFRAME:function(t,e){v(t,"src",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",i(t,e.data_src))}),v(t,"poster",i(t,e.data_poster)),v(t,"src",i(t,e.data_src)),t.load()}},p=function(t,e){var n,r,o=e._settings,a=t.tagName,s=m[a];if(s)return s(t,o),f(e,1),void(e._elements=(n=e._elements,r=t,n.filter(function(t){return t!==r})));!function(t,e){var n=i(t,e.data_src),r=i(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),r&&(t.style.backgroundImage=r)}(t,o)},g=function(t,e){r?t.classList.add(e):t.className+=(t.className?" ":"")+e},y=function(t,e){r?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},h=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},A=function(t,e,n){var r=n._settings,o=e?r.class_loaded:r.class_error,a=e?r.callback_loaded:r.callback_error,i=t.target;y(i,r.class_loading),g(i,o),d(a,i,n),f(n,-1)},I=function(t,e){var n=function n(o){A(o,!0,e),w(t,n,r)},r=function r(o){A(o,!1,e),w(t,n,r)};!function(t,e,n){h(t,"load",e),h(t,"loadeddata",e),h(t,"error",n)}(t,n,r)},k=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;S(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},O=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,r=u(t);r||(r=setTimeout(function(){L(t,e),O(t)},n),l(t,r))},S=function(t,e,n){var r=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),g(t,r.class_loading)),p(t,e),function(t){s(t,"was-processed","true")}(t),d(r.callback_reveal,t,e),d(r.callback_set,t,e))},z=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var r=n._settings;d(r.callback_enter,t,e,n),r.load_delay?x(t,n):L(t,n)}(e.target,e,t):function(t,e,n){var r=n._settings;d(r.callback_exit,t,e,n),r.load_delay&&O(t)}(e.target,e,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},C=["IMG","IFRAME"],N=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t){var e=t._settings;_toConsumableArray(e.container.querySelectorAll("."+e.class_error)).forEach(function(t){y(t,e.class_error),function(t){s(t,"was-processed",null)}(t)}),t.update()},R=function(e,n){var r;this._settings=function(t){return _extends({},o,t)}(e),this._loadingCount=0,z(this),this.update(n),r=this,t&&window.addEventListener("online",function(t){M(r)})};return R.prototype={update:function(t){var n,r=this,o=this._settings;(this._elements=N(t,o),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(o)&&((n=this)._elements.forEach(function(t){-1!==C.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),S(t,n))}),this._elements=N(t,o)),this._elements.forEach(function(t){r._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){S(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,r=0;n=e[r];r+=1)a(t,n);else a(t,e)}(R,window.lazyLoadOptions),R});
//# sourceMappingURL=lazyload.min.js.map
// function slider(sliderElement) {
//   var pages = [];
//   var currentSlide = 1;
//   var isChanging = false;
//   var keyUp = {38:1, 33:1};
//   var keyDown = {40:1, 34:1};
//   var scrolled = false;

//   var init = function () {

//     document.body.classList.add('slider__body');

//     // control scrolling
//     var whatWheel = 'onwheel' in document.createElement('div') ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
//     window.addEventListener(whatWheel, function (e) { 
//       if (scrolled === false) { 
//         // var direction = e.wheelDelta || e.deltaY;
//         var direction = e.deltaY;
//         if (direction > 0) {
//           changeSlide(1);
//         } else {
//           changeSlide(-1);
//         }
//         scrolled = true;
//         setTimeout(function(){
//           scrolled = false
//         }, 1500); 
//       }
//     });

//     // allow keyboard input
//     window.addEventListener('keydown', function (e) {
//       if (keyUp[e.keyCode]) {
//         changeSlide(-1);
//       } else if (keyDown[e.keyCode]) {
//         changeSlide(1);
//       }
//     });

//     // page change animation is done
//     detectChangeEnd() && document.querySelector(sliderElement).addEventListener(detectChangeEnd(), function () {
//       if (isChanging) {
//         setTimeout(function() {
//           isChanging = false;
//           window.location.hash = document.querySelector('[data-slider-index="' + currentSlide + '"]').id;
//         }, 400);
//       }
//     });

//     // set up page and build visual indicators
//     document.querySelector(sliderElement).classList.add('slider__container');
//     var indicatorContainer = document.createElement('div');
//     indicatorContainer.classList.add('slider__indicators');

//     var index = 1;
//     [].forEach.call(document.querySelectorAll(sliderElement + ' > *'), function (section) {

//       var indicator = document.createElement('a');
//       indicator.classList.add('slider__indicator')
//       indicator.setAttribute('data-slider-target-index', index);
//       indicatorContainer.appendChild(indicator);
//       indicator.setAttribute('href', '/#' + section.id);
//       indicator.setAttribute('aria-label', 'go to ' + section.id + ' slide');

//       section.classList.add('slider__page');
//       pages.push(section);
//       section.setAttribute('data-slider-index', index++);
//     });

//     document.body.appendChild(indicatorContainer);
//     document.querySelector('a[data-slider-target-index = "' + currentSlide +'"]').classList.add('slider__indicator--active');

//     // stuff for touch devices
//     if ("ontouchstart" in document.documentElement) {
//       var touchStartPos = 0;
//       var touchStopPos = 0;
//       var touchMinLength = 90;
//       document.addEventListener('touchstart', function (e) {
//         var notLink = (e.target.nodeName !== "A" && e.target.parentNode.nodeName !== "A" && e.target.parentNode.parentNode.nodeName !== "A");
//         var notButton = (e.target.nodeName !== "BUTTON" && e.target.parentNode.nodeName !== "BUTTON" && e.target.parentNode.parentNode.nodeName !== "BUTTON");
//         if (notLink && notButton) {
//           e.preventDefault();
//         }
//         if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
//           var touch = e.touches[0] || e.changedTouches[0];
//           touchStartPos = touch.pageY;
//         }
//       });
//       document.addEventListener('touchend', function (e) {
//         var notLink = (e.target.nodeName !== "A" && e.target.parentNode.nodeName !== "A" && e.target.parentNode.parentNode.nodeName !== "A");
//         var notButton = (e.target.nodeName !== "BUTTON" && e.target.parentNode.nodeName !== "BUTTON" && e.target.parentNode.parentNode.nodeName !== "BUTTON");
//         if (notLink && notButton) {
//           e.preventDefault();
//         }
//         if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
//           var touch = e.touches[0] || e.changedTouches[0];
//           touchStopPos = touch.pageY;
//         }
//         if (touchStartPos + touchMinLength < touchStopPos) {
//           changeSlide(-1);
//         } else if (touchStartPos > touchStopPos + touchMinLength) {
//           changeSlide(1);
//         }
//       });
//     }
//   };


//   // prevent double scrolling
//   var detectChangeEnd = function () {
//     var transition;
//     var e = document.createElement('foobar');
//     var transitions = {
//       'transition': 'transitionend',
//       'OTransition': 'oTransitionEnd',
//       'MozTransition': 'transitionend',
//       'WebkitTransition': 'webkitTransitionEnd'
//     };

//     for(transition in transitions) {
//       if (e.style[transition] !== undefined) {
//         return transitions[transition];
//       }
//     }
//     return true;
//   };


//   // handle css change
//   var changeCss = function (obj, styles) {
//     for (var _style in styles) {
//       if (obj.style[_style] !== undefined) {
//         obj.style[_style] = styles[_style];
//       }
//     }
//   };

//   // handle page/section change
//   var changeSlide = function (direction) {

//     // already doing it or last/first page, staph plz
//     if (isChanging || (direction == 1 && currentSlide == pages.length) || (direction == -1 && currentSlide == 1)) {
//       return;
//     }

//     // change page
//     currentSlide += direction;
//     isChanging = true;
//     changeCss(document.querySelector(sliderElement), {
//       transform: 'translate3d(0, ' + -(currentSlide - 1) * 100 + '%, 0)'
//     });

//     // change dots
//     document.querySelector('a.slider__indicator--active').classList.remove('slider__indicator--active');
//     document.querySelector('a[data-slider-target-index="' + currentSlide +'"]').classList.add('slider__indicator--active');
    
//     // add current class to slide
//     var slides = document.getElementsByClassName('slide');
//     var inView = document.querySelector('.in-view');
//     if (inView !==null) {
//       inView.classList.remove("in-view");
//     }
//     slides[currentSlide - 1].classList.add('in-view');
//   };

//   // go to spesific slide if it exists
//   var gotoSlide = function (where) {
//     var target = document.querySelector(where).getAttribute('data-slider-index');
//     if (target != currentSlide && document.querySelector(where)) {
//       changeSlide(target - currentSlide);
//     }
//   };

//   // if page is loaded with hash, go to slide
//   if (location.hash) {
//     setTimeout(function () {
//       window.scrollTo(0, 0);
//       gotoSlide(location.hash);
//     }, 1);
//   };

//   window.addEventListener("hashchange", function() {
//     window.scrollTo(0, 0);
//       gotoSlide(location.hash);
//   });

//   // we have lift off
//   if (document.readyState === 'complete') {
//     init();
//   } else {
//     window.addEventListener('onload', init(), false);
//   }

//   // expose gotoSlide function
//   return {
//     gotoSlide: gotoSlide
//   }
// }

// check if browser supports webp format images
async function supportsWebp() {
    if (!self.createImageBitmap) return false;

    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
};

(async () => {
    if (!(await supportsWebp())) {
        document.body.classList.add("no-webp");
    }
})();

// show html after load
window.onload = function() {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
        // ... more custom settings?
    });
    document.body.classList.add('page-loaded');
    document.getElementById('loading').classList.add("hidden");
}

// if (document.getElementsByClassName("slides").length) {
//     var mySlider = slider('.slides');
// }

var nav = document.querySelector('nav');
var navTrigger = document.getElementById('nav-trigger');
var menu = document.querySelector('.nav-links');

document.addEventListener('click', function(){}, {passive: false})

// Setup our function to run on various events
var toggleMenu = function (event) {

    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navTrigger.setAttribute('aria-label', 'open navigation menu');
        menu.classList.add('hidden');
    } else {
        nav.classList.add('open');
        navTrigger.setAttribute('aria-label', 'close navigation menu');
        menu.classList.remove('hidden');
    }
};

// Add our event listeners
navTrigger.addEventListener('click', toggleMenu, false);

// console.log('Hi, my name is Ukyo!'); // eslint-disable-line no-console
