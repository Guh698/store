const menu_icon = document.getElementById("fa-bars");
const menu = document.getElementById("menu");
const close_menu = document.getElementById("close");
const effect = document.getElementById("effect");

menu_icon.classList.toggle("show");

if (menu_icon && menu && main_container) {
  menu_icon.addEventListener("click", function () {
    menu.classList.toggle("show");
    menu_icon.classList.remove("show");
    effect.classList.toggle("show");

    // Bloqueia o scroll ao abrir o menu
    if (menu.classList.contains("show")) {
      document.body.style.overflow = "hidden";
    }
  });
}

if (close_menu && menu_icon && menu) {
  close_menu.addEventListener("click", function () {
    menu.classList.remove("show");
    menu_icon.classList.toggle("show");
    effect.classList.remove("show");

    // Libera o scroll ao fechar o menu
    document.body.style.overflow = "";
  });
}
