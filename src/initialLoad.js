/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
function headerInitalLoad() {
  const mainDiv = document.querySelector('#content');
  const div = document.createElement('div');
  div.classList.add('header');
  div.innerText = 'Ratatotuile';
  mainDiv.append(div);
}

function menuTabInitialLoad() {
  const mainDiv = document.querySelector('#content');
  const div = document.createElement('div');
  div.innerText = 'Menu';
  div.classList.add('tab');
  mainDiv.append(div);
}

function homeTabInitialLoad() {
  const mainDiv = document.querySelector('#content');
  const div = document.createElement('div');
  div.innerText = 'Home';
  div.classList.add('tab');
  mainDiv.append(div);
}

function aboutTabInitialLoad() {
  const mainDiv = document.querySelector('#content');
  const div = document.createElement('div');
  div.innerText = 'Contact us';
  div.classList.add('tab');
  mainDiv.append(div);
}

export default function initialLoad() {
  headerInitalLoad();
  menuTabInitialLoad();
  homeTabInitialLoad();
  aboutTabInitialLoad();
}
