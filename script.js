setTimeout(() => {
  document
    .querySelector('spline-viewer')
    ?.shadowRoot?.querySelector('#logo')
    ?.remove();
}, 10);

document.getElementById('nav-icon1').addEventListener('click', function () {
  this.classList.toggle('open');
  document.querySelector('.nav-block').classList.toggle('!flex');
});
