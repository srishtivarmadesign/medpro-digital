console.log("Javascript file is linked successfully!");

// Select the qualification modal from the HTML
// document → refers to the current HTML page
// querySelector() → finds the first element matching a CSS selector
// ".qualification-modal" → the CSS class we want to find
// const qualificationModal → stores the found element in a variable
// purpose : We need a reference to the modal so JavaScript can latershow it,
// hide it, or modify it when the user interacts with the page.
const qualificationModal = document.querySelector(".qualification-modal");
console.log(qualificationModal);

const navButton = document.querySelector(".btn-nav");
console.log(navButton);
navButton.addEventListener("click", function () {
  console.log("Navigation button clicked!");

  // Add the "active" class to the modal
  // This changes the modal from hidden to visible
  qualificationModal.classList.add("active");
});

// Find the close button inside the modal
// We will use this button to close the form when the user clicks "×"
const closeButton = document.querySelector(".modal-close");
console.log(closeButton);
closeButton.addEventListener("click", function () {
  console.log("Close button clicked!");

  qualificationModal.classList.remove("active");
});
