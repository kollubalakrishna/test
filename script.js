 function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const toggleBtn = document.getElementById('toggleBtn');
    nav.classList.toggle('active');
    toggleBtn.textContent = nav.classList.contains('active') ? '✕' : '☰';
  }


    function filterGallery(category) {
    const buttons = document.querySelectorAll(".filter-btns button");
    const items = document.querySelectorAll(".gallery-item");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    items.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }


   let slideIndex = 0;

  function moveSlide(direction) {
    const slider = document.getElementById('testimonialSlider');
    const cards = slider.querySelectorAll('.testimonial-card');
    const isMobile = window.innerWidth < 768;
    const cardsPerView = isMobile ? 1 : 3;

    const cardWidth = cards[0].offsetWidth + 20;
    const maxIndex = cards.length - cardsPerView;

    slideIndex += direction;

    if (slideIndex < 0) slideIndex = 0;
    if (slideIndex > maxIndex) slideIndex = maxIndex;

    slider.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
  }


const accordions = document.querySelectorAll('.accordion-title');

  accordions.forEach(title => {
    title.addEventListener('click', () => {
      const item = title.parentElement;

      // Close all others
      document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
          i.querySelector('.symbol').textContent = '+';
        }
      });

      // Toggle current
      const symbol = title.querySelector('.symbol');
      item.classList.toggle('active');
      symbol.textContent = item.classList.contains('active') ? '-' : '+';
    });
  });