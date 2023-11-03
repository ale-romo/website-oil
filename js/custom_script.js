

// Throttle and debouce for galleries

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Galleries

const setGalleryUp = (galleryId) => {
    const gallery = document.querySelector(`.${galleryId}`);
    const galleryPics = gallery.querySelectorAll('img');
    let newGallery = document.createElement("div");
    newGallery.classList.add(galleryId);
    gallery.parentNode.replaceChild(newGallery, gallery);

    let currentIndex = 0; // Track the current visible image

    // Appending galleryPics to newGallery
    galleryPics.forEach((pic, index) => {
        pic.classList = [];
        if(index !== 0) {
            if (galleryId === 'flick-gallery') {
                pic.style.display = 'none';  // Hide all images except the first one
            } else if (galleryId === 'fade-gallery') {
                pic.style.opacity = 0; // initially set all images to be invisible
                pic.style.transition = 'opacity 0.3s'; // CSS fade transition
            }
        }

        newGallery.appendChild(pic);
    });

    if (galleryId === 'flick-gallery') {
        const flickerImage = () => {
            galleryPics[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % galleryPics.length;
            galleryPics[currentIndex].style.display = 'block';
        }

        // Throttle the scroll event to run once every 300 milliseconds
        window.addEventListener('scroll', throttle(flickerImage, 150));
    } else if (galleryId === 'fade-gallery') {
        const handleMouseMove = throttle((event) => {
            const xPosition = event.clientX;
            const windowWidth = window.innerWidth;
            const imgToShow = Math.floor((xPosition / windowWidth) * galleryPics.length);

            galleryPics.forEach((img, index) => {
                if (index === imgToShow) {
                    img.style.opacity = 1;
                } else {
                    img.style.opacity = 0;
                }
            });
        }, 150);

        document.addEventListener('mousemove', handleMouseMove);
    }

}

// Card container counters

const displayCounter = (cardType) => {
    const container = document.querySelector(`.${cardType}-container .vc_column-inner`);
    const cards = container.querySelectorAll(`.${cardType}`);

    // Create display element
    const display = document.createElement('div');
    const displayInner = document.createElement('div');
    const scrollBar = document.createElement('span');
    display.appendChild(displayInner);
    display.classList.add('cardCounter');  // Optional: Add a class for styling
    displayInner.innerText = `1    /    ${cards.length}`;  // Initialize with the starting text
    displayInner.appendChild(scrollBar);
    container.parentNode.appendChild(display);

    const handleScroll = throttle(() => {
        const cardWidth = cards[0].offsetWidth;
        const cardIndex = Math.round(container.scrollLeft / cardWidth);

        const proportion = cardIndex / (cards.length - 1);
        const leftPosition = proportion * 67;

        displayInner.innerText = `${cardIndex + 1}    /    ${cards.length}`;
        scrollBar.style.setProperty('left', `${leftPosition}%`);
        displayInner.appendChild(scrollBar);
    }, 300);

    container.addEventListener('scroll', handleScroll);
}

// Animate logo on scroll
const animateLogo = () => {
    const logo = document.querySelector("#logo");
    // Define a scroll threshold, for example 200px
    const threshold = 200;

    if (window.scrollY > threshold) {
        // If we've scrolled more than the threshold, rotate the logo
        logo.style.transition = 'transform .25s ease-in';
        logo.style.transform = 'rotate(-90deg)'; // Adjust the rotation degree as needed
    } else {
        // If we're back above the threshold, reset the logo rotation
        logo.style.transform = 'rotate(0deg)';
    }
};

jQuery(document).ready(function () {
    if(document.querySelector("#logo")) {
        window.addEventListener('scroll', throttle(animateLogo, 150));
    }
    if (document.querySelector('.flick-gallery')) {
        setGalleryUp('flick-gallery');
    }
    if (document.querySelector('.fade-gallery')) {
        setGalleryUp('fade-gallery');
    }
    if (document.querySelector('.service-card') && window.innerWidth < 1000) {
        displayCounter('service-card');
    }
    if (document.querySelector('.scenario-card') && window.innerWidth < 1000) {
        displayCounter('scenario-card');
    }
});
