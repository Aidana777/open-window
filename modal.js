const openmodal=document.getElementById('open');
const modal_container=document.getElementById('modal-container');
const closeme=document.getElementById('close_mood');

openmodal.addEventListener ('click', ()=>{
    modal_container.classList.add('show')
    modal_container.style.display= "block"
  });
closeme.addEventListener ('click',() =>{
    modal_container.classList.add('show')
    modal_container.style.display= "none"
  });