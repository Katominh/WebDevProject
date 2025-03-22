// By Edilson
// Add scrolling feature
let lastScrollY = 0;
const topNav = document.getElementsByClassName('topNav')[0];
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // show show if scroll up
    if (currentScrollY > lastScrollY) {
        console.log('scrollDown');
        topNav.classList.remove('show');
    } else if (currentScrollY == 0) {
        console.log('start');
        topNav.classList.remove('show');
    } 
    else {
        console.log('scrollUp');
        topNav.classList.add('show');
    }
    lastScrollY = currentScrollY;
});

// hide <nav> after 3 seconds
let timeout; 
function resetTimer() {
    clearTimeout(timeout); 
    timeout = setTimeout(() => {
        document.getElementsByClassName("topNav")[0].classList.remove('show');
    }, 3000);
}

// Detect user activity and reset timer
window.onload = resetTimer;
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
document.addEventListener("touchstart", resetTimer);