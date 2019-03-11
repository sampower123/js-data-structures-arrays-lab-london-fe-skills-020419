// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name);
}

function appendDriver(name){
  var appendDriver = [...drivers];
  appendDriver.push(name)
  return appendDriver
}

function prependDriver(name){
  var prependDriver = [...drivers];
  prependDriver.unshift(name)
  return prependDriver
}

function removeLastDriver(name) {
  var removeLastDriver = [...drivers];
  removeLastDriver.pop(name);
  return removeLastDriver
}

function removeFirstDriver(name) {
  var removeFirstDriver = [...drivers];
  removeFirstDriver.shift(name);
  return removeFirstDriver
}
