import "./styles.css";

function x() {
  y(); // undefined
  return z(); // only o/p 6 y() will give undefined and it will not print its value
  // return 2; // 2
  // return y(); // 4 if commented the above
}

const y = () => {
  return 4;
};

function z() {
  return 6;
}

document.getElementById("app").innerHTML = x();
