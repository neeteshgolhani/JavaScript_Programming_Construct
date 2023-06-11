
function checkDateRange() {
    // Retrieve input elements for day and month
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
  
    // Get the numerical values of day and month from the input elements
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
      
    // Check if the day falls within the specified date range (March 20 to June 20)
    if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
        console.log("The day is within the date range.");
      } else {
        console.log("The day is outside the date range.");
      }
    }
  