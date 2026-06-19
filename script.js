const row = document.querySelector(".row");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

right.onclick = () => row.scrollBy({ left: 400, behavior: "smooth" });
left.onclick = () => row.scrollBy({ left: -400, behavior: "smooth" });

const modal = document.getElementById("trailerModal");
const frame = document.getElementById("trailerFrame");
const close = document.querySelector(".close");

document.querySelectorAll(".poster").forEach(p => {
    p.onclick = () => {
        frame.src = p.dataset.trailer + "?autoplay=1";
        modal.style.display = "block";
    };
});

close.onclick = () => {
    modal.style.display = "none";
    frame.src = "";
};

window.onclick = e => {
    if (e.target === modal) {
        modal.style.display = "none";
        frame.src = "";
    }
};