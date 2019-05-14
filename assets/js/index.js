document.addEventListener("DOMContentLoaded", function() {

  if(!Modernizr.touch){
    myParaxify = paraxify('.paraxify');
  }

  (function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('.nav'),

      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };

    if(hamburger.navToggle) {
      hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    }

    var imageLightBox = document.querySelectorAll('.project-image');

    if (imageLightBox.length) {
      imageLightBox.forEach(function(img) {
        img.addEventListener('click', function () {
          var src = this.src;
          var instance = basicLightbox.create(`
            <img src="` + src + `" width="800" height="600">
          `);

          instance.show();
        });
      });
    }

  }());
});