let manueBtn = document.querySelector('.manue-res-btn');
let showManue = document.querySelector('.nav-main');
let cancel=document.querySelector('.fa-xmark')

manueBtn.addEventListener('click', () => {
  showManue.style.display = "block"
 

});
cancel.addEventListener('click', () => {
  showManue.style.display = 'none';
});
