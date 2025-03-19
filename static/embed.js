    "use strict";
    let destination = "";

    try {
        destination = new URL(location.hash.slice(1)).toString();
    } catch (err) {
        alert(`Bad # string or bad URL. Got error:\n${err}`);
        throw err;
    }

    const screenEffect = document.createElement("div");
    screenEffect.id = "screenEffect";
    document.body.appendChild(screenEffect);

    setTimeout(() => {
        screenEffect.classList.add("expand");

        setTimeout(() => {
            registerSW()
                .then(() => {
                    const newWindow = window.open(
                        __uv$config.prefix + __uv$config.encodeUrl(destination),
                        "_self"
                    );

                    newWindow.onload = () => {
                        screenEffect.classList.add("split");
                        setTimeout(() => screenEffect.remove(), 500);
                    };
                })
                .catch((err) => {
                    alert(`Encountered error:\n${err}`);
                });
        }, 500);
    }, 200);
