// import htmlGenerator from "./warmup";

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  const dogLinks = [];
  let names = Object.keys(dogs);

  for (let i = 0; i < names.length; i++) {
    let newA = document.createElement("a");
    newA.innerHTML = names[i];
    newA.href = dogs[names[i]];
    let newLi = document.createElement("li");
    newLi.classList.add("dog-link");
    newLi.appendChild(newA);
    dogLinks.push(newLi);
  }
  console.log(dogLinks);
  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator(dogs);
  let dogElement = document.querySelector(".drop-down-dog-list");

  for (let i = 0; i < dogLinks.length; i++) {
    const dogLink = dogLinks[i];
    dogElement.appendChild(dogLink);
  }
}

// const list = document.querySelector("h3");
const list = document.querySelector(".drop-down-dog-nav");
list.addEventListener("mouseover", handleEnter);
list.addEventListener("mouseout", handleLeave);
const dogLinks = document.querySelectorAll(".dog-link");

// dogLinks.addEventListener('mouseleave', handleLeave);

function handleEnter() {
  const dogLinks = document.querySelectorAll(".dog-link");
  
  dogLinks.forEach((dog) => {
    dog.classList.add("show");
  });
}

function handleLeave() {
  const dogLinks = document.querySelectorAll(".dog-link");

  dogLinks.forEach((dog) => {
    dog.classList.remove("show");
  });
}

// const htmlGenerator = (string, htmlElement) => {
//   // let newContent = document.createTextNode(string);
//   // newP.appendChild(newContent);
//   let newA = document.createElement("a");
//   // let link = 
//   newA.innerHTML = string;
//   let newLi = document.createElement("<li class='dog-link'>");
//   newLi.appendChild(newA);
//   htmlElement.appendChild(newLi);
// };

// const dogList = 
attachDogLinks(dogs);