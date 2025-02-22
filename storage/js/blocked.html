function validateSession() {
    console.log("Validating session...");

    const encodedKey = atob("Ry1LOENDU0ROUFYz");
    console.log("Decoded key:", encodedKey);

    const scripts = Array.from(document.scripts);
    const scriptValid = scripts.some(script => script.src.includes(encodedKey));
    console.log("Script validation:", scriptValid);

    const dataLayerValid = window.dataLayer 
        ? window.dataLayer.some(entry => JSON.stringify(entry).includes(encodedKey)) 
        : false;
    console.log("DataLayer validation:", dataLayerValid);

    if (!scriptValid || !dataLayerValid) {
        console.log("Validation failed. Redirecting to blocked.html");
        window.location.href = "https://voucan.github.io/blocked";
        return false;
    }

    console.log("Session validated successfully.");
    return true;
}

validateSession();
