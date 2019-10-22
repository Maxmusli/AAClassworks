
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  // let newContent = document.createTextNode(string);
  // newP.appendChild(newContent);
  if (htmlElement.innerHTML) {
    htmlElement.innerHTML = null;
  } 
  let newP = document.createElement("p");
  newP.innerHTML = string;
  htmlElement.appendChild(newP);
};

htmlGenerator('Pocket Projects!', partyHeader);

export default htmlGenerator;
// [1,2,3]