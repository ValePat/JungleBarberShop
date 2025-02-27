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