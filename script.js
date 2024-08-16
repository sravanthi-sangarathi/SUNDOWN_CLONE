
let a = document.querySelectorAll('#boxes')
a.forEach(box => {
    box.addEventListener('mouseenter', function() {
        const fixedImage = document.getElementById('fixed-image');
        fixedImage.style.display = 'block';
        var image = box.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`;
    });

    box.addEventListener('mouseleave', function() {
        const fixedImage = document.getElementById('fixed-image');
        fixedImage.style.display = 'none';
    });
});
