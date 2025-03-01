import './style.css'

// click-to-scroll behavior
$(".navbar-links a").click(function (e) {
  e.preventDefault();
  var section = this.href;
  var sectionClean = section.substring(section.indexOf("#"));
  $("html, body").animate({
    scrollTop: $(sectionClean).offset().top
  }, 1000, function () {
    window.location.hash = sectionClean;
  });
});

//Header menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const cards = document.querySelectorAll("#cardsContainer .card");
  const section3 = document.getElementById("section3");
  var isExpanded = false;

  showMoreBtn.addEventListener("click", function () {
    if (isExpanded === false) {
      isExpanded = true;
      cards.forEach((card) => card.classList.add("hidden-card"));
    } else {
      isExpanded = false;
      cards.forEach((card) => card.classList.remove("hidden-card"));
    }
  });
});