// Author: Carl Kevin Gasal
// Date: 03-15-2023



//Switching tabs
let switchers = [...document.querySelectorAll('.switcher')]
let previousState = null

switchers.forEach(item => {
    item.addEventListener('click', function() {
        try {
            // Save the previous state
            previousState = document.querySelector('.is-active')
            
            // Change the state
            switchers.forEach(item => item.parentElement.classList.remove('is-active'))
            this.parentElement.classList.add('is-active')
        } catch (error) {
            // Restore the previous state if an error occurs
            if (previousState) {
                previousState.classList.add('is-active')
            }
            console.error(error)
        }
    })
})

//copy billing to delivery form function
function copyBillingAddress() {

    var billingFname = document.getElementById("billing-Fname").value;
    var billingLname = document.getElementById("billing-Lname").value;
    var billingAddress = document.getElementById("billing-address").value;
    var billingGender = document.getElementById("billing-gender").value;
    var billingPhone = document.getElementById("billing-phone").value;
    var billingYear = document.getElementById("billing-year").value;
  
    if (document.getElementById("form-duplicate").checked) {
      document.getElementById("delivery-Fname").value = billingFname;
      document.getElementById("delivery-Lname").value = billingLname;
      document.getElementById("delivery-address").value = billingAddress;
      document.getElementById("delivery-gender").value = billingGender;
      document.getElementById("delivery-phone").value = billingPhone;
      document.getElementById("delivery-year").value = billingYear;
    }

}
// Function to copy billing address to delivery address
function checkValidity() {
    var deliveryFname = document.getElementById("delivery-Fname");
    var deliveryLname = document.getElementById("delivery-Lname");
    var deliveryAddress = document.getElementById("delivery-address");
    var deliveryGender = document.getElementById("delivery-gender");
    var deliveryPhone = document.getElementById("delivery-phone");
    var deliveryYear = document.getElementById("delivery-year");
  
    if (document.getElementById("same-as-billing").checked) {
      return true; // no need to validate if same as billing address
    }
  
    var isValid = true;
  
    // Check delivery first name
    if (deliveryFname.value === "") {
      deliveryFname.classList.add("invalid-input");
      deliveryFname.setCustomValidity("Please enter your first name.");
      isValid = false;
    } else {
      deliveryFname.classList.remove("invalid-input");
      deliveryFname.setCustomValidity("");
    }
  
    // Check delivery last name
    if (deliveryLname.value === "") {
      deliveryLname.classList.add("invalid-input");
      deliveryLname.setCustomValidity("Please enter your last name.");
      isValid = false;
    } else {
      deliveryLname.classList.remove("invalid-input");
      deliveryLname.setCustomValidity("");
    }
  
    // Check delivery address
    if (deliveryAddress.value === "") {
      deliveryAddress.classList.add("invalid-input");
      deliveryAddress.setCustomValidity("Please enter your address.");
      isValid = false;
    } else {
      deliveryAddress.classList.remove("invalid-input");
      deliveryAddress.setCustomValidity("");
    }
  
    // Check delivery gender
    if (deliveryGender.value === "") {
      deliveryGender.classList.add("invalid-input");
      deliveryGender.setCustomValidity("Please select your gender.");
      isValid = false;
    } else {
      deliveryGender.classList.remove("invalid-input");
      deliveryGender.setCustomValidity("");
    }
  
    // Check delivery phone number
    if (deliveryPhone.value === "") {
      deliveryPhone.classList.add("invalid-input");
      deliveryPhone.setCustomValidity("Please enter your phone number.");
      isValid = false;
    } else {
      deliveryPhone.classList.remove("invalid-input");
      deliveryPhone.setCustomValidity("");
    }
  
    // Check delivery year
    if (deliveryYear.value === "") {
      deliveryYear.classList.add("invalid-input");
      deliveryYear.setCustomValidity("Please enter your birth year.");
      isValid = false;
    } else {
      deliveryYear.classList.remove("invalid-input");
      deliveryYear.setCustomValidity("");
    }
  
    // Add :valid and :invalid pseudo-classes to input fields
    if (isValid) {
      deliveryFname.classList.add("valid-input");
      deliveryLname.classList.add("valid-input");
      deliveryAddress.classList.add("valid-input");
      deliveryGender.classList.add("valid-input");
      deliveryPhone.classList.add("valid-input");
      deliveryYear.classList.add("valid-input");
    } else {
      deliveryFname.classList.remove("valid-input");
      deliveryLname.classList.remove("valid-input");
      deliveryAddress.classList.remove("valid-input");
      deliveryGender.classList.remove("valid-input");
      deliveryPhone.classList.remove("valid-input");
      deliveryYear.classList.remove("valid-input");
    }
  
    return isValid;
  }
  
//   var form = document.getElementById('address-form');
// var phoneInput = document.getElementById('billing-phone');
// //Event listener for a valid phone
// form.addEventListener('submit', function(event) {
//     var phonePattern = /^\d{10}$/;
//     var phoneValue = phoneInput.value;
    
//     if (!phoneValue.match(phonePattern)) {
//         event.preventDefault();
//         phoneInput.setCustomValidity('Please enter a valid phone number (e.g. 123-456-7890)');
//     } else if (phoneValue.match(/\D/)) {
//         event.preventDefault();
//         phoneInput.setCustomValidity('Phone number can only contain numbers (e.g. 1234567890)');
//     } else {
//         phoneInput.setCustomValidity('');
//     }

//     if (!phoneInput.checkValidity()) {
//         event.preventDefault();
//         phoneInput.setCustomValidity('Please enter a valid phone number (e.g. 123-456-7890)');
//         phoneInput.focus();
//     } else if (phoneInput.value.length !== 10) {
//         event.preventDefault();
//         phoneInput.setCustomValidity('Phone number must be 10 digits');
//         phoneInput.focus();
//     } else {
//         phoneInput.setCustomValidity('');
//     }
// });


  
  