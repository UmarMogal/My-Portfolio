// =====================
// Typed.js Animation
// =====================
document.addEventListener("DOMContentLoaded", () => {
  new Typed("#element", {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    loop: true,
  });
});

// =====================
// EmailJS Init
// =====================
emailjs.init('AXAMnxu56JOMMLZ0T');

// =====================
// Navbar / Hamburger
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("nav-links");
  const lines = document.querySelectorAll(".hamburger-line");
  const navLinks = document.querySelectorAll("#nav-links a");

  if (!hamburger || !menu) return;

  function closeMenu() {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    hamburger.classList.remove("active");

    lines[0].style.transform = "rotate(0) translate(0, 0)";
    lines[1].style.opacity = "1";
    lines[2].style.transform = "rotate(0) translate(0, 0)";
  }

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    hamburger.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
      lines[0].style.transform = "rotate(45deg) translate(6px, 6px)";
      lines[1].style.opacity = "0";
      lines[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
    } else {
      closeMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});

// =====================
// Top Toast Function
// =====================
function showTopToast(message, type = "success") {
  const toast = document.getElementById("top-toast");
  const text = document.getElementById("toast-text");
  const progress = document.getElementById("toast-progress");

  if (!toast) return;

  progress.style.animation = "none";
  progress.offsetHeight;
  progress.style.animation = "progress 3s linear forwards";

  text.textContent = message;

  toast.classList.remove("hidden", "error");
  if (type === "error") toast.classList.add("error");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// =====================
// Contact Form Submit
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_0cwafu8',
      'template_ro4yibz',
      this
    ).then(
      () => {
        showTopToast("Message sent successfully! ✅", "success");
        form.reset();
      },
      (error) => {
        console.error(error);
        showTopToast("Failed to send message. Please try again.", "error");
      }
    );
  });
});

// =====================
// Auto Update Footer Year
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
