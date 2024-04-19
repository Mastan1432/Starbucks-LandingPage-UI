   /*let slideIndex = 0;
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
*/



    document.addEventListener('DOMContentLoaded', function() {
        const fifthCoffe = document.querySelector('.coffe_slider .coffes:nth-child(5)');

        // Add 'active' class to the fifth .coffes div
        fifthCoffe.classList.add('active');
    });