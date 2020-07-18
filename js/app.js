// button
scrollButton = document.getElementById("topBtn");
// scroll function
window.onscroll = function() {
  // Nav Scroll Bar
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("prgrsBar").style.width = scrolled + "%";
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
// end scroll function

// build the nav bar
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
  let element = document.getElementById(elem);
  element.scrollIntoView();
}
// end nav bar


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
      // Deactivate all sections Deactivate nav items
      let previous_sections = document.querySelectorAll(".your-active-class");
      [].forEach.call(previous_sections, function(el) {
        el.classList.remove("your-active-class");
      });
      // Deactivate all nav items
      let previous_nav_items = document.querySelectorAll(".navActive");
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
