// Get input fields
const bill = document.getElementById('bill');
const numberPeople = document.getElementById('number-people');
const inputTip = document.getElementById('custom');

// Get spans
const warningBill = document.getElementById('warning-bill');
const warningCustomTip = document.getElementById('warning-custom');
const warningNumberPeople = document.getElementById('warning-number-people');

// Get default tip percentage button and save it's value in span element
const tipButtons = document.querySelectorAll('.bt-tip');
const saveValue = document.getElementById('tip');

// Get output fields
const outputTip = document.getElementById('output-tip');
const outputTotal = document.getElementById('output-total');

// Get reset button
const reset = document.getElementById('reset-bt');



// Add event listener for people input field
numberPeople.addEventListener('keyup', () => {
    verifyPeople();
});


// Verify input 0 for bill field
const verifyBill = () => {
    if(bill.value == '0') {
        bill.style.border = '2px solid tomato';
        warningBill.textContent = "Can't be zero";
    } else {
        bill.style.border = '';
        warningBill.textContent = '';
    }
}

// Verify input 0 for custom tip field
const verifyCustomTip = () => {
    if(inputTip.value == '0') {
        inputTip.style.border = '2px solid tomato';
        warningCustomTip.textContent = "Can't be zero";
        inputTip.style.backgroundColor = 'white';
        inputTip.style.color = 'hsl(183, 100%, 15%)';

    } else {
        inputTip.style.border = '';
        warningCustomTip.textContent = '';
        inputTip.style.backgroundColor = '';
        inputTip.style.color = '';
    }
}

// Verify input 0 for number of people field
const verifyPeople = () => {
    if(numberPeople.value == '0') {
        numberPeople.style.border = '2px solid tomato';
        warningNumberPeople.textContent = "Can't be zero";
    } else {
        numberPeople.style.border = '';
        warningNumberPeople.textContent = '';
    }
}
   
// Calculate tip with custom tip percentage 
function calculateCustomTip() {   
   
    // Remove special characters from imput
    let customTip = inputTip.value;
    let customTipNumber = customTip.replace(/[^\w ]/g, '');


    // Check if custom input is bigger then zero to initiate calculation
    if(customTipNumber > 0 && numberPeople.value > 0 && bill.value > 0) { 

        //Calculate tip
        let totalTip = bill.value * customTipNumber / 100; //10
        let tipPerPerson = totalTip / numberPeople.value; //5

        // Calculate bill and tip per person
        let billPerPerson = bill.value / numberPeople.value; //
        let totalPerPerson = billPerPerson + tipPerPerson;
        
        // Add result to output on layout
        outputTip.innerHTML =  '$' + Math.round(tipPerPerson);
        outputTotal.innerHTML = '$' + Math.round(totalPerPerson); 
           
    } else {
        outputTip.innerHTML =  '$' ;
        outputTotal.innerHTML = '$'; 
    } 
}
        
// Remove possible Infinity and NaN from layout output
function removeInfinityNan() {
    outputTip.innerHTML =  '$';
    outputTotal.innerHTML = '$';
}

function calculateTip() {
    // Select buttons with class tip. Iterate through the buttons to see if there was a click event
    tipButtons.forEach((tip) => {
        tip.addEventListener("click", () => {
            
            //Reset custom field if clicked in default percentaged after inputing custom percentage
            if(inputTip.value > 0) {
                inputTip.value = '';
                inputTip.value = inputTip.valueinnerHTML = '';
            }
            
            // Fix NaN
            bill.value = bill.value || '';
            tip.value = tip.value || '';
            numberPeople.value = numberPeople.value || '';

            // Select the element to save value
            tipButtons.innerHTML = tip.innerHTML;

            // Remove infinity and NaN result
            if(outputTip.value == '$Infinity' || outputTip.value == '$NaN') {
                removeInfinityNan();
            } 
            
            // Prevents infinity result
            if(numberPeople.value > 0 && bill.value > 0) {
            // Calculate tip and total
            let totalTip = bill.value * tip.value / 100;
            let tipPerPerson = totalTip / numberPeople.value;
            let billPerPerson = bill.value / numberPeople.value;
            let totalPerPerson = billPerPerson + tipPerPerson;
            
            // Round tip and bill result
            outputTip.innerHTML =  '$' + Math.round(tipPerPerson * 10) / 10;
            outputTotal.innerHTML = '$' + Math.round(totalPerPerson * 10) / 10;
            }
        });

        bill.addEventListener('keyup', () => {

            // Select the element to save value
            tipButtons.innerHTML = tip.innerHTML;

            // Remove infinity and NaN result
            if(outputTip.value == '$Infinity' || outputTip.value == '$NaN') {
                removeInfinityNan();
            } 
            
            // Prevents infinity result
            if(numberPeople.value > 0 && bill.value > 0) {
                
                // Calculate tip and total
                let totalTip = bill.value * tip.value / 100;
                let tipPerPerson = totalTip / numberPeople.value;
                let billPerPerson = bill.value / numberPeople.value;
                let totalPerPerson = billPerPerson + tipPerPerson;
                
                // Round tip and bill result
                outputTip.innerHTML =  '$' + Math.round(tipPerPerson * 10) / 10;
                outputTotal.innerHTML = '$' + Math.round(totalPerPerson * 10) / 10;
            }
        });

        numberPeople.addEventListener('keyup', () => {

            // Select the element to save value
            tipButtons.innerHTML = tip.innerHTML;

            // Remove infinity and NaN result
            if(outputTip.value == '$Infinity' || outputTip.value == '$NaN') {
                removeInfinityNan();
            } 
            
            // Prevents infinity result
            if(numberPeople.value > 0 && bill.value > 0) {
                
                // Calculate tip and total
                let totalTip = bill.value * tip.value / 100;
                let tipPerPerson = totalTip / numberPeople.value;
                let billPerPerson = bill.value / numberPeople.value;
                let totalPerPerson = billPerPerson + tipPerPerson;
                
                // Round tip and bill result
                outputTip.innerHTML =  '$' + Math.round(tipPerPerson * 10) / 10;
                outputTotal.innerHTML = '$' + Math.round(totalPerPerson * 10) / 10;
            }
            console.log('test');
        });

        inputTip.addEventListener('keyup', () => {
            calculateCustomTip();
        });
    });
}


// Event listener for input bill being field
bill.addEventListener('keyup', () => {

    // Verify bill input field
    verifyBill();

    // Calculate with custom percentage values
    calculateTip();
   
    // Calculate with default tip percetage values
    calculateCustomTip();

});

// Event listener for input custom tip being field
inputTip.addEventListener('keyup', () => {

    // Verify custom tip input field
    verifyCustomTip();

    // Calculate with default tip percetage values
    calculateTip();
   
    // Calculate with custom percentage values
    calculateCustomTip();

});

// Event listener for input number of people being field
numberPeople.addEventListener('keyup', () => {

    // Verify number of people input field
    verifyPeople();

    // Calculate with default tip percetage values
    calculateTip();
   
    // Calculate with custom percentage values
    calculateCustomTip();

});

// Event listener for button reset - reseting result in output

reset.addEventListener('click', () => {

    outputTip.innerHTML =  '$';
    outputTotal.innerHTML = '$';

});

