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
function debounce(func, wait = 10, immediate = true) {
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
    if (sliderSVG.getBoundingClientRect().y < 600) {
      sliderSVG.classList.add("active")
    } else {
      sliderSVG.classList.remove("active")
    }
  })
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v3.2';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.addEventListener("scroll", debounce(checkSlide, 100));
