let myOutput = getElementById("outputCelcius");

function tempCal(valNum) {
    valNum = parseFloat(valNum);
    outputCelcius.innerHTML=(valNum-32)/1.8;

  }