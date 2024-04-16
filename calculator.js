function calculateCalories() {
    // Get user input values
    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const activity = document.getElementById("activity").value;
    const goal = document.querySelector('input[name="goal"]:checked').value; // Assuming you added radio buttons for goal
  
    // Calculate BMR (Basal Metabolic Rate)
    let bmr;
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  
    // Calculate activity multiplier
    let activityMultiplier;
    switch (activity) {
      case "active":
        activityMultiplier = 1.55;
        break;
      case "moderate":
        activityMultiplier = 1.375;
        break;
      case "inactive":
        activityMultiplier = 1.2;
        break;
    }
  
    // Calculate calorie goals based on activity level and goal
    let calorieGoal;
    if (goal === "lose") {
      calorieGoal = bmr * activityMultiplier - 500; // Subtract 500 calories for weight loss
    } else if (goal === "maintain") {
      calorieGoal = bmr * activityMultiplier;
    } else if (goal === "gain") {
      calorieGoal = bmr * activityMultiplier + 500; // Add 500 calories for weight gain
    }
  
    // Display the results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your estimated daily calorie goal for ${goal} is: ${Math.round(calorieGoal)} calories`;
  }
  
  // Add event listener to the form submit button
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    calculateCalories();
  });