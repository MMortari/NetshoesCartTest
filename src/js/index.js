const state = {
  products: []
}

// Retira as informações do arquivo JSON e armazena em uma variável
// $.getJSON('./src/files/products.json', function (data) {
//   state.products = data.products;
// })
state.products = [
  {
    "id": 0,
    "sku": 8552515751438644,
    "title": "Camisa Nike Corinthians I",
    "description": "14/15 s/nº",
    "availableSizes": ["S", "G", "GG", "GGG"],
    "style": "Branco com listras pretas",
    "price": 229.9,
    "installments": 9,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 1,
    "sku": 18644119330491312,
    "title": "Camisa Nike Corinthians II",
    "description": "14/15 s/nº",
    "availableSizes": ["S", "G", "GG", "GGG"],
    "style": "Preta com listras brancas",
    "price": 229.9,
    "installments": 9,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 2,
    "sku": 11854078013954528,
    "title": "Camisa Feminina Nike Corinthians I",
    "description": "14/15 s/nº",
    "availableSizes": ["S", "G"],
    "style": "Branco com listras pretas",
    "price": 199.9,
    "installments": 7,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 3,
    "sku": 876661122392077,
    "title": "Camisa Feminina Nike Corinthians II",
    "description": "2014 s/nº",
    "availableSizes": ["S", "G"],
    "style": "Preto com listras brancas",
    "price": 199.9,
    "installments": 7,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 4,
    "sku": 9197907543445677,
    "title": "Camisa Nike Corinthians I",
    "description": "14/15 s/nº - Jogador",
    "availableSizes": ["GG"],
    "style": "Branco com listras pretas",
    "price": 349.9,
    "installments": 12,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": false
  },

  {
    "id": 5,
    "sku": 10547961582846888,
    "title": "Kit Corinthians - Camisa Nike II",
    "description": "14/15 + Camiseta 1º Mundial",
    "availableSizes": ["S", "G", "GG"],
    "style": "Preto",
    "price": 229.9,
    "installments": 9,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": false
  },

  {
    "id": 6,
    "sku": 6090484789343891,
    "title": "Calção Nike Corinthians",
    "description": "Goleiro 13/14",
    "availableSizes": ["GG", "GGG"],
    "style": "Branco",
    "price": 49.9,
    "installments": 0,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 7,
    "sku": 18532669286405342,
    "title": "Camisa Corinthians Réplica",
    "description": "1977 Infantil",
    "availableSizes": ["S"],
    "style": "Preto com listras brancas",
    "price": 109.9,
    "installments": 4,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 8,
    "sku": 5619496040738316,
    "title": "Calção Nike Strike Lgr Woven",
    "description": "",
    "availableSizes": ["GG"],
    "style": "Azul escuro",
    "price": 119.9,
    "installments": 4,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": false
  },

  {
    "id": 9,
    "sku": 11600983276356165,
    "title": "Jaqueta Corinthians CP",
    "description": "",
    "availableSizes": ["G", "GG"],
    "style": "",
    "price": 134.9,
    "installments": 5,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 10,
    "sku": 27250082398145995,
    "title": "Jaqueta Corinthians Urban c/ Capuz",
    "description": "",
    "availableSizes": ["G", "GG"],
    "style": "",
    "price": 249.9,
    "installments": 9,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 11,
    "sku": 39876704341265606,
    "title": "Jaqueta Corinthians Elite",
    "description": "",
    "availableSizes": ["S", "G"],
    "style": "Preto",
    "price": 99.9,
    "installments": 3,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 12,
    "sku": 12064273040195392,
    "title": "Tênis Nike Air Relentless",
    "description": "4 MSL",
    "availableSizes": ["40", "43"],
    "style": "Cinza com símbolo laranja",
    "price": 229.9,
    "installments": 9,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 13,
    "sku": 51498472915966366,
    "title": "Tênis Nike Biscuit Canvas",
    "description": "",
    "availableSizes": ["41"],
    "style": "Vermelho com detalhe em branco",
    "price": 129.9,
    "installments": 5,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 14,
    "sku": 10686354557628303,
    "title": "Camisa Nike Academy",
    "description": "GPX Poly 1",
    "availableSizes": ["S", "G", "GG"],
    "style": "Vermelho com detalhe em preto",
    "price": 99.9,
    "installments": 3,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 15,
    "sku": 11033926921508487,
    "title": "Camisa Nike Corinthians",
    "description": "Treino 2014",
    "availableSizes": ["S", "G", "GG", "GGG"],
    "style": "Branco com detalhe em azul",
    "price": 149.9,
    "installments": 5,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  },

  {
    "id": 16,
    "sku": 10412368723880253,
    "title": "Camisa Polo Corinthians Ouro",
    "description": "",
    "availableSizes": ["S", "G", "GG"],
    "style": "Preto com detalhe em dourado",
    "price": 129.9,
    "installments": 5,
    "currencyId": "BRL",
    "currencyFormat": "R$",
    "isFreeShipping": true
  }
]

