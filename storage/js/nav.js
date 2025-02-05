document.addEventListener("DOMContentLoaded", function () {
    const navButtons = `
    <a href="/"><i class="fa fa-home"></i> </a>
    <a href="/pages/games"><i class="fas fa-gamepad"></i> </a>
    <a href="/pages/media"><i class="fa-solid fa-video"></i> </a>
    <a href="/pages/apps"><i class="fa-sharp fa-solid fa-layer-group"></i> </a>
    <a href="/pages/prox"><i class="fas fa-globe"></i> </a>
    <a href="/pages/partners"><i class="fa-solid fa-users"></i> </a>
    <a href="/pages/credits"><i class="fa-solid fa-book"></i> </a>
    <a href="/pages/extra"><i class="fas fa-plus"></i> </a>
    <a href="/pages/settings"><i class="fa-solid fa-gear"></i> </a>
    `;

    document.querySelector('.right-side').innerHTML = navButtons;
});
