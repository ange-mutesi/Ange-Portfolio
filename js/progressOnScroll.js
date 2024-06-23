const progress = document.querySelector(".progress");

document.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progressWidth = Math.floor((scroll / height) * 100);
    progress.style.width = `${progressWidth}%`;
}, { passive: true });

