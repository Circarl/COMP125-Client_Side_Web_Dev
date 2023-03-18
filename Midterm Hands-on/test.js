// Author: Carl Kevin Gasal
// Date: 03-15-2023



// Function to copy billing address to delivery address
function copyBillingAddress() {
    var billingFName = document.getElementById("billing-Fname").value;
    var billingLName = document.getElementById("billing-Lname").value;
    var billingAddress = document.getElementById("billing-address").value;
    var billingGender = document.getElementById("billing-gender").value;
    var billingPhone = document.getElementById("billing-phone").value;
    var billingYear = document.getElementById("billing-year").value;
  
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
    var deliveryName = document.getElementById("delivery-name").value;
    var deliveryAddress = document.getElementById("delivery-address").value;
    var deliveryCity = document.getElementById("delivery-city").value;
    var deliveryState = document.getElementById("delivery-state").value;
    var deliveryZip = document.getElementById("delivery-zip").value;
  
    if (document.getElementById("form-duplicate").checked) {
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


const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
