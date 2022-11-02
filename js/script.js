// Created by: Alex Nelson
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS20-UNIT3-03-JS-VOLUME-OF-SPHERE/sw.js",
    {
      scope: "/ICS20-UNIT3-03-JS-VOLUME-OF-SPHERE/",
    }
  )
}

/* This function calculates a users earnings and displays it */
function calculateVolume() {
  
  /* Input */
  const pi = Math.PI
  const radius = parseFloat(document.getElementById("radius").value)

  /* Proccess */
  const volume = 4.0 / 3.0 * pi * radius ** 3 

  /* Output */
  document.getElementById("volume").innerHTML =
    "The volume of your sphere is: " + volume + " cm³"
}