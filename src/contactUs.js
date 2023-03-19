const mainContentText = `Well.. Contact us..? Hmmm I'm sure we're in Paris but where exactly I really don't think they mentioned in the movie, Sorry.`;
const contactUsBtn = document.querySelector('#contactUs');
const mainContentDiv = document.querySelector('.mainContent');
contactUsBtn.addEventListener('click', () => {
  mainContentDiv.innerText = mainContentText;
});
