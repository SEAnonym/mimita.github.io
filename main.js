const upperPanel = document.querySelector('.upper-panel');
const homeFullLeftSide = document.querySelector('.home-left-side');
const navbarCategories = document.querySelector('.navbar-categories');
const navbarCategoriesItem = document.querySelector('.navbar-categories-item');
const mainCategories = document.querySelector('.main-categories');
const mainCategoriesItem = document.querySelector('.main-categories-item');
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

// newCollection.style.backgroundImage = 'url("/images/new-collection.jpg")'
// newCollection.style.backgroundSize = "cover";
// newCollection.style.backgroundRepeat = "no-repeat";
// newCollection.style.backgroundPosition = "center center";



const addNewCollection = function (name, f, img) {
  const html = `<div class="new-collection">
  <div>
    <span>New Collection: ${name} </span>
    <span>For: ${f}.</span>
  </div>
</div>`;

  section.insertAdjacentHTML('beforeend', html);
  const newCollection = document.querySelector('.new-collection');


  newCollection.style.backgroundImage = `url("${img}")`;
  newCollection.style.backgroundSize = "cover";
  newCollection.style.backgroundRepeat = "no-repeat";
  newCollection.style.backgroundPosition = "center center";
}
addNewCollection("Arrakis's Hero", "Man, Woman", "./images/new-collection.jpg");



