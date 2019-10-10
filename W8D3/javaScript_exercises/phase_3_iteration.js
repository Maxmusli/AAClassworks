
Array.prototype.bubbleSort = function() {
  let sorted = false;

  while(!sorted) {
    sorted = true;
    for(let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        // this[i], this[i + 1] = this[i + 1], this[i];
        first = this[i];
        second = this[i + 1];
        this[i] = second;
        this[i + 1] = first;
        sorted = false;
      }
    }
  }
  return this;
};

function subStrings(string) {
  let subs = [];

  for(let i = 0; i < string.length - 1; i++) {
    for(let j = i + 1; j < string.length; j++) {
      subs.push(string.slice(i, j));
    }
  }
  return subs;
};