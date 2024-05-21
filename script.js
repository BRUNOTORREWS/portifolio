const nameParagraph = document.getElementById("name");
const ageParagraph = document.getElementById("age");
const emailParagraph = document.getElementById("email");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const editButton = document.getElementById("editButton");
const contactForm = document.getElementById("contactForm");

editButton.addEventListener("click", function () {
  nameInput.value = nameParagraph.textContent.split(": ")[1];
  ageInput.value = ageParagraph.textContent.split(": ")[1];
  emailInput.value = emailParagraph.textContent.split(": ")[1];

  contactForm.style.display = "block";
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  nameParagraph.textContent = `Nome: ${nameInput.value}`;
  ageParagraph.textContent = `Idade: ${ageInput.value}`;
  emailParagraph.textContent = `Email: ${emailInput.value}`;

  contactForm.reset();
  contactForm.style.display = "none";
});
