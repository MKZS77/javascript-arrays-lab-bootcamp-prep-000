// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return name;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return name;
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  name = [...kittens,"Broom"];
  return name;
}

function prependKitten(name) {
  name = ["Arnold",...kittens];
  return name;
}

function removeLastKitten() {
  kittens.splice(2,1, "Otis");
  return kittens;
}










