/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
function headerInitialLoad() {
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

function mainContentInitialLoad() {
  const mainDiv = document.querySelector('#content');
  const div = document.createElement('div');
  div.innerText = `Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.
  `;
  div.classList.add('mainContent');
  mainDiv.append(div);
}

export default function initialLoad() {
  headerInitialLoad();
  menuTabInitialLoad();
  homeTabInitialLoad();
  aboutTabInitialLoad();
  mainContentInitialLoad();
}
