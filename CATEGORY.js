const serviceItems = document.querySelectorAll('.service');

serviceItems.forEach((item) => {
  item.addEventListener('touchstart', () => {
    item.classList.add('active');
  });

  item.addEventListener('touchend', () => {
    item.classList.remove('active');
  });
});