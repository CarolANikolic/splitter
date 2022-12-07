// Get input fields
const bill = document.getElementById('bill');
const numberPeople = document.getElementById('number-people');

// Get spans
const warningBill = document.getElementById('warning-bill');
const warningNumberPeople = document.getElementById('warning-number-people');


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

// Veridy input 0 for number of people field
const verifyPeople = () => {
    if(numberPeople.value == '0') {
        numberPeople.style.border = '2px solid tomato';
        warningNumberPeople.textContent = "Can't be zero";
    } else {
        numberPeople.style.border = '';
        warningNumberPeople.textContent = '';
    }
}


// Calculate tip 
function getRadioValue() {
    let radio = document.getElementsByTagName('input');
    for(i = 0; i < radio.length; i++) {
        if(radio[i].checked) {

            let totalTip = bill.value * radio[i].value / 100;
            let tipPerPerson = totalTip / numberPeople.value;

            let billPerPerson = bill.value / numberPeople.value;
            let totalPerPerson = billPerPerson + tipPerPerson;
            
            alert(totalPerPerson);
            
        }   
    }
}

// Event listener for last input (number of people) being field
numberPeople.addEventListener('blur', () => {

    getRadioValue();
 
});

