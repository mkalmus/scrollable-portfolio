// window.addEventListener("scroll", function(){
//   var header = document.querySelector("header")
//   //if we're scrolled at all, add sticky class
//   header.classList.toggle("sticky", window.scrollY > 0);
// })

var nav_links = document.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}



//ADD LOGIC to also change active nav based on current scroll location