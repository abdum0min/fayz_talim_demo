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

  function openModal(modalContentSelector, modalSelector,){
    const modalContent = document.querySelector(modalContentSelector),
        modal = document.querySelector(modalSelector)
    modal.classList.remove('hide')
    modal.classList.add('show')
    document.body.style.overflow = "hidden"
    modalContent.classList.add('modal_fade')
  }

  function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector)
    modal.classList.remove('show')
    modal.classList.add('hide')
    document.body.style.overflowY = 'scroll'
  }

  function modal(btnSelector, modalSelector, modalContentSelector){
    // Modal
    const modalOpenBtn = document.querySelectorAll(btnSelector),
        modal = document.querySelector(modalSelector)
        

    
    modalOpenBtn.forEach(item=>{
        item.addEventListener('click',()=> openModal(modalContentSelector,modalSelector))
    })


    modal.addEventListener('click', (event)=>{
        if(event.target === modal || event.target.getAttribute('data-modal-close') === ''){
            closeModal(modalSelector)
        }
    })

    document.addEventListener("keydown", (event)=>{
        if(event.code === 'Escape' && modal.classList.contains('show') ){
            closeModal(modalSelector)
        }
    })
  }
  modal('[data-modal]', '.modal', '.modal__content' )
})

  