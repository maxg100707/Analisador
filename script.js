var num = document.getElementById("fnum");
var lista = document.getElementById("flista");
var res = document.getElementById("res");
var valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    var item = document.createElement("option");
    item.text = "O numero " + num.value + " foi adicionado";
    lista.appendChild(item);
    res.innerHTML = " ";
  } else {
    alert(
      "Ou o numero é invalido ou ja ta na lista"
    );
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione um numero");
  } else {
    var tot = valores.length;
    var maior = valores[0];
    var menor = valores[0];
    var soma = 0;
    var media = 0;

    for (var pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }

    media = soma / tot;

    res.innerHTML = " ";
    res.innerHTML += `<p>No total tem ${tot} numeros nessa lista.</p>`;
    res.innerHTML += `<p>O maior valor da lista é ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor é ${menor}.</p>`;
    res.innerHTML += `<p>A soma de tudo é ${soma}.</p>`;
    res.innerHTML += `<p>A media é ${media}.</p>`;
  }
}
/*
        _             _
       / \           / \
      /   \         /   \
     /     \_______/     \
    /  ___           ___  \
   |  / ()\         / ()\  |
   |  \___/         \___/  |
   |           ___         |
   \          |___|        /
    \           |         /
     \      \___|___/    /
      \_               _/
        \_____________/  
           MIAW MIAW


instagram : https://www.instagram.com/maxg1007/
portifolio : https://maxg100707.github.io/Portifolio/

*/
