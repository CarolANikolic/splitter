// Get input fields
const bill = document.getElementById('bill');
const numberPeople = document.getElementById('number-people');
const inputTip = document.getElementById('custom');

// Get radio buttons
const radio = document.getElementsByTagName('input');

// Get spans
const warningBill = document.getElementById('warning-bill');
const warningNumberPeople = document.getElementById('warning-number-people');

// Get output fields
const outputTip = document.getElementById('output-tip');
const outputTotal = document.getElementById('output-total');

// Verification input field
// Add event listener for bill input field
bill.addEventListener('keyup', () => {
   verifyBill();
});

// Add event listener for people input field
numberPeople.addEventListener('keyup', () => {
    verifyPeople();
});

// Veridy input 0 for bill field
const verifyBill = () => {
    if(bill.value == '0') {
        bill.style.border = '2px solid tomato';
        warningBill.textContent = "Can't be zero";
    } else {
        bill.style.border = '';
        warningBill.textContent = '';
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

// Calculate tip based on default percentages
function calculateTip() {
    
   
    if(numberPeople.value > 0 || bill.value > 0) {

        for(i = 0; i < radio.length; i++) {
            if(radio[i].checked) {

                let totalTip = bill.value * radio[i].value / 100;
                let tipPerPerson = totalTip / numberPeople.value;

                let billPerPerson = bill.value / numberPeople.value;
                let totalPerPerson = billPerPerson + tipPerPerson;
                
                // alert(totalPerPerson);
                
                outputTip.innerHTML =  '$' + Math.round(tipPerPerson);
                outputTotal.innerHTML = '$' + Math.round(totalPerPerson);
                
            }  
        }
    }
}
   
// Calculate tip with custom tip percentage 
function calculateCustomTip() {   

    // Remove special characters from imput
    let customTip = inputTip.value;
    let customTipNumber = customTip.replace(/[^\w ]/g, '');
    console.log(customTipNumber);

    // Check if custom input is bigger then zero to initiate calculation
    if(customTipNumber > 0) { 

        //Calculate tip
        let totalTip = bill.value * customTipNumber / 100; //10
        let tipPerPerson = totalTip / numberPeople.value; //5

        // Calculate bill and tip per person
        let billPerPerson = bill.value / numberPeople.value; //
        let totalPerPerson = billPerPerson + tipPerPerson;
        
        // Add result to output on layout
        outputTip.innerHTML =  '$' + Math.round(tipPerPerson);
        outputTotal.innerHTML = '$' + Math.round(totalPerPerson);       
    } 
}
        
// Change output infinity and NaN
function removeInfinityNan() {
    if(outputTip.value == '$Infinity' || outputTip.value == '$NaN') {
        outputTip.innerHTML =  '$';
        outputTotal.innerHTML = '$';
    }
}

// Event listener for last input (number of people) being field
numberPeople.addEventListener('keyup', () => {

    calculateTip();
   
    calculateCustomTip();

    removeInfinityNan();

});

