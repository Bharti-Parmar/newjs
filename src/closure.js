import "./styles.css";

const a = 20;
function x() {
  let a = 10;
  function y() {
    const a = 20;
    var b = a;
    b = 30;
    console.log("value of b:", a, b);
  }
  y();
  console.log("value:", a);
  console.log("value after func:", a);
}
console.log("value inside:", a);

document.getElementById("app").innerHTML = x();
