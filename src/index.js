// import { Age } from './age.js';
import 'bootstrap';
import './css/styles.css';
import { Age } from './age.js';

function handleCurrentAgeForm() {
    event.preventDefault();
    const currentAge = parseInt(document.getElementById('age-input').value);
    const age = new Age(currentAge);
    age.convertToPlanetAges();
    document.getElementById("merc-age").innerText = age.mercuryAge;
    document.getElementById("venus-age").innerText = age.venusAge;
    document.getElementById("mars-age").innerText = age.marsAge;
    document.getElementById("jupiter-age").innerText = age.jupiterAge;
    document.getElementById("current-age-form").setAttribute("class", "hidden");
    document.getElementById("results-div").removeAttribute("class");
}

function handleSecondAgeForm() {
    event.preventDefault();
    const currentAge = parseInt(document.getElementById('age-input').value);
    const secondAge = parseInt(document.getElementById('second-age-input').value);
    const age = new Age(currentAge, secondAge);
    age.findYearsFrom();
    document.getElementById("earth-years").innerText = age.yearsFrom.earthYears;
    document.getElementById("merc-years").innerText = age.yearsFrom.mercuryYears;
    document.getElementById("venus-years").innerText = age.yearsFrom.venusYears;
    document.getElementById("mars-years").innerText = age.yearsFrom.marsYears;
    document.getElementById("jupiter-years").innerText = age.yearsFrom.jupiterYears;
    const elements = document.getElementsByClassName("second-age");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = secondAge;
    }
    
    document.getElementById("results-div").setAttribute("class", "hidden");
    document.getElementById("results-div2").removeAttribute("class");
}

function handleJupiterDogYearsClick() {
    const currentAge = parseInt(document.getElementById('age-input').value);
    const age = new Age(currentAge);
    age.findJupiterDogYears();
    document.getElementById("dog-years").innerText = age.jupiterDogYears;

    document.getElementById("results-div2").setAttribute("class", "hidden");
    document.getElementById("results-div3").removeAttribute("class");
}

function handleMayflyLivesClick() {
    const currentAge = parseInt(document.getElementById('age-input').value);
    const age = new Age(currentAge);
    age.findMayflyLives();
    document.getElementById("mayfly-lives").innerText = age.mayflyLives;
    document.getElementById("results-div3").setAttribute("class", "hidden");
    document.getElementById("results-div4").removeAttribute("class");
}

function handleSunAgeClick() {
    const currentAge = parseInt(document.getElementById('age-input').value);
    const age = new Age(currentAge);
    age.findSunAge();
    document.getElementById("sun-lives").innerText = age.sunAge;
    document.getElementById("results-div4").setAttribute("class", "hidden");
    document.getElementById("results-div5").removeAttribute("class");
}
    

window.addEventListener("load", function() {
    document.getElementById("current-age-form").addEventListener("submit", handleCurrentAgeForm);
    document.getElementById("second-age-form").addEventListener("submit", handleSecondAgeForm);
    document.getElementById("jupiter-dog-years-btn").addEventListener("click", handleJupiterDogYearsClick);
    document.getElementById("mayfly-lives-btn").addEventListener("click", handleMayflyLivesClick);
    document.getElementById("last-btn").addEventListener("click", handleSunAgeClick);


});
