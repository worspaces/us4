    "use strict";
    let destination = "";

    try {
        destination = new URL(location.hash.slice(1)).toString();
    } catch (err) {
        alert(`Bad # string or bad URL. Got error:\n${err}`);
        throw err;
    }

    const openingScreen = document.createElement("div");
    openingScreen.id = "openingScreen";
    document.body.appendChild(openingScreen);

    setTimeout(() => {
        openingScreen.classList.add("shrink");

        setTimeout(() => {
            registerSW()
                .then(() => {
                    window.open(
                        __uv$config.prefix + __uv$config.encodeUrl(destination),
                        "_self"
                    );
                })
                .catch((err) => {
                    alert(`Encountered error:\n${err}`);
                });
        }, 800);
    }, 200);
