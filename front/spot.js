const videoBtn = document.querySelector('.hero__content-btn')
const hero = document.querySelector('.modal')



videoBtn.addEventListener('click', function(){
   
    hero.innerHTML = `
    <div class='container'>
     <div class='video-bg'>
     <btn id='video-close'>
     <i class="fa fa-times" aria-hidden="true"></i>
     </btn>
     </div>
     <div class='video-container'>
     <iframe src="https://www.youtube.com/embed/wlkCQXHEgjA" frameborder="0" allow="accelerometer; 
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


const tabBtns = document.querySelectorAll('.tab-btn')
const imgs = document.querySelectorAll('.hero__details-img')

tabBtns.forEach( tabBtn =>
    tabBtn.addEventListener('click', function(e){
        tabBtns.forEach( tabBtn =>
            tabBtn.classList.remove('active')
        )
        
        tabBtn.classList.add('active')
        const id = e.target.dataset.id
        const element = document.getElementById(id)
        imgs.forEach( img =>
            img.classList.remove('active')
        )
        element.classList.add('active')
       

    })

)

