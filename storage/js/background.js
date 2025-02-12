function getColumbusDay(year) {
    const date = new Date(year, 9, 1);  
    const day = date.getDay();
    const difference = (8 - day + 7) % 7;
    date.setDate(1 + difference + 7);  
    return date;
}

function getVeteransDay(year) {
    return new Date(year, 10, 11);
}

window.addEventListener('load', function() {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const year = today.getFullYear();
    const columbusDay = getColumbusDay(year);
    const veteransDay = getVeteransDay(year);

    if (month === 1 && date === 14) {
        document.body.style.backgroundColor = '#b61924'; // Valentine's Day
    }

    if (month === 3 && date === 1) {
        document.body.style.backgroundColor = '#28B9AB'; // April Fools
    }

    else if (month === 2 && date === 17) {
        document.body.style.backgroundColor = '#197500'; // St. Patrick's Day
    }

    else if (month === 1 && date >= 15 && date <= 21 && today.getDay() === 1) {
        document.body.style.backgroundColor = '#0033A0'; // Presidents Day
    }

    else if (month === columbusDay.getMonth() && date === columbusDay.getDate()) {
        document.body.style.backgroundColor = '#0033A0'; // Columbus Day
    }

    else if (month === veteransDay.getMonth() && date === veteransDay.getDate()) {
        document.body.style.backgroundColor = '#0033A0'; // Veterans Day
    }

    else {
        document.body.style.backgroundColor = localStorage.getItem('backgroundColor') || '#000';
    }
});
