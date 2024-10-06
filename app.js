let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.list');

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function() {
        if (direction === 'next') {
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, { once: true }); // Remove the event listener after it's triggered once
}

// Auto-slide functionality
setInterval(function() {
    moveSlider('next');
}, 3000); // Slide every 3 seconds
