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

function getConfigFile() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const year = today.getFullYear();

  const easterDate = getEasterDate(year);

  if (month === 1 && day === 14) {
    return '/valentines-particlesjs-config.json';
  }

  if (month === 2 && day === 17) {
    return '/patricks-particlesjs-config.json';
  }

  if (month === 9 && today.getDay() >= 8 && today.getDay() <= 14 && today.getDay() === 1) {
    return '/presidents-day-particlesjs-config.json';
  }

  if (month === 1 && day >= 15 && day <= 21 && today.getDay() === 1) {
    return '/presidents-particlesjs-config.json';
  }

  if (month === 10 && day === 11) {
    return '/presidents-particlesjs-config.json';
  }

  if (month === easterDate.getMonth() && day === easterDate.getDate()) {
    return '/easter-particlesjs-config.json';
  }

  return '/particlesjs-config.json';
}

const configFile = getConfigFile();
particlesJS.load('particles-js', configFile, function() {
  console.log('callback - particles.js config loaded');
});
