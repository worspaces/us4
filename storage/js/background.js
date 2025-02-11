function isPresidentsDay() {
    const today = new Date();
    if (today.getMonth() !== 1) return false; // Not feb

    const day = today.getDate();
    const firstDay = new Date(today.getFullYear(), 1, 1).getDay(); // First day of feb
    const thirdMonday = firstDay === 0 ? 16 : 23 - firstDay; // third Monday

    return day === thirdMonday;
}

const today = new Date();
const isValentines = today.getMonth() === 1 && today.getDate() === 14;
const isPresidents = isPresidentsDay();

window.addEventListener('load', function () {
    const bgColor = isValentines ? '#b61924' : isPresidents ? '#001f3f' : (localStorage.getItem('backgroundColor') || '#000');
    document.body.style.backgroundColor = bgColor;
});
