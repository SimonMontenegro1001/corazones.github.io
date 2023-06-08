function createHeart(x, y) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1000);
}

document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    createHeart(x, y);
});

document.addEventListener('touchmove', function (e) {
    let touch = e.touches[0];
    let x = touch.clientX;
    let y = touch.clientY;
    createHeart(x, y);
});
