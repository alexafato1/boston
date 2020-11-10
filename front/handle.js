

const videoBtn = document.querySelector('.hero__content-btn')
const hero = document.querySelector('.modal')
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

navToggle.addEventListener('click', function (){
    links.classList.toggle('show-container')
})


videoBtn.addEventListener('click', function(){
   
    hero.innerHTML = `
    <div class='container'>
     <div class='video-bg'>
     <btn id='video-close'>
     <i class="fa fa-times" aria-hidden="true"></i>
     </btn>
     </div>
     <div class='video-container'>
     <iframe src="https://www.youtube.com/embed/5iV_hB08Uns" frameborder="0" allow="accelerometer; 
     autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
     </div>
    

     `
     const videoClose = document.getElementById('video-close')
     const videoOpen = document.querySelector('.container')

    videoClose.addEventListener('click', function(){

     hero.removeChild(videoOpen)
})
    console.log('click')
 
})