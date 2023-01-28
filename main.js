//Change Navbar style while scrolling
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 100);
})


//Faqs 

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon 

        const icon = faq.querySelector(".faq-icon i");
        if(icon.className ==='uil uil-plus-circle'){
            icon.className ='uil uil-minus-circle'
        }
        else{
            icon.className = 'uil uil-plus-circle'
        }
    })
})


//Navbar - Responsiveness // show or hide

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener("click",()=>{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display="none";

})

//close nav bar 

const closeNav = ()=>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display="inline-block";
}

closeBtn.addEventListener('click', closeNav);
