console.log(window.innerWidth);

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;

    console.log(scrolled);

    if (scrolled >= 530) {
        const title = document.getElementById('title');

        title.style.animation = 'example 5s linear 2s infinite alternate';
    }

});

const toggleBtn = document.getElementById('toggle');
const toggleBar = document.getElementById('toggleBar');
const toggleBarCss = window.getComputedStyle(toggleBar);

toggleBtn.addEventListener('click', function() {
    const display = toggleBarCss.display;

    if(display == "none") {
        toggleBar.style.display = 'block';
    } else {
        toggleBar.style.display = 'none';
    }
});
