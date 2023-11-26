/****** select elements *******/
const toggleBtn= document.querySelector('.toggleBtn');
const container= document.querySelector('.low-header');
const links = document.querySelectorAll('a');
const linksContainer = document.querySelector('.list');
const drop=document.querySelector('.drop');
const dropDown = document.querySelector('.dropdown');
const header = document.querySelector('header');
const topLink=document.querySelector('.top');
const outerMenu= document.querySelector('.outerMenu');
const innerMenu=document.querySelector('.innerMenu');
const carousels=document.querySelectorAll('.carousel');
const nextBtn=document.querySelector('.nextBtn');
const prevBtn=document.querySelector('.prevBtn');
const dropAngles= document.querySelector('.dropAngles');
const windows=document.querySelectorAll('.inner section');
const ltBtn=document.querySelector('.lt');
const gtBtn=document.querySelector('.gt');
/********* Event Listeners ********/
toggleBtn.addEventListener('click',showLinks);
drop.addEventListener('click',dropCollapse);
window.addEventListener('scroll',scrollEffectF);
topLink.addEventListener('click',scrollTop);
window.addEventListener('DOMContentLoaded',displayCarousels);
window.addEventListener('DOMContentLoaded',displayWindows)
nextBtn.addEventListener('click',goNext)
prevBtn.addEventListener('click',goPrev);
gtBtn.addEventListener('click',nextWindow);
//ltBtn.addEventListener('click',prevWindow);
//prevent links default behaviour;
links.forEach(function(link){
 link.addEventListener('click',linksBehaviour);
})



/********    Functions     *********/
//counting the height of the links container;
const linksContainerHeight = linksContainer.getBoundingClientRect().height;
console.log(linksContainerHeight)
//show links ;
function showLinks(e){
 containerHeight=container.getBoundingClientRect().height;
 const faBars= toggleBtn.firstElementChild;
 if(containerHeight===0){
 container.style.height=linksContainerHeight;
faBars.style.display='none';
faBars.nextElementSibling.style.display='block';
faBars.style.transform=`rotate(180deg)`
 }else{
  container.style.height=0;
  outerMenu.style.height=0;
  faBars.style.display='block';
faBars.nextElementSibling.style.display='none'
 }
}
//links behaviour;
function linksBehaviour(e){
 e.preventDefault();
}

//drop down collapse; 
function dropCollapse(){
 const innerHeight=innerMenu.getBoundingClientRect().height;
 const outerHeight=outerMenu.getBoundingClientRect().height;
 const listHeight=linksContainer.getBoundingClientRect().height;
 if(outerHeight===0){
 outerMenu.style.height=innerHeight;
container.style.height=listHeight+innerHeight;
dropAngles.style.transform=`rotate(180deg)`
 }else{
  outerMenu.style.height=0;
  container.style.height=listHeight-innerHeight;
  dropAngles.style.transform=`rotate(0deg)`
 }
 
}

//fixed header;
function scrollEffectF(){
 const windowLevel=window.pageYOffset
 const headerHeight=header.getBoundingClientRect().height;
 if(windowLevel>headerHeight){
  header.classList.add('fixedHeader')
 }else{
  header.classList.remove('fixedHeader')
 }
 if(windowLevel>=400){
  topLink.classList.add('showTopLink')
 }else{
  topLink.classList.remove('showTopLink')
 }
}

//scroll to top;
function scrollTop(){
 window.scrollTo({top:0,left:0,behavior:'smooth'})
};

//display carousels when DOM loads;
function displayCarousels(){
 carousels.forEach(function(carousel,index){
  carousel.style.left=`${index*100}%`
 })
 prevBtn.style.display='none'
};

//scroll to next carousel;
let counter =0;
function goNext(){
 counter++;
 carousels.forEach(function(carousel,index){
  if(counter===carousels.length-1){
   nextBtn.style.display='none'
   prevBtn.style.display='block'
  }
  carousel.style.transform=`translateX(-${counter*100}%)`
 });
}

//scroll to previous carousel;
function goPrev(){
 counter--;
 carousels.forEach(function(carousel,index){
  if(counter===0){
   prevBtn.style.display='none'
   nextBtn.style.display='block'
  }
  carousel.style.transform=`translateX(-${counter*100}%)`
 });
};

// window functions;
//setting left property for every window;
function displayWindows(){
 windows.forEach(function(window,index){
  window.style.left=`${index*100}%`
 });
}


//counter-index