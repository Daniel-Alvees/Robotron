const btnOn =  document.querySelector('[data-mostra]');
const btnOff =  document.querySelector('[data-esconde]');



btnOff.addEventListener('click', () => {
  const container = document.querySelector('[data-onOff]').style.display = "none";
});

btnOn.addEventListener('click', () => {
  const container = document.querySelector('[data-onOff]').style.display = "block";
});








