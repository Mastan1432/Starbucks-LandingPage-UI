   let slideIndex = 0;
    const items = document.querySelectorAll('.items');
    const dots = document.querySelectorAll('.dot');

    function showSlides() {
        // Hide all items
        items.forEach(item => item.style.display = 'none');

        // Increment slideIndex and reset to 0 if it exceeds the number of items
        slideIndex++;
        if (slideIndex >= items.length) {
            slideIndex = 0;
        }

        // Show current item and update corresponding dot
        items[slideIndex].style.display = 'flex';
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');

        // Automatically transition to next slide after 3 seconds
        setTimeout(showSlides, 3000);
    }

    // Call showSlides to start the slider
    showSlides();




document.addEventListener('DOMContentLoaded', function() {
    const fifthCoffe = document.querySelector('.coffe_slider .coffes:nth-child(5)');
    const fifthDot = document.querySelector('.dot:nth-child(5)');
    const sliderContainer = document.querySelector('.slider-container');

    // Add 'active' class to the fifth .coffes div
    fifthCoffe.classList.add('active');

    // Trigger a click event on the corresponding dot
    const clickEvent = new Event('click');
    fifthDot.dispatchEvent(clickEvent);

    // Center the active slide by default
    const containerWidth = sliderContainer.clientWidth;
    const activeSlideWidth = fifthCoffe.offsetWidth;
    const activeSlidePosition = fifthCoffe.offsetLeft;

    const scrollLeftValue = activeSlidePosition  - (containerWidth - activeSlideWidth) / 2;
    sliderContainer.scrollLeft = scrollLeftValue;
});


//displaying homepage
const landing=document.querySelector('.landing');
const homepage=document.querySelector('.homepage');
function go_to_homepage(){
    landing.style.display="none";
    homepage.style.display="block";
    const fifthCoffe = document.querySelector('.coffe_slider .coffes:nth-child(5)');
    const fifthDot = document.querySelector('.dot:nth-child(5)');
    const sliderContainer = document.querySelector('.slider-container');

    // Add 'active' class to the fifth .coffes div
    fifthCoffe.classList.add('active');

    // Trigger a click event on the corresponding dot
    const clickEvent = new Event('click');
    fifthDot.dispatchEvent(clickEvent);

    // Center the active slide by default
    const containerWidth = sliderContainer.clientWidth;
    const activeSlideWidth = fifthCoffe.offsetWidth;
    const activeSlidePosition = fifthCoffe.offsetLeft;

    const scrollLeftValue = activeSlidePosition  - (containerWidth - activeSlideWidth) / 2;
    sliderContainer.scrollLeft = scrollLeftValue;
};


//item showcaese
const coffes=document.querySelectorAll('.coffe_image');
const item_showcase=document.querySelector('.item-showcase');
coffes.forEach(coffe => {
    coffe.addEventListener('click',()=>{
        homepage.style.display="none";
        item_showcase.style.display="block";
    })
});

const backButton = document.querySelector('.back');
if (backButton) {
    backButton.addEventListener('click', go_back_to_homepage);
}

function go_back_to_homepage() {
    item_showcase.style.display = "none";
    homepage.style.display = "block";
    orderNow.style.display="none";
    item_showcase.style.backgroundColor='white';
}





//quantity changing
function increaseQuantity(){
    var quantityInput=document.querySelector("#quantity");
    quantityInput.value=parseInt(quantityInput.value)+1;
}
function decreaseQuantity(){
    var quantityInput=document.querySelector("#quantity");
    var m=parseInt(quantityInput.value);
    if(m>1){
        quantityInput.value=parseInt(quantityInput.value)-1;
    }
    
}


//size selection
const sizeContainers = document.querySelectorAll(".sc");

sizeContainers.forEach(eachSize => {
    eachSize.addEventListener('click', () => {
        sizeContainers.forEach(container => {
            container.classList.remove("size_onclick");
        });
        eachSize.classList.add("size_onclick");
    });
});



//sugarr percentage selection
const percentages=document.querySelectorAll(".percentage");

percentages.forEach(percentage=>{
    percentage.addEventListener('click',() =>{
        percentages.forEach(percent=>{
            percent.classList.remove("sugar_onclick");
        });
        percentage.classList.add("sugar_onclick");
    })
})



//order item displying on click item order
const item_order=document.querySelector(".item-order");
const orderNow =document.querySelector(".orderNow");

item_order.addEventListener('click',()=>{
    item_showcase.style.backgroundColor='rgba(255, 255, 255, 0.725)';
    orderNow.style.display='flex';
   
})
 const see_all_back=document.querySelector(".see_all_back");
const see_all=document.querySelector(".see_all");
 see_all_back.addEventListener('click',()=>{
    see_all.style.display="none";
    homepage.style.display = "block";
 })

 const see_all_link=document.querySelector(".see_all_link");
 see_all_link.addEventListener('click',(event)=>{
    event.preventDefault(); // Prevent default navigation behavior
    see_all.style.display="block";
    homepage.style.display = "none";
 })


 //liked function
 const like_div = document.querySelectorAll(".like_div");
 like_div.forEach(like_div => {
     const liked = like_div.querySelector("#liked");
     const like = like_div.querySelector("#like");
     const storageKey = `liked_state_${like_div.id}`;
 
     like_div.addEventListener('click', () => {
         if (like.style.display !== "none") {
             like.style.display = "none";
             liked.style.display = "block";
         } else {
             liked.style.display = "none";
             like.style.display = "block";
         }
     });
 });
 

 //side hamburger
const bar=document.querySelector(".bar");
const burgerContainer=document.querySelector(".burger_container");
let isBurgerOpen = false; // Flag variable to track the state

bar.addEventListener('click', () => {
    if (!isBurgerOpen) {
        burgerContainer.style.right = "0px"; // Open the burger menu
    } else {
        burgerContainer.style.right = "-300px"; // Close the burger menu
    }
    isBurgerOpen = !isBurgerOpen; // Toggle the flag
});



//login
const login=document.querySelector(".login");
const login_page=document.querySelector(".login_page");
const login_back=document.querySelector(".login_back");
login.addEventListener('click',()=>{
    homepage.style.display="none";
    login_page.style.display="flex";
})
login_back.addEventListener('click',()=>{
    homepage.style.display="block";
    login_page.style.display="none";
})




//show password
const eye=document.querySelector("#eye");
const passwordField=document.querySelector(".passwordField");

eye.addEventListener('click',()=>{
    if(passwordField.type==='password'){
        passwordField.type='text';
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
    else{
        passwordField.type='password';
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }
});

//see_all_burger
const see_all_burger_container=document.querySelector(".see_all_burger_container");
const see_all_burger=document.querySelector(".see_all_burger");
let BurgerOpen = false; // Flag variable to track the state

see_all_burger.addEventListener('click', () => {
    if (!BurgerOpen) {
        see_all_burger_container.style.right = "0px"; // Open the burger menu
    } else {
        see_all_burger_container.style.right = "-300px"; // Close the burger menu
    }
    BurgerOpen = !BurgerOpen; // Toggle the flag
});