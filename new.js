// now we try to made a scroll event. when window is scrooling then the circle 
// is rounded some deg 

//  firstly we do when out scrooling gettting down 300 px then the ciecle doing work.
// we need get 3 height first one is window h. **secound one is total sie h. third one is ** how much done scroll
// for getting how much is done scrooling . we need this formula (100/total height) * scrolling er top to bottom 
//  we use scroll event listener to get the scroll position of the window.
let body = document.querySelector('body');
// at lst we catch total height = 100 (but total height is (total height - present window height) becase when we reach lst section in this site site that means we reach bottom this site.so some height is stay in window.so we - it. 
let scrollshow = document.querySelector('.scroll');
let scrolinner = document.querySelector('.sub');

window.addEventListener('scroll', function(){
    if(window.scrollY > 300){
        let totalheight = body.clientHeight; /* we get total site height*/
        let windowInnerh = window.innerHeight;
        let mainTotalh = totalheight - windowInnerh;
        let scrollPosition = window.scrollY; /* we get count scrool top to buttom position*/
        let scrollPercentage = Math.round((100 / mainTotalh) * scrollPosition) ; /* how much is done scrooling which is show our innerhtml*/
          /* we get staying window height*/
       
        scrollshow.style.background = `conic-gradient(red, red ${scrollPercentage}%, green ${scrollPercentage}%)`
        scrolinner.innerHTML  = `${scrollPercentage}%`
        
    }   
    
}) 

let nav = document.querySelector('nav');
let a = 0;
window.addEventListener('scroll', () => {
  let b = window.scrollY;
  // console.log("a: " + a + "  b : " + b);
 
  if ( a > b) {
    nav.classList.add('active');
  }else{
    nav.classList.remove('active');
  }
  a = b;
});

let goTop = document.querySelector('#circ');

a = window.scrollY;
window.addEventListener('scroll', () => {
  if(a > 300){
    goTop.classList.add('active');
  }
});