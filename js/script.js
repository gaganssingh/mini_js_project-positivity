// DOM SELECTORS
const btnSubmit = document.getElementById("btnSubmit");
const alertBox = document.getElementById("alertBox");
const resultsTable = document.getElementById("results");

// FUNCTIONS
// Generate numbers from start value to end value
const generateNumbersArray = (startingNumber, endingNumber) => {
  let numbersArray = [];
  for (let i = startingNumber; i <= endingNumber; i++) {
    // Push each number to the numbers array
    numbersArray.push(i);
  }
  return numbersArray;
};

// Display numbers and mark even numbers BOLD
const displayNumbers = (numbers) => {
  let tableRows = "";
  numbers.forEach((number) => {
    let className = "";
    // Assign CSS class to the numbers that are even
    if (number % 2 === 0) {
      className = "even";
    }

    // Append the current row to the end of the table body
    tableRows += `
      <tr>
        <td class="${className}">${number}</td>
      </tr>
    `;
  });

  // Append the constructed table to the tbody tag with id="results"
  resultsTable.innerHTML = tableRows;
};

// Capture values from user inputs, validate them & display them
const getValuesFromInputs = () => {
  // Reset alert box's content & display to none
  alertBox.innerHTML = "";
  alertBox.classList.add("d-none");

  // Get current start and end values
  const startValue = document.getElementById("startValue").value;
  const endValue = document.getElementById("endValue").value;

  // Validate Inputs: Check that inputs are not empty
  if (!startValue || !endValue) {
    alertBox.innerHTML = `
      <h3>Please enter a valid integer in the start and end fields.</h3>
      <p>These fields cannot be empty.</p>
    `;
    alertBox.classList.remove("d-none");
  }

  // Convert start value & end value to numbers
  const startValueAsNumber = +startValue;
  const endValueAsNumber = +endValue;

  // Validate Inputs: Check that inputs are valid integers
  if (
    typeof startValueAsNumber === "number" &&
    typeof endValueAsNumber === "number"
  ) {
    // Call generateNumbers function that returns
    // an array of numbers from start value to end value
    const numbersArray = generateNumbersArray(
      startValueAsNumber,
      endValueAsNumber
    );

    // Call displayNumbers function that takes each value
    // of the numbers array and displays them in the DOM
    displayNumbers(numbersArray);
  } else {
    alertBox.innerHTML = `
      <h3>Please enter a valid integer in the start and end fields.</h3>
      <p>Valid numbers are any positive or negative numbers. Fractional and decimal point numbers are invalid.</p>
    `;
    alertBox.classList.remove("d-none");
  }
};

// EVENT LISTENERS
btnSubmit.addEventListener("click", getValuesFromInputs);
