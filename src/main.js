const modeElement = document.getElementById('mode');
modeElement.innerText = `Поточний режим: ${import.meta.env.VITE_APP_MODE}`;
console.log('App successfully bundled!');
