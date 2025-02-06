window.onload = function() {
    var storedColor = localStorage.getItem('backgroundColor') || '#000';
    document.body.style.backgroundColor = storedColor;
    var colorPicker = document.getElementById('colorPicker');
    if (colorPicker) {
        colorPicker.value = storedColor;
    }
};
