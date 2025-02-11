window.addEventListener('load', function () {
    const isValentines = new Date().getMonth() === 1 && new Date().getDate() === 14;
    const bgColor = isValentines ? '#b61924' : (localStorage.getItem('backgroundColor') || '#000');

    document.body.style.backgroundColor = bgColor;
});
