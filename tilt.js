/* =========================================================
   tilt.js — 3D card tilt on hover
   Usage: Add data-tilt to any card element, then load this file.
   Optional attributes:
     data-tilt-strength="15"   tilt intensity (default: 12)
     data-tilt-glare="false"   disable glare shine
   ========================================================= */

(function () {
  function initTilt(card) {
    var strength = parseFloat(card.dataset.tiltStrength) || 12;
    var glareEnabled = card.dataset.tiltGlare !== 'false';

    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform';

    if (glareEnabled) {
      var shine = document.createElement('div');
      shine.className = 'tilt-glare';
      card.appendChild(shine);
    }

    card.addEventListener('mousemove', function (e) {
      var r  = card.getBoundingClientRect();
      var x  = (e.clientX - r.left) / r.width  - 0.5;
      var y  = (e.clientY - r.top)  / r.height - 0.5;
      var tX = -(y * strength);
      var tY =  (x * strength);
      card.style.transition = 'transform 0.08s ease';
      card.style.transform  = 'perspective(700px) rotateX(' + tX + 'deg) rotateY(' + tY + 'deg) scale3d(1.04,1.04,1.04)';
      card.style.boxShadow  = (-tY * 1.5) + 'px ' + (tX * 1.5) + 'px 28px rgba(123,79,30,0.20)';
      var shine = card.querySelector('.tilt-glare');
      if (shine) {
        var angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
        shine.style.opacity = Math.sqrt(x * x + y * y) * 0.45;
        shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 75%)';
      }
    });

    card.addEventListener('mouseleave', function () {
      card.style.transition = 'transform 0.5s cubic-bezier(.03,.98,.52,.99), box-shadow 0.4s ease';
      card.style.transform  = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      card.style.boxShadow  = '';
      var shine = card.querySelector('.tilt-glare');
      if (shine) shine.style.opacity = 0;
    });
  }

  document.querySelectorAll('[data-tilt]').forEach(initTilt);
})();
