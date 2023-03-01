'use strict'

const body = document.querySelector('body');
const upperPanel = document.querySelector('.upper-panel');
const homeFullLeftSide = document.querySelector('.home-left-side');
const navbarCategories = document.querySelector('.navbar-categories');
const navbarCategoriesItem = document.querySelector('.navbar-categories-item');
const mainCategories = document.querySelector('.main-categories');
const upperPanelHeader = document.querySelector('.upper-panel-header');
const upperPanelHeaderItem = document.querySelector('.upper-panel-header-item');
const classLogo = document.querySelector('.logo');
const upperPanelHeaderCTA = document.querySelector('.call-to-action-btn');
const headerImg = document.querySelector('.call-to-action-btn');

const section = document.querySelector('.section');

const categories = {
  id: ['New', 'Basic', 'Athletics', 'Jeans', 'Coats | Trench Coats', 'Jackets | Puffers', 'Sweaters | Cardigans', 'Hoodies | SweatShirts', 'Suits', 'Shirts', 'T-Shirts', 'Trousers'],
}

// Header IMG
const addHeaderImg = function (url) {
  headerImg.style.backgroundImage = `url(${url})`;
  headerImg.style.backgroundSize = "cover";
  headerImg.style.backgroundRepeat = "no-repeat";
  headerImg.style.backgroundPosition = "center center";
}
addHeaderImg('./images/designer-making-design.png');

// Adding categories Items
const addCategoriesItem = function (text) {
  return `<span class="main-categories-item">${text}</span>`
}


categories.id.forEach(id => {
  const addItem = addCategoriesItem(id);
  mainCategories.insertAdjacentHTML('beforeend', addItem);
})


const mainCategoriesItem = document.querySelectorAll('.main-categories-item');

const addNewCollection = function (name, f, img) {
  const html = `<div class="new-collection">
  <div>
    <span>New Collection: ${name} </span>
    <span>For: ${f}.</span>
  </div>
</div>`;


  section.insertAdjacentHTML('beforeend', html);
  const newCollection = document.querySelector('.new-collection');

  newCollection.style.backgroundImage = `url(${img})`;
  newCollection.style.backgroundSize = "cover";
  newCollection.style.backgroundRepeat = "no-repeat";
  newCollection.style.backgroundPosition = "center center";
  return newCollection;
}

const collectionArrakis = addNewCollection("Arrakis's Hero", "Man, Woman", './images/new-collection.jpg');
const newsPage = document.querySelectorAll('.main-categories-item')[0];


let i = 0;
classLogo.addEventListener('click', () => {
  if (i === 0) {
    i++;
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    mainCategories.style.color = 'white';
    body.style.transition = '1s'
    classLogo.style.borderColor = 'white';
  } else {
    i--;
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    mainCategories.style.color = 'var(--least-text-color)';
    body.style.transition = '1s'
    classLogo.style.borderColor = 'black';
  }
})

// newsPage.addEventListener('click', function () {
//   // Delete middle line
//   upperPanelHeaderCTA.style.display = 'none';
//   collectionArrakis.style.display = 'none';

//   // add middle layout


// })


// Learning AJAX Calls <3 everything for this project bitchaaaaaaaaaaas!

// 'https://dummyjson.com/products'


// const getProducts = function (url) {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       return data;
//     })
// }

// const allProducts = getProducts('https://dummyjson.com/products');
// console.log(allProducts);


// const request = fetch('https://dummyjson.com/products');
// console.log(request);

// const getProducts = function (url) {
//   fetch(url)
//     .then(function (response) {
//       console.log(response);
//       return response.json();

//     })
//     .then(function (data) {
//       console.log(data);
//     })
// }

const getProducts = function (url) {
  const data = fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data.products;
    });
  return data;
}


const data0 = getProducts('https://dummyjson.com/products');
console.log(data0);
data0.then(data => console.log(data[0].title));