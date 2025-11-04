
    function calculateBMI() {
      var weight = document.getElementById("weight").value;
      var height = document.getElementById("height").value;

      // Validate input
      if (weight === "" || height === "" || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid values!";
        return;
      }

      var bmi = weight / (height * height);
      var bmiRounded = bmi.toFixed(2);

      document.getElementById("result").innerText = "Your BMI is " + bmiRounded;
    }
