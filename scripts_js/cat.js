document.addEventListener("DOMContentLoaded", function () {
    var cat = document.getElementById('cat');
    var catWidth = 50;
    var leftIndentation = 0;
    var rightIndentation = 90;  
    var appearanceDuration = 6100;
    var disappearanceInterval = 35000;

    function getRandomYPosition() {
        var screenHeight = window.innerHeight - 50;
        var randomY = Math.floor(Math.random() * screenHeight);
        return randomY;
    }

    function updateCatPosition() {
        var randomSide = Math.random() < 0.5 ? 'left' : 'right';
        var screenWidth = window.innerWidth - 50;

        if (randomSide === 'left') {
            cat.style.left = leftIndentation + 'px';
        } else {
            cat.style.left = (screenWidth - catWidth - rightIndentation) + 'px';
        }

        var randomY = getRandomYPosition();
        cat.style.top = randomY + 'px';

        setTimeout(function () {
            cat.style.display = 'none';
            setTimeout(function () {
                cat.style.display = 'block';
            }, disappearanceInterval);
        }, appearanceDuration);
    }

    updateCatPosition();

    setInterval(updateCatPosition, appearanceDuration + disappearanceInterval);
});

