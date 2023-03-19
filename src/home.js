const mainContentText = 'Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart\'s delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris\' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream';
const homeBtn = document.querySelector('#homeTab');
const mainContentDiv = document.querySelector('.mainContent');
homeBtn.addEventListener('click', () => {
  mainContentDiv.innerText = mainContentText;
});
