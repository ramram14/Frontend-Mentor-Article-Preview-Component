sharePopup = document.querySelector(".card-article__profile-detail-popup");
profileDetail = document.querySelector(".card-article__profile__detail");
const shareButton = document.querySelector(".share-button");

const width = window.innerWidth;

shareButton.addEventListener("click", () => {
  if (!width > 765) profileDetail.classList.toggle("hidden");

  sharePopup.classList.toggle("hidden");
  shareButton.classList.toggle("share-button-toggle-color");
});
