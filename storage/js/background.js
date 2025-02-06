window.onload = function() {
    var storedColor = localStorage.getItem('backgroundColor') || '#000';
    document.body.style.backgroundColor = storedColor;
    var colorPicker = document.getElementById('colorPicker');
    if (colorPicker) {
        colorPicker.value = storedColor;
    }
};

function changeBackgroundColor() {
    var color = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}
