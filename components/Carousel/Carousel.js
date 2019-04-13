class Carousel {
    constructor(carousel){
        this.carousel = carousel;

        // Get left and right buttons
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');

        // Select all images
        this.imgs = this.carousel.querySelectorAll('img');
        // Set first image to display:flex
        this.imgs[0].style.display = 'flex';

        // Set current index to 0
        this.currentIndex = 0;

        // Add event listeners to buttons
        this.leftButton.addEventListener('click', () => { this.clickedLeft() });
        this.rightButton.addEventListener('click', () => { this.clickedRight() });
    }

    getNextImage(index){
        // Get current index and loop around if less than 0 of greater than length
        if (index < 0)
            index = this.imgs.length - 1;
        else
        if (index >= this.imgs.length)
            index = 0;

        return index;
    }
    clickedLeft(){
        // current image display none then display next image and add animation class to animate
        this.imgs[this.currentIndex].style.display = 'none';
        this.imgs[this.currentIndex].className = '';
        this.currentIndex = this.getNextImage(--this.currentIndex);
        this.imgs[this.currentIndex].style.display = 'block'; 
        this.imgs[this.currentIndex].classList.add('left-animate');
    }

    clickedRight(){
        // current image display none then display next image and add animation class to animate
        this.imgs[this.currentIndex].style.display = 'none';
        this.imgs[this.currentIndex].className = '';
        this.currentIndex = this.getNextImage(++this.currentIndex);
        this.imgs[this.currentIndex].style.display = 'block'; 
        this.imgs[this.currentIndex].classList.add('right-animate');
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

