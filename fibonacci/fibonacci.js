function fibonacci() {
  let number = document.getElementById("start");
  let res = document.getElementById("res");

  let a = 0;
  let b = 1;

  if (number.value.length === 0) {
    alert(
      "Por favor, insira um número abaixo para conseguir ver os termos Fibonacci:"
    );
  } else if (number.value === "0") {
    alert("Por favor, insira um número diferente de zero.");
  } else if (number.value < 0) {
    alert("Por favor, insira um número positivo.");
  } else {
    let length = Number(number.value);
    res.innerHTML = "";

    for (let j = 0; j < length; j++) {
      res.innerHTML += ` ${a} \u{1F449}`;
      let aux = a + b;
      a = b;
      b = aux;
    }
  }
}

function Clear() {
  let length = document.getElementById("start");
  let res = document.getElementById("res");

  length.value = "";
  res.innerHTML = "";
}
