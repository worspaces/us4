function getConfigFile() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  
  if (month === 1 && day === 14) {
    return '/valentines-particlesjs-config.json';
  }

  if (month === 5 && day === 1) {
    return '/troll-particlesjs-config.json';
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

  return '/particlesjs-config.json';
}

const configFile = getConfigFile();
particlesJS.load('particles-js', configFile, function() {
  console.log('callback - particles.js config loaded');
});
