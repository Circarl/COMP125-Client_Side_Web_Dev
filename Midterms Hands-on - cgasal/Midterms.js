// Author: Carl Kevin Gasal
// Date: March 19, 2023

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // prevent default form submission behavior
  if (checkValidity()) { // check if the form is valid
      alert("Submitted Successfully."); // show the alert message
    }
});
//SAME AS BILLING FUNCTION
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
  var errorMessages = [];

  //SET CUSTOMVALIDITY
  function setCustomValidity(input, message) {
    input.setCustomValidity(message);
    if (message === "") {
      input.classList.remove("invalid-input");
    } else {
      input.classList.add("invalid-input");
      errorMessages.push({id: input.id, message: message});
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
  //fname validation
  var fnameInput = document.getElementById("billing-fname");
  var nameRegex = /^[a-zA-Z\s]*$/;
  if (!nameRegex.test(fnameInput.value)) {
    setCustomValidity(fnameInput, "Please enter a valid first name.");
    fnameInput.classList.add("invalid-input");
    isValid = false;
  } else {
    setCustomValidity(fnameInput, "");
  }
  var dfnameInput = document.getElementById("delivery-fname");
  var nameRegex = /^[a-zA-Z\s]*$/;
  if (!nameRegex.test(dfnameInput.value)) {
    setCustomValidity(dfnameInput, "Please enter a valid first name.");
    dfnameInput.classList.add("invalid-input");
    isValid = false;
  } else {
    setCustomValidity(dfnameInput, "");
  }
    //lname validation
    var lnameInput = document.getElementById("billing-lname");
    var nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(lnameInput.value)) {
      setCustomValidity(lnameInput, "Please enter a valid last name.");
      lnameInput.classList.add("invalid-input");
      isValid = false;
    } else {
      setCustomValidity(lnameInput, "");
    }
    var dlnameInput = document.getElementById("delivery-lname");
    var nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(dlnameInput.value)) {
      setCustomValidity(dlnameInput, "Please enter a valid last name.");
      dlnameInput.classList.add("invalid-input");
      isValid = false;
    } else {
      setCustomValidity(dlnameInput, "");
    }
  // name validation

  //EMAIL Validation
  var emailInput = document.getElementById("billing-email");
  emailInput.value = emailInput.value.toLowerCase();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  if (!emailRegex.test(emailInput.value)) {
    setCustomValidity(emailInput, "Please enter a valid email address.");
    emailInput.classList.add("invalid-input");
    isValid = false;
  } else {
    setCustomValidity(emailInput, "");
  }
    //EMAIL Validation
    var demailInput = document.getElementById("delivery-email");
    demailInput.value = demailInput.value.toLowerCase();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!emailRegex.test(demailInput.value)) {
      setCustomValidity(demailInput, "Please enter a valid email address.");
      demailInput.classList.add("invalid-input");
      isValid = false;
    } else {
      setCustomValidity(demailInput, "");
    }
  //EMAIL Validation

  //state validation
  var billingState = document.getElementById("billing-state");
  if (billingState.value === "") {
    setCustomValidity(billingState, "Please select your state.");
    billingState.classList.add("invalid-input");
    isValid = false;
  } else {
    setCustomValidity(billingState, "");
  }  
  var deliveryState = document.getElementById("delivery-state");
  if (deliveryState.value === "") {
    setCustomValidity(deliveryState, "Please select your state.");
    deliveryState.classList.add("invalid-input");
    isValid = false;
  } else {
    setCustomValidity(deliveryState, "");
  }  
  //state validation

  //PHONE VALIDATION ***
  var billingPhone = document.getElementById("billing-phone");
  var phoneRegex = /^\d{10}$/; //matches 10-digit phone number
  if (!phoneRegex.test(billingPhone.value)) {
    setCustomValidity(billingPhone, "Please enter a valid 10-digit phone number.");
    isValid = false;
  } else {
    setCustomValidity(billingPhone, "");
  } //phone validation

  //zip validation ***
  var billingZip = document.getElementById("billing-zip");
  var zipRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  if (!zipRegex.test(billingZip.value)) {
    setCustomValidity(billingZip, "Please enter a valid ZIP code in the format 'A1B2A3'.");
    isValid = false;
  } else {
    setCustomValidity(billingZip, "");
  } //zip validation
  
  if (errorMessages.length > 0) {
    var errorMessage = errorMessages[0].message;
    setCustomValidity(document.getElementById(errorMessages[0].id), errorMessage);
  }

  if (!isValid) {
    var invalidInput = document.querySelector(".invalid-input");
    if (invalidInput) {
      invalidInput.focus();
    }
  }

  return isValid;
}


