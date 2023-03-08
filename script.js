let phrases = document.getElementById("change-text");
let submitButton = document.getElementsByClassName("submit-button");
let password = document.getElementById("password");
let re_password = document.getElementById("re-password");
let password_message = document.getElementsByClassName("password-message");

// Array of texts to display
const textArray = [
  "Happiness is not a destination, it's a journey. Happiness is not tomorrow, it is now. Happiness is not a dependency, it is a decision. Happiness is what you are, not what you have. - Aristotle",
  "We should not speak so that our words are heard, but so that they are understood. - Epictetus",
  "The first and greatest victory is to conquer yourself. - Plato",
  "The more man meditates upon good thoughts, the better will be his world and the world at large. - Confucius",
  "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther",
];

let index = 0; // Index to keep track of the current text

//Set an interval to change text every 7000 miliseconds = 7s
setInterval(() => {
  phrases.classList.remove("show"); // Remove the "show" class to fade out the text

  setTimeout(() => {
    // Use a timeout to wait for the fade out to finish before changing the text
    phrases.textContent = textArray[index];
    index = (index + 1) % textArray.length;

    phrases.classList.add("show"); // Add the "show" class to fade in the text
  }, 500);
}, 7000);


function submitClick(event) {
    if (password.value !== re_password.value) {
      password_message[0].style.display = "block"; // show the error message
      event.preventDefault();
    } else {
      password_message[0].style.display = "none"; // hide the error message

    }
} 


