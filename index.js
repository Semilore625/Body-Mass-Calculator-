"use strict";
const metric = document.getElementById("metric");
const imperial = document.getElementById("imperial");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const heightUnit = document.getElementById("heightUnit");
const weightUnit = document.getElementById("weightUnit");

metric.addEventListener("click", () => {
  imperial.checked = false;
  heightUnit.textContent = "m";
  weightUnit.textContent = "kg";
});

imperial.addEventListener("click", () => {
  metric.checked = false;
  heightUnit.textContent = "inch";
  weightUnit.textContent = "lbs";
});
