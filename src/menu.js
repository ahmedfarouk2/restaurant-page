const mainContentText = '<ul><li>The Famous Ratatouille (OF COURSE DUH!)<li>Mac & Cheese (The French Version)<li>Koshary (National Egyptian Dish) <sup>Don\'t give me that look just look at the louvre it\'s full of Egyptian artifacts</sup></ul>';
const menuBtn = document.querySelector('#menuTab');
const mainContentDiv = document.querySelector('.mainContent');
menuBtn.addEventListener('click', () => {
  mainContentDiv.innerHTML = mainContentText;
});
