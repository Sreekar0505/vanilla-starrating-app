import "./styles.css";

const stars = document.querySelectorAll("span");
const ratingText = document.querySelector("#ratingText");
const resetBtn = document.querySelector(".resetButton");

let rating = 0;

initialize();

function initialize() {
  stars.forEach((elm, idx) => {
    elm.addEventListener("click", () => onAction(idx, "click"));
    elm.addEventListener("mouseover", () => onAction(idx, "hoverin"));
    elm.addEventListener("mouseout", () => onAction(idx, "hoverout"));
  });
  resetBtn.addEventListener("click", resetRating);
}

function resetRating() {
  rating = 0;
  stars.forEach((elm) => {
    const list = elm.classList;
    list.remove("selected");
  });
  ratingText.innerHTML = `Rating: ${rating}`;
}

function onAction(index, action) {
  let comparer;
  if (action === "click") {
    rating = index + 1;
    comparer = rating;
  } else if (action === "hoverin") {
    comparer = index + 1;
  } else {
    comparer = rating;
  }

  stars.forEach((elm, idx) => {
    const list = elm.classList;
    if (idx < comparer) {
      list.add("selected");
    } else {
      list.remove("selected");
    }
  });
  ratingText.innerHTML = `Rating: ${rating}`;
}
