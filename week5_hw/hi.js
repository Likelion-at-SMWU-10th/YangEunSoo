const clickForm = document.querySelector("#click-form");
const clickInput = document.querySelector("#click-form input");
const hi = document.querySelector("#hi");

function HelloSubmit(event) {
  event.preventDefault();
  clickForm.classList.add("hidden");
  const userName = clickInput.value;
  hi.innerText = `Welcome ${userName} !`;
  hi.classList.remove("hidden");
}

clickForm.addEventListener("submit", HelloSubmit);
