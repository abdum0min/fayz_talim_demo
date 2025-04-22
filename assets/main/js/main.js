window.addEventListener('DOMContentLoaded', ()=>{
  function initializeCarousel(trackSelector, prevButtonSelector, nextButtonSelector) {
      const track = document.querySelector(trackSelector);
      const slides = Array.from(track.children);
      const prevButton = document.querySelector(prevButtonSelector);
      const nextButton = document.querySelector(nextButtonSelector);
    
      let currentIndex = 0;
    
      function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      });
    
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      });
    
      window.addEventListener('resize', updateCarousel);
    
      updateCarousel();
    }
    
    initializeCarousel('.carousel_track_t', '#PrevBtn', '#NextBtn');
})

  