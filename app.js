var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Oi, mundo :-)");
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function () {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

function soma(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function sub(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function mult(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function div(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

app.post("/soma", function (req, res) {
  var body = req.body;
  var result = soma(body.numberOne, body.numberTwo);
  res.send(
    `O resultado da soma de ${body.numberOne}+${body.numberTwo}: ${result}`
  );
});

app.post("/sub", function (req, res) {
  var body = req.body;
  var result = sub(body.numberOne, body.numberTwo);
  res.send(
    `O resultado da subtração de ${body.numberOne}-${body.numberTwo}: ${result}`
  );
});

app.post("/mult", function (req, res) {
  var body = req.body;
  var result = mult(body.numberOne, body.numberTwo);
  res.send(
    `O resultado da multiplicação de ${body.numberOne}*${body.numberTwo}: ${result}`
  );
});

app.post("/div", function (req, res) {
  var body = req.body;
  var result = div(body.numberOne, body.numberTwo);
  res.send(
    `O resultado da divisão de ${body.numberOne}/${body.numberTwo}: ${result}`
  );
});
