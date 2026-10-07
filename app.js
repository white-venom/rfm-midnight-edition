document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const slides = document.querySelectorAll('.hero-slide');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetIdx = parseInt(tab.getAttribute('data-target'), 10);

      tabs.forEach((t) => t.classList.remove('active'));
      slides.forEach((s) => s.classList.remove('active'));

      tab.classList.add('active');
      if (slides[targetIdx]) {
        slides[targetIdx].classList.add('active');
      }
    });
  });

  // Smooth auto-rotation every 7 seconds if user does not interact
  let currentIdx = 0;
  let autoTimer = setInterval(() => {
    currentIdx = (currentIdx + 1) % slides.length;
    tabs.forEach((t) => t.classList.remove('active'));
    slides.forEach((s) => s.classList.remove('active'));

    tabs[currentIdx].classList.add('active');
    slides[currentIdx].classList.add('active');
  }, 7000);

  // Clear timer on manual click
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      clearInterval(autoTimer);
    });
  });
});
