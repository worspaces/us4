document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.createElement("div");
    tooltip.style.position = "absolute";
    tooltip.style.background = "rgba(0, 0, 0, 0.75)";
    tooltip.style.color = "white";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.fontSize = "14px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.whiteSpace = "nowrap";
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);

    document.querySelectorAll(".game-button").forEach(button => {
        button.addEventListener("mouseenter", (event) => {
            const altText = button.getAttribute("alt");
            if (altText) {
                tooltip.textContent = altText;
                tooltip.style.display = "block";
            }
        });
        
        button.addEventListener("mousemove", (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });
        
        button.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
});
