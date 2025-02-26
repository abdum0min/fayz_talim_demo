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
  
  // Birinchi karuselni ishga tushirish
  // initializeCarousel('.carousel_track', '#prevBtn', '#nextBtn');
  
  // Ikkinchi karuselni ishga tushirish
  initializeCarousel('.carousel_track_t', '#PrevBtn', '#NextBtn');
  


  // nav sm
const modal = document.querySelector('.nv-modal')
const menu = document.querySelector('.menu')
const x = document.querySelector('.x')


menu.addEventListener('click' , ()=>{
    modal.style.display = 'block'
})
x.addEventListener('click' , ()=>{
    modal.style.display = 'none'
})