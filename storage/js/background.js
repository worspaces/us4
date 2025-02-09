window.addEventListener('load', function() {
    document.body.style.backgroundImage = 'none';
    const storedBackgroundImage = localStorage.getItem('backgroundImage');
    if (storedBackgroundImage) {
        document.body.style.backgroundImage = `url("${storedBackgroundImage}")`;
    }
    document.body.style.backgroundColor = localStorage.getItem('backgroundColor') || '#000';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
});
