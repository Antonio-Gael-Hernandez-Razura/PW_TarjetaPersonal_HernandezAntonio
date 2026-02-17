const btnTema = document.getElementById("btnTema");
const btnReceta = document.getElementById("btnReceta");
const card = document.getElementById("card");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

btnReceta.addEventListener("click", () => {
    alert("Mi receta favorita es la lasaña 🍝");
});

card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
});

card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
});
