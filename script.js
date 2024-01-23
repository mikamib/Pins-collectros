document.addEventListener('DOMContentLoaded', function() {
    var scrollImage = document.getElementById('scrollImage');
  
    window.addEventListener('scroll', function() {
      // Obtient la position de défilement de la page
      var scrollPosition = window.scrollY;
  
      // Détermine à quelle position l'image doit apparaître
      var triggerPosition = 100; // Vous pouvez ajuster cette valeur selon vos besoins
  
      // Vérifie si la position de défilement est dépassée pour faire apparaître l'image
      if (scrollPosition > triggerPosition) {
        scrollImage.style.opacity = 1;
      } else {
        scrollImage.style.opacity = 0;
      }
    });
    var scrollImage2 = document.getElementById('b');
  
    window.addEventListener('scroll', function() {
      // Obtient la position de défilement de la page
      var scrollPosition = window.scrollY;
  
      // Détermine à quelle position l'image doit apparaître
      var triggerPosition = 100; // Vous pouvez ajuster cette valeur selon vos besoins
  
      // Vérifie si la position de défilement est dépassée pour faire apparaître l'image
      if (scrollPosition > triggerPosition) {
        scrollImage2.style.opacity = 1;
      } else {
        scrollImage2.style.opacity = 0;
      }
    });
  });