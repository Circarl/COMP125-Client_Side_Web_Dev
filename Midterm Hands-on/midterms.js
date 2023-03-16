// Author: Carl Kevin Gasal
// Date: 03-15-2023



// Function to copy billing address to delivery address
function copyBillingAddress() {
    var billingName = document.getElementById("billing-name").value;
    var billingAddress = document.getElementById("billing-address").value;
    var billingCity = document.getElementById("billing-city").value;
    var billingState = document.getElementById("billing-state").value;
    var billingZip = document.getElementById("billing-zip").value;
  
    if (document.getElementById("same-as-billing").checked) {
      document.getElementById("delivery-name").value = billingName;
      document.getElementById("delivery-address").value = billingAddress;
      document.getElementById("delivery-city").value = billingCity;
      document.getElementById("delivery-state").value = billingState;
      document.getElementById("delivery-zip").value = billingZip;
    }
  }
  // Function to validate the form
  function validateForm() {
    var deliveryName = document.getElementById("delivery-name").value;
    var deliveryAddress = document.getElementById("delivery-address").value;
    var deliveryCity = document.getElementById("delivery-city").value;
    var deliveryState = document.getElementById("delivery-state").value;
    var deliveryZip = document.getElementById("delivery-zip").value;
  
    if (document.getElementById("same-as-billing").checked) {
      return true; // no need to validate if same as billing address
    }
  
    var isValid = true;
    // Check if each delivery address input is not empty, add 'invalid-input' class if it is empty

    if (deliveryName === "") {
      document.getElementById("delivery-name").classList.add("invalid-input");
      isValid = false;
    } else {
      document.getElementById("delivery-name").classList.remove("invalid-input");
    }
  
    if (deliveryAddress === "") {
      document.getElementById("delivery-address").classList.add("invalid-input");
      isValid = false;
    } else {
      document.getElementById("delivery-address").classList.remove("invalid-input");
    }
  
    if (deliveryCity === "") {
      document.getElementById("delivery-city").classList.add("invalid-input");
      isValid = false;
    } else {
      document.getElementById("delivery-city").classList.remove("invalid-input");
    }
  
    if (deliveryState === "") {
      document.getElementById("delivery-state").classList.add("invalid-input");
      isValid = false;
    } else {
      document.getElementById("delivery-state").classList.remove("invalid-input");
    }
  
    if (deliveryZip === "") {
      document.getElementById("delivery-zip").classList.add("invalid-input");
      isValid = false;
    } else {
      document.getElementById("delivery-zip").classList.remove("invalid-input");
    }
  
    return isValid;
  }