window.addEventListener('load', function() {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();

    if (month === 1 && date === 14) {
        document.body.style.backgroundColor = '#b61924';
    }

    else if (month === 2 && date === 17) {
        document.body.style.backgroundColor = '#197500';
    }

    else if (month === 1 && date >= 15 && date <= 21 && today.getDay() === 1) {
        document.body.style.backgroundColor = '#0033A0';
    }
    else {
        document.body.style.backgroundColor = localStorage.getItem('backgroundColor') || '#000';
    }
});
