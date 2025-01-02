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
      "vc é burro ou se faz? ou o numero é invalido ou ja ta na poha da lista"
    );
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Bota numero nessa poha");
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
    res.innerHTML += `<p>No total tem ${tot} numeros nessa lista de merda.</p>`;
    res.innerHTML += `<p>O maior valor dessa poha é ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor dessa poha é ${menor}.</p>`;
    res.innerHTML += `<p>A soma dessas merda tudo é ${soma}.</p>`;
    res.innerHTML += `<p>A media dessas merda tudo é ${media}.</p>`;
  }
}
