function isPresidentsDay() {
    const today = new Date();
    if (today.getMonth() !== 1) return false; // Not February

    const day = today.getDate();
    const firstDay = new Date(today.getFullYear(), 1, 1).getDay(); // First day of February
    const thirdMonday = firstDay === 0 ? 16 : 23 - firstDay; // Third Monday

    return day === thirdMonday;
}

const today = new Date();
const isValentines = today.getMonth() === 1 && today.getDate() === 14;
const isPresidents = isPresidentsDay();

window.addEventListener('load', function () {
    const bgColor = isValentines ? '#b61924' : isPresidents ? '#001f3f' : (localStorage.getItem('backgroundColor') || '#000');
    document.body.style.backgroundColor = bgColor;

    fetch("/particlesconfig.json")
        .then(response => response.json())
        .then(config => {
            particlesJS("particles-js", isValentines ? config.valentineConfig : isPresidents ? config.presidentsDayConfig : config.defaultConfig);
        })
        .catch(error => console.error("Error loading particles config:", error));
});
