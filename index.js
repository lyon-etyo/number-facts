const input = document.getElementById("input-number");
const fact = input.nextElementSibling;
const url = "https://numbersapi.com/";
let number;

// Event to fetch data when user press Enter
input.addEventListener("keyup", evt => {
  number = input.value;
  if (evt.key === "Enter" && number !== "") {
    changeBackground();
    fact.firstElementChild.firstElementChild.innerText = number;
    return fetchData(url + number);
  }
});

// Event to fetch data when Document loaded
document.addEventListener("DOMContentLoaded", () => {
  number = new Date();
  changeBackground();
  input.parentElement.style.display = "block";
  fact.firstElementChild.firstElementChild.innerText = "Today";
  return fetchData(`${url}${number.getMonth() + 1}/${number.getDate()}/date`);
});

// Function to fetch data from Numbers API
function fetchData(url, spanContent) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      // show card element
      fact.style.display = "block";
      fact.lastElementChild.innerText = data;
    })
    .catch(err => console.log(err));
}

// Function to Change background color randomly
function changeBackground() {
  input.parentElement.style.backgroundColor = `
    rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
}
