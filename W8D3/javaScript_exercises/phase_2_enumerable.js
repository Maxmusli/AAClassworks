

Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function putsEle(el) {
  console.log(el);
}

// [1, 2, 3].myEach(callback)




Array.prototype.myMap = function(callback) {
  let new_nums = [];
  for(let i = 0; i < this.length; i++) {
    new_nums.push(callback(this[i]));
  }
  return new_nums;
};

function twoTimes(el) {
  return el * 2;
}





Array.prototype.myReduce = function(callback, initial = this.shift()) {
  let acc = initial;

  this.myEach(function(ele)  {
    acc = callback(acc, ele);
  });

  return acc;
};

function add(acc, ele)  {
  return acc + ele;
}

