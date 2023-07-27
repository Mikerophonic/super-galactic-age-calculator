// import { Age } from './age.js';
import 'bootstrap';
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

  function handleSecondAgeForm() {
    event.preventDefault();
    const currentAge = parseInt(document.getElementById('age-input').value);
    const secondAge = parseInt(document.getElementById('second-age-input').value);
    const age = new Age(currentAge, secondAge)
    age.findYearsFrom();
    document.getElementById("earth-years").innerText = age.yearsFrom.earthYears
    document.getElementById("merc-years").innerText = age.yearsFrom.mercuryYears
    document.getElementById("venus-years").innerText = age.yearsFrom.venusYears
    document.getElementById("mars-years").innerText = age.yearsFrom.marsYears
    document.getElementById("jupiter-years").innerText = age.yearsFrom.jupiterYears
    document.getElementsByClassName("second-age").innerText = secondAge;

    document.getElementById("results-div2").removeAttribute("class");
  }


  window.addEventListener("load", function() {
    document.getElementById("current-age-form").addEventListener("submit", handleCurrentAgeForm);
    document.getElementById("second-age-form").addEventListener("submit", handleSecondAgeForm);

  });
