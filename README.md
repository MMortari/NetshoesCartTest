# Prova Netshoes

Name     : Matheus Mortari <br>
Date     : 14/02/2019 <br>
Contact  : bmortari2000@gmail.com <br>
Objective: 
* Show a list of products;
* Add or remove items to the cart and get instant visual feedback;
* Show the products added to the cart.
* Persist data on page reload;


## Products
Object that stores the products extracted from the Json file;
``` javascript
// Objeto
const state = {
  products: []
}
```

Extract all the data from the Json file;
``` javascript
// Extação dos dados
$.getJSON('./src/files/products.json', function (data) {
  state.products = data.products;
})
```

Function to list all the products stored in the object;
``` javascript
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
```

## Cart
Function to list all the products stored in the localStorage and update the prices;
``` javascript
// Lista os produtos na sacola
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
  qtdeSacola.html(localCart().length);
}
```

Function to remove the product from the localStorage - Dependency of renderBag();
``` javascript
// Tira o produto da sacola
function deleteProduct(index) {
  var local = localCart()
  local.splice(index, 1);

  localStorage.cart = local;

  renderBag();
}
```

## Search
Function to search inside of the products object, and return the result;
``` javascript
// Realiza a pesquisa
function search() {
  var input = $('.form-together input').val();

  var resps = [];

  $.map(state.products, function (value, name) {
    if (value.title.indexOf(input) > -1) {
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
```