import "./styles.css";

const val = function () {
  calculate("minus");
  return 2;
};

function calculate(operation) {
  switch (operation) {
    case "add":
      return function (a, b) {
        console.log("add:", a + b);
      };
    case "minus":
      return function (a, b) {
        console.log("minus:", a - b);
      };
    default:
      return null;
  }
}

const calculateAdd = calculate("add");

const value = calculate("add")(3, 4);

document.getElementById("app").innerHTML = calculateAdd(2, 3);
document.getElementById("app").innerHTML = val;
document.getElementById("app").innerHTML = value;
