console.log("this is a module");

export function Foo() {
  console.log("Foo");
}

export function addNumbers(a, b) {
  return a + b;
}

function calculate() {
  console.log("calculate");
}

export default calculate;
