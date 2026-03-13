document.addEventListener("DOMContentLoaded", () => {
  handleTheme();
  handleMenu();
});

function handleTheme() {
  let isDarkMode = localStorage.getItem("theme") === "dark";

  let iconHTML;
  if (isDarkMode) {
    document.documentElement.classList.add("dark-mode");
    iconHTML = `<i class="c-icon bi bi-brightness-high-fill"></i>`;
  } else {
    document.documentElement.classList.remove("dark-mode");

    iconHTML = `<i class="c-icon bi bi-moon-stars-fill"></i>`;
  }

  const themeButton = document.querySelector(".js-theme-toggle");

  if (themeButton) {
    themeButton.innerHTML = iconHTML;
  }

  // 4. Agregar el evento de clic.
  themeButton.addEventListener("click", () => {
    // 5. Invertir el estado.
    isDarkMode = !isDarkMode;

    // 6. Determinar el nuevo HTML del icono.
    const newIconHTML = isDarkMode
      ? `<i class="bi bi-brightness-high-fill"></i>`
      : `<i class="bi bi-moon-stars-fill"></i>`;

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark-mode");
    themeButton.innerHTML = newIconHTML;
  });
}
function handleMenu() {
  let isMenuOpen = false;

  const menu = document.querySelector(".js-menu");
  const menuButton = document.querySelector(".js-menu-toggle");
  const closeButton = document.querySelector(".js-close-btn");

  menuButton.addEventListener("click", () => toggleMenu());
  closeButton.addEventListener("click", () => toggleMenu());

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    menu.classList.toggle("u-menu-show");
  }
}

function privacy() {
  alert(`
        Privacy Policy (Simulated)
        We don't collect cookies, we only collect high-fives! Seriously though, any data sent via the contact form (name, email) is only used to reply to your message. We won't sell your info to robots or aliens. 
        I don't have a formal policy, Sorry XD
        `);
}

function terms() {
  alert(`
        Terms of Service (Simulated)
        By using this portfolio, you agree to the following: 
        1. Don't hack me. 
        2. Be nice. 
        3. Hire me. 
        Failure to comply results in instant bad karma and no cool features. 
        There are no legal terms, Sorry XD
        `);
}

function FAQ() {
  alert(`
        FAQ / Help Center (Simulated)
        Q: Is this website responsive? A: Yes, try resizing it! 
        Q: Where is your code? A: On GitHub (link in Contact)! 
        Q: Can I offer you a job? A: Yes, please use the form!
        (I'll add questions as they come in, Sorry XD)
        `);
}
