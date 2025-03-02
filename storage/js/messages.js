        const phrases = [
                "hi guys",
                "cheese",
                { type: "image", src: "https://i.ibb.co/v6xfHBB5/7th-graders.png" },
        
        ];

        const paragraph = document.getElementById('dynamicParagraph');

        function changeText() {
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            paragraph.textContent = randomPhrase;
        }

        paragraph.addEventListener('click', changeText);
        window.onload = changeText;
