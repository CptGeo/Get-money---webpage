<<<<<<< HEAD
var cards = document.querySelectorAll('.cards__space');
var videos = document.querySelectorAll('.background__video');



cards.forEach(item=>{
    item.addEventListener('mouseenter',(e)=>{
            var index = parseInt(e.target.dataset.item);
            var video=videos[index-1];
            video.load();
            video.play();
            video.style.opacity="1";
    })
    item.addEventListener('mouseleave',(e)=>{
            var index = parseInt(e.target.dataset.item);
            var video=videos[index-1];
            video.style.opacity="0";
    })
})


=======
var cards = document.querySelectorAll('.cards__space');
var videos = document.querySelectorAll('.background__video');



cards.forEach(item=>{
    item.addEventListener('mouseenter',(e)=>{
        if(e.target.dataset.item){
            var index = parseInt(e.target.dataset.item);
            var video=videos[index-1];
            video.load();
            video.play();
            video.style.opacity="1";
        }
    })
    item.addEventListener('mouseleave',(e)=>{
        if(e.target.dataset.item){
            var index = parseInt(e.target.dataset.item);
            var video=videos[index-1];
            video.style.opacity="0";
        }
    })
})


>>>>>>> 4519e2d8e12a86db941caf5a0ec7ebc8e4966346
