function getConfigFile() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  
  if (month === 1 && day === 14) {
    return '/valentines-particlesjs-config.json';
  }

  if (month === 1 && day >= 15 && day <= 21 && today.getDay() === 1) {
    return '/presidents-particlesjs-config.json';
  }

  return '/particlesjs-config.json';
}

const configFile = getConfigFile();
particlesJS.load('particles-js', configFile, function() {
  console.log('callback - particles.js config loaded');
});
