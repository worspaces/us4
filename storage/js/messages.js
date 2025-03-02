        const phrases = [
            "hi guys",
            "cheese"
        ];

        const paragraph = document.getElementById('dynamicParagraph');

        function changeText() {
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            paragraph.textContent = randomPhrase;
        }

        paragraph.addEventListener('click', changeText);
        window.onload = changeText;
