document.getElementById("temperatureForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var temperatureInput = document.getElementById("temperature");
    var temperature = parseFloat(temperatureInput.value);
    var unit = document.querySelector('input[name="unit"]:checked').value;
  
    if (isNaN(temperature)) {
      document.getElementById("result").textContent = "Invalid input. Please enter a valid temperature.";
      return;
    }
  
    var convertedTemperature, resultText;
  
    if (unit === "Celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      resultText = temperature + "°C is equal to " + convertedTemperature.toFixed(2) + "°F.";
    } else if (unit === "Fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      resultText = temperature + "°F is equal to " + convertedTemperature.toFixed(2) + "°C.";
    }
  
    document.getElementById("result").textContent = resultText;
  });
  