const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = (arg) => {
  if (typeof arg === "string") {
    let nodeList = document.querySelectorAll(arg);
    nodeList = Array.from(nodeList);
    return nodeList;

  } else if (arg instanceof HTMLElement){
    arg = Array.from(arg);
    return DOMNodeCollection(arg);
  }
};