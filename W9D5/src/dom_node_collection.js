class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }
}

DOMNodeCollection.prototype.html = function(str) {
  if (str) {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].innerHTML = str;
    }
  } else {
    return this.arr[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function() {
  for (let i = 0; i < this.arr.length; i++) {
    this.arr[i].innerHTML = "";
  }
};

DOMNodeCollection.prototype.append = function(arg) {
  // accepts either collection, HTML element, or a string
  switch (arg) {
    case arg instanceof HTMLElement:
      for(let i = 0; i < this.arr.length; i++) {
        let node = this.arr[i];
        node.innerHTML += arg.outerHTML;
      }
      break;
    case typeof arg === "string":
      for(let i = 0; i < this.arr.length; i++) {
        let node = this.arr[i];
        node.innerHTML += arg;
      }
      break;
    case arg instanceof DOMNodeCollection:
      let inners = "";
      
      for(let i = 0; i< arg.length; i++) {
        inners += ars[i].outerHTML;
      }

      for(let i = 0; i < this.arr.length; i++) {
        let node = this.arr[i];
        node.innerHTML += inners;
      }
      break;
  }
};

DOMNodeCollection.prototype.attr = function(attribute) {
  for (let i = 0; i < this.arr.length; i++) {
    let node = this.arr[i];
    console.log(node);
  }
};

DOMNodeCollection.prototype.addClass = function() {

};

DOMNodeCollection.prototype.removeClass = function() {

};

module.exports = DOMNodeCollection;