const menu_icon = document.getElementById("fa-bars");
const menu = document.getElementById("menu");
const close_menu = document.getElementById("close");
const effect = document.getElementById("effect");
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const product4 = document.getElementById("product4");
const product5 = document.getElementById("product5");
const product6 = document.getElementById("product6");
const product7 = document.getElementById("product7");
const product8 = document.getElementById("product8");
const product9 = document.getElementById("product9");
const descricao1 = document.getElementById("descricao1");
const descricao2 = document.getElementById("descricao2");
const descricao3 = document.getElementById("descricao3");
const descricao4 = document.getElementById("descricao4");
const descricao5 = document.getElementById("descricao5");
const descricao6 = document.getElementById("descricao6");
const descricao7 = document.getElementById("descricao7");
const descricao8 = document.getElementById("descricao8");
const descricao9 = document.getElementById("descricao9");

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

if (descricao1 && product1) {
  product1.addEventListener("click", function () {
    descricao1.classList.add("show");
    /*remove*/
    descricao2.classList.remove("show");
    descricao3.classList.remove("show");
    descricao4.classList.remove("show");
    descricao5.classList.remove("show");
    descricao6.classList.remove("show");
  });
}
if (descricao2 && product2) {
  product2.addEventListener("click", function () {
    descricao2.classList.add("show");

    /*remove*/
    descricao1.classList.remove("show");
    descricao3.classList.remove("show");
    descricao4.classList.remove("show");
    descricao5.classList.remove("show");
    descricao6.classList.remove("show");
  });
}
if (descricao3 && product3) {
  product3.addEventListener("click", function () {
    descricao3.classList.add("show");

    /*remove*/
    descricao2.classList.remove("show");
    descricao1.classList.remove("show");
    descricao4.classList.remove("show");
    descricao5.classList.remove("show");
    descricao6.classList.remove("show");
  });
}
if (descricao4 && product4) {
  product4.addEventListener("click", function () {
    descricao4.classList.add("show");

    /*remove*/
    descricao2.classList.remove("show");
    descricao3.classList.remove("show");
    descricao1.classList.remove("show");
    descricao5.classList.remove("show");
    descricao6.classList.remove("show");
  });
}
if (descricao5 && product5) {
  product5.addEventListener("click", function () {
    descricao5.classList.add("show");

    /*remove*/
    descricao2.classList.remove("show");
    descricao3.classList.remove("show");
    descricao4.classList.remove("show");
    descricao1.classList.remove("show");
    descricao6.classList.remove("show");
  });
}
if (descricao6 && product6) {
  product6.addEventListener("click", function () {
    descricao6.classList.add("show");

    /*remove*/
    descricao2.classList.remove("show");
    descricao3.classList.remove("show");
    descricao4.classList.remove("show");
    descricao5.classList.remove("show");
    descricao1.classList.remove("show");
  });
}
if (descricao7 && product7) {
  product7.addEventListener("click", function () {
    descricao7.classList.add("show");

    /*remove*/
    descricao2.classList.remove("show");
    descricao3.classList.remove("show");
    descricao4.classList.remove("show");
    descricao5.classList.remove("show");
    descricao6.classList.remove("show");
  });
}
if (descricao8 && product8) {
  product8.addEventListener("click", function () {
    descricao8.classList.add("show");

    /*remove*/
    descricao2.classList.remove("show");
    descricao3.classList.remove("show");
    descricao4.classList.remove("show");
    descricao5.classList.remove("show");
    descricao6.classList.remove("show");
    move("show");
  });
}
if (descricao9 && product9) {
  product9.addEventListener("click", function () {
    descricao9.classList.add("show");

    /*remove*/
    descricao2.classList.remove("show");
    descricao3.classList.remove("show");
    descricao4.classList.remove("show");
    descricao5.classList.remove("show");
    descricao6.classList.remove("show");
  });
}
