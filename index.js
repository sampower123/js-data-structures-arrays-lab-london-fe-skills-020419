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
  // create new array
  var appendDriver = [...drivers]; 
  // add (name) to new array
  appendDriver.push(name)
  // call new array
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
