let showMenu=false;

const menu=document.querySelector('.menuButton')
const menuDiv=document.querySelector('.menu')
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
    menuDiv.classList.add('showMenu')
     }else{
        menuDiv.classList.remove('showMenu')
     }
 }
 closeMenu2.addEventListener('click', function(){
    showMenu=false
   displayMenu()
 })
