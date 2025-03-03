const phrases = [
    'hi guys',
    'cheese',
    { type: "image", src: 'https://i.ibb.co/v6xfHBB5/7th-graders.png' },
    'dont type this on your keyboard: up, up, down, down, left, right, left, right, B, A, enter',
    'emerity said you should watch bleach',
    'im going to put bleach in your eyes'
];

const paragraph = document.getElementById('dynamicParagraph');

function changeText() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    if (typeof randomPhrase === "string") {
        paragraph.textContent = randomPhrase;
    } else if (randomPhrase.type === "image") {
        paragraph.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: 100%;">`;
    }
}

paragraph.addEventListener('click', changeText);
window.onload = changeText;
