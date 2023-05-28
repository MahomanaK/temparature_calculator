// My global variables for getting html elements into js
let inputFahrenheit = document.getElementById('inputFahrenheit');
let outputCelcius = document.getElementById('outputCelcius');

// Functions for converting temperature
inputFahrenheit.oninput = function () {
    let cel = ((parseFloat(
        inputFahrenheit.value) - 32) * 5) / 9;
    outputCelcius.value = parseFloat(cel.toFixed(2));
  
}

outputCelcius.oninput = function () {
  let fahren = (parseFloat(outputCelcius.value) * 9) / 5 + 32;
  inputFahrenheit.value = parseFloat(fahren.toFixed(2));

}