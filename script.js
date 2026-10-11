const dialog = document.querySelector('#lightbox');
const expandedImage = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
let previousFocus;
document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    previousFocus = button;
    const image = button.querySelector('img');
    expandedImage.src = button.dataset.photo;
    expandedImage.alt = image.alt;
    caption.textContent = image.alt;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
});
document.querySelector('.close-lightbox').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  previousFocus?.focus({preventScroll:true});
});
