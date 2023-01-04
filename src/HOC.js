import "./styles.css";

let arr = [3, 2, 6, 4, 8, 9];

Array.prototype.filterFuntion = function (callback) {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(this.i) ? filterArr.push(this.i) : null;
  }
  return filterArr;
};

var val = arr.filterFuntion((x) => x > 5).filterFuntion((x) => x % 2 === 0);

document.getElementById("app").innerHTML = val;

// document.getElementById("app").innerHTML = arr
//   .filterFuntion((x) => x > 5)
//   .filterFuntion((x) => x % 2 == 0);
