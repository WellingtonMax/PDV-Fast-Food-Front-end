let modalKey = 0;

let quantBurgers = 1;

let cart = [];

const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const formatoReal = (valor) => {
  return valor.toLocalString("pt-BR", { style: "currency", currency: "BRL" });
};

const formatoMonetario = (valor) => {
  if (valor) {
    return valor.toFixed(2);
  }
};

const abrirModal = () => {
  seleciona(".burgerWindowArea").style.opacity = 0;
  seleciona(".burgerWindowArea").style.display = "flex";
  setTimeout(() => {
    seleciona(".burgerWindowArea").style.opacity = 1;
  }, 150);
};

const fecharModal = () => {
  seleciona(".burgerWindowArea").style.opacity = 0;
  setTimeout(() => {
    seleciona(".burgerWindowArea").style.display = "none";
  }, 500);
};

const botoesFechar = () => {
  selecionaTodos(".burgerInfo--cancelButton").forEach((item) => {
    item.addEventListener("click", fecharModal);
  });
};

const preencherDadosDosLanches = (burgerItem, item) => {
  burgerItem.querySelector(".burger-item--img img").src = item.img;
  burgerItem.querySelector(
    ".burger-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  burgerItem.querySelector(".burger-item--name").innerHTML = item.name;
  burgerItem.querySelector(".burger-item--desc").innerHTML = item.description;
};

const preencherDadosModal = (item) => {
  seleciona(".burger-info--img img").src = item.img;
  seleciona(".burgerInfo h1").innerHTML = item.name;
  seleciona(".burgerInfo--desc").innerHTML = item.description;
  seleciona(".burgerInfo--actualPrice").innerHTML = `R$ ${item.price.toFixed(
    2
  )}`;
};

const mudarQuantidade = () => {
  seleciona(".burgerInfo--qtmais").addEventListener("click", () => {
    quantBurgers++;
    seleciona(".burgerInfo--qt").innerHTML = quantBurgers;
  });
  seleciona(".burgerInfo--qtmenos").addEventListener("click", () => {
    if (quantBurgers > 1) {
      quantBurgers--;
      seleciona(".burgerInfo--qt").innerHTML = quantBurgers;
    }
  });
};

lovBurgerJson.map((item, index) => {
  let burgerItem = document
    .querySelector(".models .burger-item")
    .cloneNode(true);

  seleciona(".burger-area").append(burgerItem);

  preencherDadosDosLanches(burgerItem, item);

  burgerItem.querySelector(".burger-item a").addEventListener("click", (e) => {
    e.preventDefault();

    abrirModal();
    preencherDadosModal(item);
  });

  botoesFechar();
});

mudarQuantidade();
