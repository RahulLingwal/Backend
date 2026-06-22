function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

// module.exports = add;

// module.exports = { add, sub };

exports.add = (a, b) => {
  return a + b;
};

exports.sub = (a, b) => {
  return a - b;
};
