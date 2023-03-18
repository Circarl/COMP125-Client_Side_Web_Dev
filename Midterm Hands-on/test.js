// Author: Carl Kevin Gasal
// Date: 03-15-2023



// Function to copy billing address to delivery address
let switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
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
    var deliveryFName = document.getElementById("delivery-Fname").value;
    var deliveryLName = document.getElementById("delivery-Lname").value;
    var deliveryAddress = document.getElementById("delivery-address").value;
    var deliveryGender = document.getElementById("delivery-gender").value;
    var deliveryPhone = document.getElementById("delivery-phone").value;
    var deliveryYear = document.getElementById("delivery-year").value;
  
    
  
    var isValid = true;
    // Check if each delivery address input is not empty, add 'invalid-input' class if it is empty

    if (deliveryFName === "") {
      document.getElementById("delivery-Fname").classList.add("Invalid-input");
      isValid = false;
    } else {
      document.getElementById("delivery-Fname").classList.remove("Invalid-input");
    }
    if (deliveryLName === "") {
        document.getElementById("delivery-Lname").classList.add("Invalid-input");
        isValid = false;
      } else {
        document.getElementById("delivery-Lname").classList.remove("Invalid-input");
      }
  
    if (deliveryAddress === "") {
      document.getElementById("delivery-address").classList.add("invalid-input");
      isValid = false;
    } else {
      document.getElementById("delivery-address").classList.remove("invalid-input");
    }
  
    if (deliveryGender === "-- Select gender --") {
        deliveryGender.setCustomValidity("Please select a gender.");
        deliveryGender.classList.add("invalid-input");
        deliveryGender.focus();
        isValid = false;
      } else {
        document.getElementById("delivery-gender").classList.remove("invalid-input");
      }
    //PHONE VALIDITY INPUT
    if (deliveryPhone.value === "") {
        deliveryPhone.setCustomValidity("Please enter a valid phone number.");
        deliveryPhone.focus();
        deliveryPhone.style.border = "2px solid red";
        isValid = false;
      } else if (!/^\d{10}$/.test(deliveryPhone.value)) {
        isValid = false;
      } else {
        deliveryPhone.setCustomValidity("");
        deliveryPhone.style.border = "";
      }
    //YEAR VALIDITY
      if (deliveryYear.value === "") {
        deliveryYear.setCustomValidity("Please enter a year.");
        deliveryYear.focus();
        deliveryYear.style.border = "2px solid red";
        isValid = false;
      } else if (!/^\d{4}$/.test(deliveryYear.value)) {
        isValid = false;
      } else {
        deliveryYear.setCustomValidity("");
        deliveryYear.style.border = "";
      }
  

//Switching tabs from 
