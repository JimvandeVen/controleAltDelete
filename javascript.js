document.addEventListener(
  "DOMContentLoaded",
  animateValue("counterTop", 0, 10260, 5500)
);

let svgGeweldsincidentenCircles = document.querySelectorAll(
  ".svgGeweldsincidentenCircle"
);
console.log(svgGeweldsincidentenCircles);

// function checkScroll(data){
//   svgGeweldsincidentenCircles.forEach(svgGeweldsincidentenCircle => {
//     if (svgGeweldsincidentenCircle.getBoundingClientRect().y < 200) {
//       svgGeweldsincidentenCircle.classList.add("svgGeweldCircleFill");
//       let geweld = svgGeweldsincidentenCircle.dataset.geweld
//       doewat(geweld)
//     } else {
//       svgGeweldsincidentenCircle.classList.remove("svgGeweldCircleFill");
//     }
//   })
// }
//
// function doewat(geweld){
//   animatePercentage(`${geweld}Percentage`, 0, 73, 2000)
// }

function checkScroll(e) {
  svgGeweldsincidentenCircles.forEach(svgGeweldsincidentenCircle => {
    if (svgGeweldsincidentenCircle.dataset.geweld == "fysiek") {
      if (svgGeweldsincidentenCircle.getBoundingClientRect().y < 300) {
        animatePercentage("fysiekPercentage", 0, 73, 2000);
      }
    } else if (svgGeweldsincidentenCircle.dataset.geweld == "stick") {
      if (svgGeweldsincidentenCircle.getBoundingClientRect().y < 300) {
        animatePercentage("stickPercentage", 0, 3, 2000);
      }
    } else if (svgGeweldsincidentenCircle.dataset.geweld == "pepperspray") {
      if (svgGeweldsincidentenCircle.getBoundingClientRect().y < 300) {
        animatePercentage("peppersprayPercentage", 0, 10, 2000);
      }
    } else if (svgGeweldsincidentenCircle.dataset.geweld == "dog") {
      if (svgGeweldsincidentenCircle.getBoundingClientRect().y < 300) {
        animatePercentage("dogPercentage", 0, 2, 2000);
      }
    } else {
      if (svgGeweldsincidentenCircle.getBoundingClientRect().y < 300) {
        animatePercentage("gunPercentage", 0, 12, 2000);
      }
    }
    // console.log(svgGeweldsincidentenCircle.getBoundingClientRect().y)
  });
}

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener("scroll", debounce(checkScroll));

function infoPopup() {
  let geweldsInzetPopup = document.querySelector("#geweldsInzetPopup");
  geweldsInzetPopup.classList.toggle("hidden");
  // geweldsInzetPopup.classList.toggle("hidden")
}

function animateValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 10 : -10;
  let stepTime = 10 * Math.abs(duration / range);
  let obj = document.getElementById(id);
  let timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function animatePercentage(id, start, end, duration) {
  // console.log(document.getElementById(id))
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(duration / range);
  let obj = document.getElementById(id);
  let timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

const sliderSVGs = document.querySelectorAll(".svgMissingData")

function checkSlide(e){
  sliderSVGs.forEach(sliderSVG => {
    if (sliderSVG.getBoundingClientRect().y < 500) {
      sliderSVG.classList.add("active")
    } else {
      sliderSVG.classList.remove("active")
    }
  })
}

window.addEventListener("scroll", debounce(checkSlide, 100));
