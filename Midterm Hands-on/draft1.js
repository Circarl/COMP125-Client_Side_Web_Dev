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
        setCustomValidity(billingState, "Please select your province.");
        isValid = false;
      } else {
        setCustomValidity(billingState, "");
      }  //state validation

    if (!isValid) {
      var invalidInput = document.querySelector(".invalid-input");
      if (invalidInput) {
        invalidInput.focus();
      }
    }
  
    return isValid;
  }
  
  
      
    //   if (deliveryLname === "") {
    //     setCustomValidity(document.getElementById("delivery-lname"), "Last name is required.");
    //     errors.push("Last name is required.");
    //     isValid = false;
    //   } else {
    //     setCustomValidity(document.getElementById("delivery-lname"), "");
    //   }
      
    //   if (deliveryAddress === "") {
    //     setCustomValidity(document.getElementById("delivery-address"), "Address is required.");
    //     errors.push("Address is required.");
    //     isValid = false;
    //   } else {
    //     setCustomValidity(document.getElementById("delivery-address"), "");
    //   }
      
    //   if (deliveryEmail === "") {
    //     setCustomValidity(document.getElementById("delivery-email"), "Email is required.");
    //     errors.push("Email is required.");
    //     isValid = false;
    //   } else {
    //     setCustomValidity(document.getElementById("delivery-email"), "");
    //   }
      
    //   if (deliveryCity === "") {
    //     setCustomValidity(document.getElementById("delivery-city"), "City is required.");
    //     errors.push("City is required.");
    //     isValid = false;
    //   } else {
    //     setCustomValidity(document.getElementById("delivery-city"), "");
    //   }
      
    //   if (deliveryState === "") {
    //     setCustomValidity(document.getElementById("delivery-state"), "State is required.");
    //     errors.push("State is required.");
    //     isValid = false;
    //   } else {
    //     setCustomValidity(document.getElementById("delivery-state"), "");
    //   }
      
    //   if (deliveryZip === "") {
    //     setCustomValidity(document.getElementById("delivery-zip"), "Zip code is required.");
    //     errors.push("Zip code is required.");
    //     isValid = false;
    //   } else {
    //     setCustomValidity(document.getElementById("delivery-zip"), "");
    //   }
      
    //   if (deliveryPhone === "") {
    //     setCustomValidity(document.getElementById("delivery-phone"), "Phone number is required.");
    //     errors.push("Phone number is required.");
    //     isValid = false;
    //   } else {
    //     setCustomValidity(document.getElementById("delivery-phone"), "");
    //   }

//       if (!isValid) {
//         var invalidInput = document.querySelector(".invalid-input");
//         if (invalidInput) {
//           invalidInput.focus();
//         }
//       }

//     return isValid;
//   }