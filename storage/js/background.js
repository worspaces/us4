function getEasterDate(year) {
  const f = Math.floor,
    g = year % 19,
    h = f(year / 100),
    i = year % 100,
    j = f(h / 4),
    l = f((h + 8) / 25),
    m = f((h - l + 1) / 3),
    n = f((19 * g + h - j - m + 15) % 30),
    p = f(i / 4),
    q = i % 4,
    s = f((32 + 2 * j + 2 * p - n - q) % 7),
    t = f((n + s - 7) / 31),
    month = n + s - 7 - 31 * t,
    day = n + s - 7 - 31 * t;

  return new Date(year, month - 1, day);
}

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

    const easterDate = getEasterDate(year);
    const columbusDay = getColumbusDay(year);
    const veteransDay = getVeteransDay(year);

    if (month === 1 && date === 14) {
        document.body.style.backgroundColor = '#b61924'; // Valentine's Day
    }

    else if (month === 2 && date === 17) {
        document.body.style.backgroundColor = '#197500'; // St. Patrick's Day
    }

    else if (month === 1 && date >= 15 && date <= 21 && today.getDay() === 1) {
        document.body.style.backgroundColor = '#0033A0'; // Presidents Day
    }

    else if (month === easterDate.getMonth() && date === easterDate.getDate()) {
        document.body.style.backgroundColor = '#FF69B4'; // Easter
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
