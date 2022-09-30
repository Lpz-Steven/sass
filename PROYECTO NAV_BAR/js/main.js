const headerToggle= document.getElementById('header-toggle'),
      main=document.getElementById('main'),
      navClose=document.getElementById('nav-close')

if (headerToggle){
    headerToggle.addEventListener('click', () => {
        main.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        main.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction =() =>{
    const main =document.getElementById('main')
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const scrollHeader = () => {
    const header = document.getElementById ('header')
    this.scrollY >=50 ? header.classList.add('scrollHeader')
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    console.scrollY =window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId =current.getAttribute('id'),
              sectionClass=document.querySelector('.nav__menu a [href*=' + sectionId + ']')

    if (scroollY > sectionTop && scrollY <= screenTop + sectionHeight){
        sectionClass.classList.add('active-link')
    }
    else {
        sectionClass.classList.remove('active-link')
    }
    })
}
window.addEventListener('scroll', scrollActive)