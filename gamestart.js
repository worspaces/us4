window.addEventListener("load", function () {
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loadingScreen";
    Object.assign(loadingScreen.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/storage/images/bg.gif')",
        backgroundColor: localStorage.getItem('backgroundColor') || '#000',
        backgroundSize: "cover",
        color: "gold",
        zIndex: "1000",
        fontFamily: "'Comfortaa', cursive",
        backdropFilter: "blur(10px)"
    });

    const logo = document.createElement("img");
    Object.assign(logo.style, {
        src: "/storage/images/logo2.png",
        maxWidth: "150px",
        marginBottom: "20px",
        animation: "fadeIn 1s ease-in-out"
    });

    const text = document.createElement("p");
    Object.assign(text.style, {
        fontSize: "32px",
        fontWeight: "bold",
        opacity: "0.8"
    });
    text.textContent = "Loading";

    const tipText = document.createElement("p");
    Object.assign(tipText.style, {
        fontSize: "18px",
        fontWeight: "normal",
        marginTop: "10px",
        textAlign: "center",
        maxWidth: "80%",
        opacity: "0.8"
    });
    tipText.textContent = "(If your game does not load correctly, try using the site outside of about:blank. If that doesn't work, contact me on Discord - @voucan)";

    const progressBarContainer = document.createElement("div");
    Object.assign(progressBarContainer.style, {
        width: "80%",
        height: "10px",
        borderRadius: "5px",
        overflow: "hidden",
        border: "2px solid gold",
        marginTop: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "relative",
        boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)"
    });

    const progressBar = document.createElement("div");
    Object.assign(progressBar.style, {
        height: "100%",
        width: "0%",
        background: "linear-gradient(90deg, gold, orange)",
        transition: "width 0.2s ease-in-out"
    });

    progressBarContainer.appendChild(progressBar);
    loadingScreen.append(logo, text, tipText, progressBarContainer);
    document.body.appendChild(loadingScreen);

    let loadingDots = 3;
    const loadingDotsMax = 3;
    const dotInterval = setInterval(() => {
        text.textContent = "Loading" + ".".repeat(loadingDots);
        loadingDots = loadingDots > 0 ? loadingDots - 1 : loadingDotsMax;
    }, 500);

    let progress = 0;
    const progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = `${progress}%`;
        } else {
            clearInterval(progressInterval);
            clearInterval(dotInterval);
            setTimeout(() => loadingScreen.remove(), 300);
        }
    }, 30);
});

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Comfortaa&display=swap";
document.head.appendChild(fontLink);
