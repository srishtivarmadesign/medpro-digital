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


// Stores the timeout ID so we can cancel it later
let closeModalTimeout;

// Reusable function to OPEN the qualification modal
function openModal() {
  qualificationModal.classList.add("active");
}

// Reusable function to CLOSE the qualification modal
function closeModal() {
  qualificationModal.classList.remove("active");
  successMessage.classList.remove("show");
  clearTimeout(closeModalTimeout);
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

lightboxClose.addEventListener("click", function (event) {
  console.log(event.target === lightboxClose);

  lightbox.classList.remove("active");
});
lightbox.addEventListener("click", function () {
  console.log("Lightbox background clicked!");

  lightbox.classList.remove("active");
});

// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll(".faq-question");
console.log(faqQuestions);

faqQuestions.forEach(function (question) {
  console.log(question);
});

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const faqItem = question.closest(".faq-item");

    const isOpen = faqItem.classList.contains("active");

    document.querySelectorAll(".faq-item.active").forEach(function (item) {
      item.classList.remove("active");
    });

    if (!isOpen) {
      faqItem.classList.add("active");
    }
  });
});

// Select the qualification form
const qualificationForm = document.querySelector(".qualification-form");

console.log(qualificationForm);

qualificationForm.addEventListener("submit", function (event) {
  event.preventDefault();


  const telecaller = document.querySelector(
    'input[name="telecaller"]:checked'
  );

  const adsBudget = document.querySelector(
    'input[name="ads-budget"]:checked'
  );


  //objects
  const formData = {
    name: nameInput.value,
    clinicType: clinicTypeInput.value,
    telecaller: telecaller.value,
    adsBudget: adsBudget.value,
    whatsapp: whatsappInput.value,
  };

  // Validate WhatsApp number (must be exactly 10 digits)
  if (!/^\d{10}$/.test(formData.whatsapp)) {
    alert("Please enter a valid 10-digit WhatsApp number.");
    return;
  }

  console.log(formData);

  successMessage.classList.add("show");

  qualificationForm.reset();

  // Show success message
  successMessage.classList.add("show");

  // Close modal after 2 seconds
  closeModalTimeout = setTimeout(function () {
    closeModal();
    successMessage.classList.remove("show");
  }, 5000);
});


// Select the name input field
const nameInput = document.getElementById("name");

// Select all form fields
const clinicTypeInput = document.getElementById("clinic-type");
const whatsappInput = document.getElementById("whatsapp");

const successMessage = document.querySelector(".form-success");