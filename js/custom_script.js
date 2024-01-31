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
}

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
        if (index !== 0) {
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
            // Get the filename of the current image
            const filename = getFilenameFromSrc(galleryPics[currentIndex].src);
            updateSectionTitle(filename);
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
                    // Get the filename of the current image
                    const filename = getFilenameFromSrc(img.src);
                    updateSectionTitle(filename);
                } else {
                    img.style.opacity = 0;
                }
            });
        }, 150);

        document.addEventListener('mousemove', handleMouseMove);
    }

    // Function to extract filename from image source
    const getFilenameFromSrc = (src) => {
        const parts = src.split('/');
        let filenameWithExtension = parts[parts.length - 1];
        // Remove file extension
        const filename = filenameWithExtension.replace(/\.[^/.]+$/, '');

        // Replace "-" with whitespace
        const filenameWithoutHyphens = filename.replace(/-/g, ' ');

        // Remove numbers
        const finalFilename = filenameWithoutHyphens.replace(/\d+/g, '');

        return finalFilename;
    };

// Function to update the section title with only the first letter of each word in uppercase
    const updateSectionTitle = (filename) => {
        const sectionTitle = document.querySelector('.section-title-categories .section-title h5');
        if (sectionTitle) {
            const formattedFilename = filename.toLowerCase().replace(/\b\w/g, (char) => {
                return char.toUpperCase();
            });
            sectionTitle.textContent = formattedFilename;
        }
    };
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

jQuery(document).ready(function ($) {

    function updateAjaxContentWrap() {
        var ajaxContentWrap = $('#ajax-content-wrap');
        var mobileIcon = $('.slide-out-widget-area-toggle.mobile-icon.simple > div > a');
        setTimeout(function() {
            var isClosed = mobileIcon.hasClass('closed');
            var isMenuPushOut = mobileIcon.hasClass('menu-push-out');
            var isAtTop = $(window).scrollTop() === 0;
            if (isAtTop) {
                if (isClosed) {
                    ajaxContentWrap.css('margin-top', '0');
                } else if (isMenuPushOut) {
                    ajaxContentWrap.css('margin-top', '140px');                
                }
            } else {
                ajaxContentWrap.css('margin-top', '0');
            }
        }, 50); 
    }
    $('.slide-out-widget-area-toggle.mobile-icon.simple > div > a').on('click', updateAjaxContentWrap);
    $(window).on('scroll', updateAjaxContentWrap);

// Mouse handling for .case-card and .service-card div
$('.case-card, .service-card div').on('mouseenter', function () {
    const $popup = $(this).find('.popup-hover');
    $popup.addClass('show-popup');
    $('body').addClass('no-overflow');
});

$('.case-card, .service-card div').on('mousemove', function (e) {
    const $popup = $(this).find('.popup-hover');
    const offsetX = -($popup.width() / 2) - 50;
    const offsetY = 10;

    const x = Math.min(e.pageX - $(this).offset().left + offsetX, $(this).width() - $popup.width());
    const y = e.pageY - $(this).offset().top + offsetY;

    const middleX = x + $popup.width() / 2;
    const bottomY = y + $popup.height();

    $popup.css({
        left: `${middleX}px`,
        top: `${bottomY}px`
    });
});

$('.case-card, .service-card div').on('mouseleave', function () {
    const $popup = $(this).find('.popup-hover');
    $popup.removeClass('show-popup');
    $('body').removeClass('no-overflow');
});


// Handling for .copyMe hover and click events
$('.copyMe').on('mouseenter', function () {
    const $popup = $(this).find('.popup-hover');
    $popup.addClass('show-popup');
    $('body').addClass('no-overflow');
}).on('mousemove', function (e) {
    const $popup = $(this).find('.popup-hover');
    const offsetX = -($popup.width() / 2) - 50;
    const offsetY = 10;

    const x = Math.min(e.pageX - $(this).offset().left + offsetX, $(this).width() - $popup.width());
    const y = e.pageY - $(this).offset().top + offsetY;

    const middleX = x + $popup.width() / 2;
    const bottomY = y + $popup.height();

    $popup.css({
        left: `${middleX}px`,
        top: `${bottomY}px`
    });
}).on('mouseleave', function () {
    const $popup = $(this).find('.popup-hover');
    $popup.removeClass('show-popup');
    $('body').removeClass('no-overflow');
});

// Handling for .copyMe click event
$('.copyMe').on('click', function () {
    var textToCopy = $(this).find('.copyContainer').text();
    var $tempTextarea = $('<textarea>');
    $('body').append($tempTextarea);
    $tempTextarea.val(textToCopy).select();
    document.execCommand('copy');
    $tempTextarea.remove();

    var copyPopup = $(this).find('.popup-hover');
    var originalText = copyPopup.text();

    copyPopup.text('Copied to clipboard');

    setTimeout(function () {
        copyPopup.text(originalText); // Reset the text back to the original
        copyPopup.removeClass('show-popup'); // Ensure the popup is not shown after timeout
    }, 1000);
});



const animatedCards = $('.case-card, .service-card, .scenario-card');
const customOffset = 50; // Adjust this value as needed

function isInViewport(element, offset) {
    const rect = element[0].getBoundingClientRect();
    return (
        rect.top >= -offset &&
        rect.top <= ($(window).height() || document.documentElement.clientHeight) + offset
    );
}

function handleScroll() {
    animatedCards.each(function() {
        const animatedCard = $(this);
        if (isInViewport(animatedCard, customOffset) && !animatedCard.hasClass('animated')) {
            animatedCard.addClass('animated');
            animatedCard.css({ opacity: 1, transform: 'translateY(0)' });
        }
    });
}

$(window).on('scroll', handleScroll);
handleScroll(); // Check on page load


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