let menuBtn = document.querySelector('.header-menu-btn');
let navDiv = document.querySelector('.header-nav-container')
menuBtn.addEventListener('click', ()=>{
     navDiv.classList.toggle('show-nav');
     menuBtn.classList.toggle('header-menu-icon');
     menuBtn.classList.toggle('header-menu-drop');
     if(navDiv.style.maxHeight){
          navDiv.style.maxHeight = null;
      } else{
          navDiv.style.maxHeight = navDiv.scrollHeight-5 + "px";
      }
})

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('progressAnimation');
      }
    });
  });
  
  const progressDiv = document.querySelectorAll('.progress');

  // Loop over the elements and add each one to the observer
  progressDiv.forEach((element) => observer.observe(element));


  document.addEventListener('DOMContentLoaded', function() {
    const linkedElements = document.querySelectorAll('.linked');
  
    linkedElements.forEach(function(linked) {
      const overlay = linked.querySelector('.linked-overlay');
  
      const resetOverlay = () => {
        overlay.style.transform = ''; // Reverts to original state
      };
  
      linked.addEventListener('touchstart', function() {
        overlay.style.transform = 'scale(1)';
      });
  
      linked.addEventListener('touchend', resetOverlay);
      linked.addEventListener('touchcancel', resetOverlay); // Handles long press or other interruptions
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });
});