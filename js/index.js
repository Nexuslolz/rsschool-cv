//add open animation to burger button

const toggler = document.querySelector('.main-nav__wrapper')
const togglerBtn = document.querySelector('.main-nav__toggle')
const listOpen = document.querySelector('.main-nav__list')

toggler.addEventListener('click', function(){
    if (listOpen.classList.contains('main-nav__list_open')) {
        listOpen.classList.remove('main-nav__list_open');
        listOpen.classList.add('main-nav__list_close');
        togglerBtn.classList.remove('main-nav__toggle_open')
      }
        else {
            listOpen.classList.remove('main-nav__list_close');
            listOpen.classList.add('main-nav__list_open');
            togglerBtn.classList.add('main-nav__toggle_open')

        }
      });

const closeLink = document.querySelectorAll('.site-list__item')
const closeOverlay = document.querySelector('.page-main')

//add close animation to burger button

closeLink.forEach(elem => 
elem.addEventListener('click', function(){
  if (listOpen.classList.contains('main-nav__list_open')) {
    listOpen.classList.remove('main-nav__list_open');
    listOpen.classList.add('main-nav__list_close');
    togglerBtn.classList.remove('main-nav__toggle_open')
  }
}
))
closeOverlay.addEventListener('click', function(){
  if (listOpen.classList.contains('main-nav__list_open')) {
    listOpen.classList.remove('main-nav__list_open');
    listOpen.classList.add('main-nav__list_close');
    togglerBtn.classList.remove('main-nav__toggle_open')
  }
})

//add animation for skills

const elemHtml = document.querySelector('.html')
const elemCss = document.querySelector('.css')
const elemSass = document.querySelector('.sass')
const elemJs = document.querySelector('.js')
const elemGit = document.querySelector('.git')
const elemFigma = document.querySelector('.figma')
const idHtml = document.getElementById('#html')
const idCss = document.getElementById('#css')
const idSass = document.getElementById('#sass')
const idJs = document.getElementById('#js')
const idGit = document.getElementById('#git')
const idFigma = document.getElementById('#figma')


let openAnimation = function(){
  if( window.pageYOffset<460){
  idHtml.classList.remove('html')
   } else {
  idHtml.classList.add('html')
}
if( window.pageYOffset<460){
  idCss.classList.remove('css')
   } else {
  idCss.classList.add('css')
}
if( window.pageYOffset<460){
  idSass.classList.remove('sass')
   } else {
  idSass.classList.add('sass')
}
if( window.pageYOffset<460){
  idJs.classList.remove('js')
   } else {
  idJs.classList.add('js')
}
if( window.pageYOffset<460){
  idGit.classList.remove('git')
   } else {
  idGit.classList.add('git')
}
if( window.pageYOffset<460){
  idFigma.classList.remove('figma')
   } else {
  idFigma.classList.add('figma')
}
}
setInterval(openAnimation,1)