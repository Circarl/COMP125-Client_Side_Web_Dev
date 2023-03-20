// Author: Carl Kevin Gasal
// Date: March 19, 2023

//fname, lname, address, email, city , state, phone , zip 

//SAME AS BILLING FUNCTION

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // prevent default form submission behavior
    if (checkValidity()) { // check if the form is valid
        alert("Submitted Successfully."); // show the alert message
      }
  });
  
function copyBillingAddress() {
    if (document.getElementById("same-as-billing").checked) {
      // copy values from billing address to delivery address fields
      document.getElementById("delivery-fname").value = document.getElementById("billing-fname").value;
      document.getElementById("delivery-lname").value = document.getElementById("billing-lname").value;
      document.getElementById("delivery-address").value = document.getElementById("billing-address").value;
      document.getElementById("delivery-email").value = document.getElementById("billing-email").value;
      document.getElementById("delivery-city").value = document.getElementById("billing-city").value;
      document.getElementById("delivery-state").value = document.getElementById("billing-state").value;
      document.getElementById("delivery-phone").value = document.getElementById("billing-phone").value;
      document.getElementById("delivery-zip").value = document.getElementById("billing-zip").value;
    } else {
      // clear delivery address fields
      document.getElementById("delivery-fname").value = "";
      document.getElementById("delivery-lname").value = "";
      document.getElementById("delivery-address").value = "";
      document.getElementById("delivery-email").value = "";
      document.getElementById("delivery-city").value = "";
      document.getElementById("delivery-state").value = "";
      document.getElementById("delivery-phone").value = "";
      document.getElementById("delivery-zip").value = "";
    }
  }
      //setCustomValidity Function

// CHECKVALIDITY FUNCTION
function checkValidity() {
    var formInputs = document.querySelectorAll("#address-form input");
  
    var isValid = true;
  
    function setCustomValidity(input, message) {
      input.setCustomValidity(message);
      if (message === "") {
        input.classList.add("valid-input");
        input.classList.remove("invalid-input");
      } else {
        input.classList.add("invalid-input");
      }
      input.reportValidity();
    }
  
    formInputs.forEach(function(input) {
      if (input.value === "") {
        setCustomValidity(input, "This field is required.");
        isValid = false;
      } else {
        setCustomValidity(input, "");
      }
    });

    //state validation
    var billingState = document.getElementById("billing-state");
      if (billingState.value === "") {
        setCustomValidity(billingState, "Please select your state.");
        isValid = false;
      } else {
        setCustomValidity(billingState, "");
      }  //state validation

    //phone validation
    var billingPhone = document.getElementById("billing-phone");
    var phoneRegex = /^\d{10}$/; //matches 10-digit phone number
    if (!phoneRegex.test(billingPhone.value)) {
    setCustomValidity(billingPhone, "Please enter a valid 10-digit phone number.");
    isValid = false;
    } else {
    setCustomValidity(billingPhone, "");
    } //phone validation

      //zip validation
      var billingZip = document.getElementById("billing-zip");
      var zipRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
      if (!zipRegex.test(billingZip.value)) {
        setCustomValidity(billingZip, "Please enter a valid ZIP code in the format 'A1B2A3'.");
        isValid = false;
      } else {
        setCustomValidity(billingZip, "");
      } //zip validation
    if (!isValid) {
      var invalidInput = document.querySelector(".invalid-input");
      if (invalidInput) {
        invalidInput.focus();
      }
    }
  
    return isValid;
  }
