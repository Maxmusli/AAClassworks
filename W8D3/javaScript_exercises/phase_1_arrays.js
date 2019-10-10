Array.prototype.uniq = function() {
  let uniques = [];
  for (let i = 0; i < this.length; i++) {
    let ele = this[i];
    if (!uniques.includes(ele)) { uniques.push(ele); }
  }
  return uniques;
};

Array.prototype.twoSum = function() {
  let pairs = [];
  let i = 0;
  while (i < this.length - 1) {
    let j = (i + 1);
    while (j < this.length) {
      if (this[i] + this[j] === 0) {
        pairs.push([this[i], this[j]]);
      }
      j++;
    }
    i++;
  }
  return pairs;
};

Array.prototype.transpose = function()  {
  const main = [];
  
  for (let i = 0; i < this.length; i++) {
    const sub = [];

    for (j = 0; j < this.length; j++) {
      
      sub.push(this[j][i]);
    }

    main.push(sub);
  }

  return main;
};


