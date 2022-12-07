// Get input fields
const bill = document.getElementById('bill');
const numberPeople = document.getElementById('number-people');

// ???? how to get bill and people value to add on function????
let billAmmount = document.getElementById('bill').value;
let people = numberPeople.value;


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

