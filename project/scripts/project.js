//Current Year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

//Hamburger Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
//Scroll Button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
//Progress Bar
const progressBar = document.createElement("div");
progressBar.id = "scrollProgressBar";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
	progressBar.style.width = scrollPercent + "%";
	if (scrollPercent < 5) {
	progressBar.style.background = "#ffffff";
	} else {
	progressBar.style.background = "#18518F";
	}
});
//Tips box
const tips = [
    { message: "Did you know? GDG Cochabamba hosts regular tech talks and workshops!", mood: "💡" },
    { message: "Join the Women Techmakers (WTM) Cochabamba community to empower women in tech!", mood: "🚀" },
    { message: "PyLadies Cochabamba is the perfect place for women to learn Python and grow in tech!", mood: "🐍" },
    { message: "Tech communities in Cochabamba are growing fast! Get involved and make a difference.", mood: "🌱" },
    { message: "GDG Cochabamba offers mentorship opportunities for aspiring developers!", mood: "👨‍💻" },
    { message: "Women in Tech? Join WTM Cochabamba and be part of a global movement!", mood: "🌍" }
];

function showRandomTip() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    const tipBox = document.getElementById("tipBox");
    const tipContent = document.getElementById("tipContent");
    tipContent.textContent = `${randomTip.mood} ${randomTip.message}`;
}

function closeTipBox() {
    const tipBox = document.getElementById("tipBox");
	tipBox.style.display = 'none';
	localStorage.setItem("tipBoxClosed", "true");
}

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", closeTipBox);

window.addEventListener("scroll", () => {
    showRandomTip();
});
showRandomTip();

// Save the state of the tip box (Localstorage)
window.addEventListener("DOMContentLoaded", () => {
    const tipBoxClosed = localStorage.getItem("tipBoxClosed");
    if (tipBoxClosed === "true") {
        document.getElementById("tipBox").style.display = 'none';
    }
});
