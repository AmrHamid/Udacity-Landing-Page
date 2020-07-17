/**

 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
 */
// button
scrollButton = document.getElementById("myBtn");

window.onscroll = function() {
  // Nav Scroll Bar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  // Scroll to Top Button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let unorderedList = document.getElementById("unordered-list");
let containerCount = document.getElementsByClassName("landing__container").length;
for (i = 1; i <= containerCount; i++) {
  let newElement = document.createElement("li");
  let newElementID = "sample-nav-" + i;
  let elementSectionID = "section" + i;
  newElement.setAttribute("id", newElementID);
  newElement.setAttribute("class", "nav-list-item");
  newElement.onclick = function() {
    scrollTo(elementSectionID)
  };
  newElement.innerHTML = "section" + i;
  unorderedList.appendChild(newElement);
}

function scrollTo(elem) {
  var element = document.getElementById(elem);
  element.scrollIntoView();
}


// Add class 'active' to section when near top of viewport
// When the user scrolls the page, execute myFunction



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// sticky navbar
// Helper

// on scroll highlights
let activeElement = function(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top <= 165
  );
};

for (i = 1; i < containerCount + 1; i++) {
  let activeSection = document.getElementById("section" + i);
  let activeNavItem = document.getElementById("sample-nav-" + i);
  window.addEventListener("scroll", function(event) {
    if (activeElement(activeSection)) {
      // Deactivate all sections and Deactivate nav items
      var previous_sections = document.querySelectorAll(".your-active-class");
      [].forEach.call(previous_sections, function(el) {
        el.classList.remove("your-active-class");
      });
      var previous_nav_items = document.querySelectorAll(".navActive");
      [].forEach.call(previous_nav_items, function(el) {
        el.classList.remove("navActive");
      });
      // Activate current section
      activeSection.classList.add("your-active-class");

      // Activate Nav item
      activeNavItem.classList.add("navActive");
    }
  }, false);
}
