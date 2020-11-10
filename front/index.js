const preview =[
    {
        img: './static/img/Boston1-removebg-preview.png',
        h1:'Boston Dynamics',
        h2:'Changing your idea of what robots can do',
        link: 'spot.html'
        },
    {
    img: 'https://www.bostondynamics.com/sites/default/files/2019-09/spot-sm.png',
    h1:'SPOT',
    h2: 'The mobile robot designed for sensing, inspection, and remote operation.',
    link: 'spot.html'
    },

    {
        img: 'https://www.bostondynamics.com/sites/default/files/2019-09/handle-sm.png',
        h1:'HANDLE',
        h2: 'The mobile manipulation robot for moving boxes in the warehouse.',
        link: 'handle.html'
        },

        {
            img: 'https://www.bostondynamics.com/sites/default/files/2019-09/pick-sm.png',
            h1:'PICK',
            h2: 'The vision processing solution that uses deep-learning to enable building and depalletizing of mixed-SKU pallets.',
            link: 'spot.html'
            },

            {
                img: './static/img/legacy.png',
                h1:'LEGACY',
                h2: 'The robots that built the groundwork for today&#39;s portfolio.',
                link: 'spot.html'
                },
    
    
]

let slides = document.querySelector('.preview')

const links = document.querySelector('.links')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

const navToggle = document.querySelector('.nav-toggle');


navToggle.addEventListener('click', function (){
    links.classList.toggle('show-container')
})
counter = 0;

window.addEventListener('DOMContentLoaded', function(){
  
    


nextBtn.addEventListener('click', function(){
    if(counter=== preview.length-1){
        counter = 0;
    }
    
    counter++
    let item = preview[counter]
    slides.innerHTML = `   <div class='preview-title'>
    <h1>${item.h1}</h1>
    <h2>${item.h2}</h2>
    <button class="previewBtn">
    <a href=${item.link}>MORE
                <i class="fas fa-angle-right"></i>
               </a>
  </button>
    </div>
<div class='preview-slide'>
<img src=${item.img}
alt='img'/>
</div>`
})

prevBtn.addEventListener('click', function(){
    if(counter < 0){
        counter = preview.length-1;
    }
    counter--
    let item = preview[counter]
    slides.innerHTML = `   <div class='preview-title'>
    <h1>${item.h1}</h1>
    <h2>${item.h2}</h2>
    <button class="previewBtn">
    <a href=${item.link}>MORE
                <i class="fas fa-angle-right"></i>
               </a>
  </button>
    </div>
<div class='preview-slide'>
<img src=${item.img}
alt='img'/>
</div>`
})

})

const video = document.querySelector('.video-container')
const videoBtn = document.querySelector('.videoBtn')


videoBtn.addEventListener('click', videoStop)


function videoStop(){
    videoBtn.classList.remove('video-play')
    video.pause()
   
    if(video.classList.contains('video-play')){
     video.classList.remove('video-play')
    }
    
 
 }
 
 setTimeout(videoStop, 28700);

 const questions = document.querySelectorAll('.question-box')
 

questions.forEach( question=>
    question.addEventListener('click', function(){
    const questionText = question.querySelector('.question-text')
    
    const minusIcon  = question.querySelector('.minus-icon')
    const plusIcon  = question.querySelector('.plus-icon')
   minusIcon.classList.toggle('question-open')
   plusIcon.classList.toggle('question-open')
   questionText.classList.toggle('question-open')
 })

)