// Realiza a pesquisa
function search() {
  var input = $('.form-together input').val();

  var resps = [];

  $.map(state.products, function (value, name) {
    if (value.title.indexOf(input) > -1 || value.title.toLowerCase().indexOf(input) > -1) {
      resps.push(value);
    }
  })

  var ancSearch = $('.search');
  var anc = $('.products');

  if (resps.length >= 1) {
    var willReturn = `<div class="row">`;

    for (let index = 0; index < resps.length; index++) {
      willReturn += `<div class="col product" onClick="addProduct(${resps[index].id})">
        <img src="./src/img/shirt.jpg" alt="Imagem de Camiseta">
        <h3>${resps[index].title}</h3>
        <hr>
        <p class="price"><small>${resps[index].currencyFormat}</small> ${resps[index].price.toFixed(2)}</p>
        <small>ou 3x R$ ${(resps[index].price / 3).toFixed(2)}</small>
      </div>`;
    }

    willReturn += `</div>`;

    willReturnSearch = `<small>Aqui está o resultado da sua pesquisa! ;)</small>`;

    anc.html(willReturn);
    ancSearch.html("");
    ancSearch.html(willReturnSearch);
  } else {
    willReturn = `<h3>"${input}"</h3><small>Ops! não encontramos o que você procurou :(<br/>Verifique se você digitou corretamente ou faça uma nova busca.</small>`;

    ancSearch.html(willReturn);

    renderProducts();
  }
}

// Abre a janela da sacola
function openBag() {
  $('.bag').addClass('active')
}

// Abre a janela da sacola
function closeBag() {
  $('.bag').removeClass('active')
}

// Insere o produto clicado no carrinho
function addProduct(id) {
  array = [id];
  for (let i = 0; i < localCart().length; i++) {
    array.push(localCart()[i]);
  }

  localStorage.cart = array;
  // state.bag = array;
  console.log(localCart());

  renderBag();
}

// Tira o produto do carrinho de compra
function deleteProduct(index) {
  var local = localCart()
  local.splice(index, 1);

  localStorage.cart = local;

  renderBag();
}

function renderBag() {
  var anc = $('.bag ul');
  var ancPreco = $('.bag .subtotal .preco');
  var ancParcelado = $('.bag .subtotal .parcelado');
  var qtdeSacola = $('.bag .qtdeSacola');

  var subtotal = 0;
  var willReturn = "";

  $.map(localCart(), function (value, name) {
    // $.map(state.bag, function (value, name) {
    $.map(state.products, function (value2, name2) {
      if (value == value2.id) {
        subtotal += value2.price;
        willReturn += `<li>
        <div class="img">
          <img src="./src/img/shirt.jpg" alt="Imagem Camiseta">
        </div>
        <div class="content">
          <h3>${value2.title}</h3><br>
          <small>Tamanhos: ${value2.availableSizes}</small><br>
          <small>Quantidade: ${value2.installments}</small>
        </div>
        <div class="final">
          <button onClick="deleteProduct(${name})"><i class="fas fa-times"></i></button>
          <p>R$ ${value2.price.toFixed(2)}</p>
        </div>
      </li>`;
      };
    })
  })

  parcelado = subtotal / 10;

  anc.html(willReturn);
  ancPreco.html(subtotal.toFixed(2));
  ancParcelado.html(parcelado.toFixed(2));
  qtdeSacola.html(localCart().length - 1);
}

function renderProducts() {
  var products = state.products;
  var anc = $('.products');

  var willReturn = `<div class="row">`;

  for (let index = 0; index < products.length; index++) {
    willReturn += `<div class="col product" onClick="addProduct(${products[index].id})">
      <img src="./src/img/shirt.jpg" alt="Imagem de Camiseta">
      <h3>${products[index].title}</h3>
      <hr>
      <p class="price"><small>${products[index].currencyFormat}</small> ${products[index].price.toFixed(2)}</p>
      <small>ou 3x R$ ${(products[index].price / 3).toFixed(2)}</small>
    </div>`;
  }

  willReturn += `</div>`;

  anc.html(willReturn);
}

function localCart() {
  var array = [];

  if (localStorage.cart != undefined) {
    array = localStorage.cart.split(',');
  }

  return array;
}

$(document).ready(function () {
  renderProducts();

  renderBag();
})