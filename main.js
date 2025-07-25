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
      showMoreBtn.innerText = "Mostra di meno";
      section3.style.paddingTop = "30px";
      section3.style.paddingBottom = "30px";
    } else {
      isExpanded = false;
      cards.forEach((card) => card.classList.remove("hidden-card"));
      showMoreBtn.innerText = "Mostra di più";
          section3.style.paddingTop = "0px";
      section3.style.paddingBottom = "0px";
    }
  });
});

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  let scrollBtn = document.getElementById("scrollToTop");
  if (scrollBtn) {
      scrollBtn.addEventListener("click", scrollToTop);
  }
});