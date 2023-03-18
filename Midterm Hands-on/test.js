// Author: Carl Kevin Gasal
// Date: 03-15-2023

// Function to copy billing address to delivery address
let switchers = [...document.querySelectorAll('.switcher')];

switchers.forEach(item => {
item.addEventListener('click', function() {
switchers.forEach(item => item.parentElement.classList.remove('is-active'));
this.parentElement.classList.add('is-active');
});
});

function copyBillingAddress() {
let billingFName = document.getElementById("billing-Fname").value;
let billingLName = document.getElementById("billing-Lname").value;
let billingAddress = document.getElementById("billing-address").value;
let billingGender = document.getElementById("billing-gender").value;
let billingPhone = document.getElementById("billing-phone").value;
let billingYear = document.getElementById("billing-year").value;

if (document.getElementById("form-duplicate").checked) {
document.getElementById("delivery-Fname").value = billingFName;
document.getElementById("delivery-Lname").value = billingLName;
document.getElementById("delivery-address").value = billingAddress;
document.getElementById("delivery-gender").value = billingGender;
document.getElementById("delivery-phone").value = billingPhone;
document.getElementById("delivery-year").value = billingYear;
}
}

// Function to validate the form
function validateForm() {
let formFields = document.querySelectorAll('#address-form input, #address-form select');

// Loop through form fields and check their validity
let isValid = true;
formFields.forEach(field => {
if (!field.checkValidity()) {
field.reportValidity(); // show validation message if invalid
isValid = false;
}
});

if (!isValid) {
return false; // prevent form submission if any fields are invalid
}

// Alert that submit button is clicked
alert('Submit button clicked!');

return true; // allow form submission if all fields are valid
}

let deliveryFName = document.getElementById("delivery-Fname").value;
let deliveryLName = document.getElementById("delivery-Lname").value;
let deliveryAddress = document.getElementById("delivery-address").value;
let deliveryGender = document.getElementById("delivery-gender").value;
let deliveryPhone = document.getElementById("delivery-phone").value;
let deliveryYear = document.getElementById("delivery-year").value;

let isDeliveryFormValid = true;
// Check if each delivery address input is not empty, add 'invalid-input' class if it is empty
if (deliveryFName.trim() === "") {
document.getElementById("delivery-Fname").classList.add("invalid-input");
isDeliveryFormValid = false;
} else {
document.getElementById("delivery-Fname").classList.remove("invalid-input");
}

if (deliveryLName.trim() === "") {
document.getElementById("delivery-Lname").classList.add("invalid-input");
isDeliveryFormValid = false;
} else {
document.getElementById("delivery-Lname").classList.remove("invalid-input");
}

if (deliveryAddress.trim() === "") {
document.getElementById("delivery-address").classList.add("invalid-input");
isDeliveryFormValid = false;
} else {
document.getElementById("delivery-address").classList.remove("invalid-input");
}
// Validate gender
if (deliveryGender === "-- Select gender --") {
    document.getElementById("delivery-gender").setCustomValidity("Please select a gender.");
    document.getElementById("delivery-gender").classList.add("invalid-input");
    isValid = false;
    } else {
    document.getElementById("delivery-gender").setCustomValidity("");
    document.getElementById("delivery-gender").classList.remove("invalid-input");
    }
    
    // Validate phone number
    if (deliveryPhone.trim() === "") {
    document.getElementById("delivery-phone").setCustomValidity("Please enter a valid phone number.");
    document.getElementById("delivery-phone").focus();
    document.getElementById("delivery-phone").style.border = "2px solid red";
    isValid = false;
    } else if (!/^\d{10}$/.test(deliveryPhone.trim())) {
    document.getElementById("delivery-phone").setCustomValidity("Please enter a 10-digit phone number.");
    document.getElementById("delivery-phone").focus();
    isValid = false;
    } else {
    document.getElementById("delivery-phone").setCustomValidity("");
    }
    
    // Validate year
    if (deliveryYear.trim() === "") {
    document.getElementById("delivery-year").setCustomValidity("Please enter a year.");
    document.getElementById("delivery-year").focus();
    isValid = false;
    } else if (!/^\d{4}$/.test(deliveryYear.trim())) {
    document.getElementById("delivery-year").setCustomValidity("Please enter a valid year.");
    document.getElementById("delivery-year").focus();
    isValid = false;
    } else {
    document.getElementById("delivery-year").setCustomValidity("");
    }
    