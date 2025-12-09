let showMenu=false;
let showForm=false;

const menu=document.querySelector('.menuButton');
const menuDiv=document.querySelector('.menu');
const closeMenu=document.querySelector('.closeMenu');
const closeMenu2=document.querySelector('.navigations')


menu.addEventListener('click', function(){
    showMenu=true;
    displayMenu()
})
closeMenu.addEventListener('click' ,()=> {
    showMenu=false
    displayMenu()
})
 function displayMenu(){
   if(showMenu){
    menuDiv.classList.add('showMenu');
    document.body.style.overflow='hidden'
     }else{
        menuDiv.classList.remove('showMenu')
        document.body.style.overflow='auto'
     }
 }

 closeMenu2.addEventListener('click', function(){
    showMenu=false
   displayMenu()
 })

//  Form animation
const galaxy=document.querySelector('.galaxy');
function shadowValues(color){
let shadowValue='';

for(let i=0; i<20; i++){
   const x=Math.floor(Math.random() * window.innerWidth)
   const y=Math.floor(Math.random() * window.innerHeight)
   console.log(x)
   shadowValue+=`${x}px ${y}px ${color},`
}

return shadowValue.slice(0,-1)
}
 const stars=shadowValues('#fff')
   galaxy.style.boxShadow=`${stars}`
   galaxy.style.setProperty('--box-shadow', `${stars}` )

  //  Form Show and Hide
  const formButton=document.querySelector('.formButton');
  const form=document.querySelector('.form-mobile');
const formOverlay=document.querySelector('.formOverlay');
  formButton.addEventListener('click',()=>{
      showForm=true;
      toggleForm()
  })
  formOverlay.addEventListener('click',()=>{
    showForm=false;
    toggleForm()
    formOverlay.style.display='none'
  })

  function toggleForm(){
    if(showForm){
      form.classList.add('showForm')
      formOverlay.style.display='block';
       document.body.style.overflow='hidden'
    }else{
       form.classList.remove('showForm')
        document.body.style.overflow='auto'
    }
  }
