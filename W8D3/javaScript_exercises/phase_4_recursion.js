function range(start, end) {
  if (start === end) {
    return [start];
  } else {
    return [start].concat(range(start + 1, end));
  }
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumRec(arr.slice(1, arr.length));
  }
}

function exponent(base, exp)  {
  if (exp === 0 ) {
    return 1;
  } else  {
    return base * exponent(base, exp - 1);
  }
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp % 2 === 0 ) {
    return Math.pow(exponent2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);
  }
}



function fibonacci(n) {
  if (n === 1)  {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else  {
    let arr = fibonacci(n - 1); //[1, 1]
    let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextNum);
    return arr;
  }
}


