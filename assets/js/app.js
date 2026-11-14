

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.textContent =
      nav.classList.contains("active") ? "✕" : "☰";
  });
}

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("active");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
