# Controle Alt Delete
## [DEMO](https://relaxed-swirles-1ce12c.netlify.com/)

![Screenshot](/src/Titel_def.svg) 

## Introduction
In this project we set out to educate citizens about the use of violence by the police in the Netherlands. To do this we made a static html/css/js website in which the story of the missing data is told.

## Table of content

* [Used data](#Used-data)
* [Concept and process](#My-concept-and-process)
* [What I learned](#What-I-learned)

## Used data

For this product we used the data provided by the police. These were excel sheets with the different types of violence used. Starting in the year 2012 until 2018. As well as the different integrity investigations in those years.

## Concept and process

We soon found out the data would not provide enough information to really build a story upon. So we decided to tell the story about the missing data. Because visually presenting nothing is quite hard and abstract we stepped away from d3.js and made a simpler, more understandable, article-like website. A lot of the images provided by the designers were .svg. Svg work a tad different than normal images in that they are vector based. This means that they are animateable. So I animated some of them. Underneath a piece of code that animates a circle to fill up.

``` html
<svg
      style="width:0;height:0;position:absolute;"
      aria-hidden="true"
      focusable="false"
    >
      <linearGradient id="svgTopCircleFill" x1="0.5" y1="1" x2="0.5" y2="0">
        <stop offset="0%" stop-opacity="1" stop-color="white" />
        <stop offset="100%" stop-opacity="1" stop-color="white">
          <animate
            attributeName="offset"
            values="0;1;0"
            repeatCount="0.5"
            dur="10s"
            begin="0s"
          />
        </stop>
        <stop offset="100%" stop-opacity="0" stop-color="white">
          <animate
            attributeName="offset"
            values="0;1;0"
            repeatCount="0.5"
            dur="10s"
            begin="0s"
          />
        </stop>
        <stop offset="100%" stop-opacity="0" stop-color="white" />
      </linearGradient>
    </svg>
```

Other than working with the SVGs and animating them I used a debounce function that makes the website lighter when working with the onscroll trigger. I also made the website responsive. I did this by using a combination of `vw`, `vh` and media queries. Below you see the debounce function.

``` js
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
```


## What I learned

* `element.getBoundingClientRect()` Returns a rectangle that contains the entire element. Used with svg.
* When working with scroll triggers make sure to use a debounce function to make the website not take too much ram from the device it is displayed on.
