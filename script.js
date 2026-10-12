
const themeButton = document.getElementById("theme-toggle");


// Mengecek tema yang tersimpan
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.textContent = "☾ Dark Mode";

} else {

    themeButton.textContent = "☀︎ Light Mode";

}

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "☾ Dark Mode";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "☀︎ Light Mode";

        localStorage.setItem("theme", "dark");

    }

});

function scrollToContact() {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

}

window.addEventListener("load", function () {

    console.log("Portofolio berhasil dimuat!");

});

function setGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour >= 4 && hour < 11) {
    greeting = "Selamat Pagi! ☀️";
  } else if (hour >= 11 && hour < 15) {
    greeting = "Selamat Siang! 🌤️";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Selamat Sore! 🌇";
  } else {
    greeting = "Selamat Malam! 🌙";
  }

  document.getElementById("greeting").textContent =
    greeting;
}

function enterPortfolio() {
  document.getElementById("welcome-screen").style.display =
    "none";
}

setGreeting();

const menuToggle = document.getElementById("menu-3d-toggle");
const navMenu = document.getElementById("nav-menu");
const menuLabel = document.getElementById("menu-label");

if (menuToggle && navMenu && menuLabel) {
  menuToggle.addEventListener("click", function () {
    const isOpening = navMenu.hidden;

    navMenu.hidden = !isOpening;
    menuToggle.setAttribute("aria-expanded", String(isOpening));
    menuLabel.textContent = isOpening ? "TUTUP" : "MENU";
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuLabel.textContent = "MENU";
    });
  });
}