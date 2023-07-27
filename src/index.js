// import { Age } from './age.js';
import './css/styles.css';
import { Age } from './age.js'

function handleCurrentAgeForm() {
    event.preventDefault();
    const currentAge = parseInt(document.getElementById('age-input').value);
    const age = new Age(currentAge)
    age.convertToPlanetAges();
    document.getElementById("merc-age").innerText = age.mercuryAge
    document.getElementById("venus-age").innerText = age.venusAge
    document.getElementById("mars-age").innerText = age.marsAge
    document.getElementById("jupiter-age").innerText = age.jupiterAge

    document.getElementById("results-div").removeAttribute("class");
  }

  window.addEventListener("load", function() {
    document.getElementById("current-age-form").addEventListener("submit", handleCurrentAgeForm);
  });
