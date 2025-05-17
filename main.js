const btnplus = document.querySelectorAll(".btn-plus");
const btnminus = document.querySelectorAll(".btn-minus");
const spanqtd = document.querySelectorAll(".span-qtd");
const price = document.querySelectorAll(".price")
const btnfin = document.querySelector("#btn-submit");
const mensagemEstoque = document.getElementById("#mensagem-estoque");

let qtd0 = 1;
let qtd1 = 1;
let price0 = 549.99;
let price1 = 519.99;
let estoque0 = 5
let estoque1 = 5

btnfin.addEventListener("click", () => {
  const total = (price0 * qtd0) + (price1 * qtd1);
  const totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("somafinal").innerHTML = `O valor total é <strong>${totalFormatado}</strong>`;
});

btnplus[0].addEventListener("click", () => {
  spanqtd[0].textContent = qtd0 += 1;
  price[0].textContent = price0 * qtd0
});


btnplus[1].addEventListener("click", () => {
  spanqtd[1].textContent = qtd1 += 1;
  price[1].textContent = price1 * qtd1
  
});

btnminus[0].addEventListener("click", () => {
  if (qtd0 <= 1) {
    return null;
    
  }
  spanqtd[0].textContent = qtd0 -= 1;
  price[0].textContent = price0 * qtd0
});

btnminus[1].addEventListener("click", () => {
  if (qtd1 <= 1) {
    return null;
  }
  spanqtd[1].textContent = qtd1 -= 1;
  price[1].textContent = price1 * qtd1
});



// ACRESCENTAR A SOMA DOS 2 VALORES NO BOTÃO FINALIZAR  OK//
// acrescentar o maximo do estoque 
