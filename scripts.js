const btnTema = document.getElementById("btnTema");
const card = document.getElementById("card");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
});

card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
});
