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

// Reusable function to OPEN the qualification modal
function openModal() {
  qualificationModal.classList.add("active");
}

// Reusable function to CLOSE the qualification modal
function closeModal() {
  qualificationModal.classList.remove("active");
}

const navButton = document.querySelector(".btn-nav");
console.log(navButton);
navButton.addEventListener("click", function () {
  console.log("Navigation button clicked!");

  // Add the "active" class to the modal
  // This changes the modal from hidden to visible
  openModal();
});

// Find the close button inside the modal
// We will use this button to close the form when the user clicks "×"
const closeButton = document.querySelector(".modal-close");
console.log(closeButton);
closeButton.addEventListener("click", function () {
  console.log("Close button clicked!");

  closeModal();
});

const heroButton = document.querySelector(".hero .btn-primary");
console.log(heroButton);
heroButton.addEventListener("click", function () {
  console.log("Hero button clicked!");

  openModal();
});
// NOTE:
// navButton and heroButton are different elements.
// They are only the triggers.
//
// qualificationModal is a separate DOM element.
// Both click handlers use the same qualificationModal variable,
// so both buttons affect the same modal.
// A reference is a way for a JavaScript variable to access an existing object/DOM element.
const finalCtabutton = document.querySelector(".final-cta .btn.btn-primary");
console.log(finalCtabutton);
finalCtabutton.addEventListener("click", function () {
  console.log("Final CTA button clicked!");

  openModal();
});

const clinicsImage = document.querySelector(".clinics-need-image img");
console.log(clinicsImage);
console.log(clinicsImage.src);

clinicsImage.addEventListener("click", function () {
  console.log("Clinics image clicked!");

  lightboxImage.src = clinicsImage.src;
  lightbox.classList.add("active");
});
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
console.log(lightbox);
console.log(lightboxImage);

// Find the lightbox close button
const lightboxClose = document.querySelector(".lightbox-close");
console.log(lightboxClose);

lightboxClose.addEventListener("click", function () {
  console.log("Lightbox close button clicked!");

  lightbox.classList.remove("active");
});
