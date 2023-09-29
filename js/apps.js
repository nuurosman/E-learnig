$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
          items: 1  
        },
        768:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
})
// parallex ///////////////
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
}); 

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=> observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=> observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=> observer.observe(el));
