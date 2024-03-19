// Function to send OTP
function sendOTP() {
    // Simulate sending OTP
    alert("OTP sent successfully!");
}

// Function to validate OTP
function validateOTP() {
    // Get the entered OTP
    var enteredOTP = document.getElementById("otp").value;

    // Simulate OTP validation
    if (enteredOTP === "123456") {
        alert("OTP validated successfully!");
    } else {
        alert("Invalid OTP! Please try again.");
    }
}

// Function to update profile
function updateProfile() {
    // Get the form data
    let firstName = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let lastName = document.getElementById("lastname").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let zip = document.getElementById("zip").value;
    let terms = document.getElementById("terms").checked;

    // Validate form data
    if (firstName === "" || lastName === "" || email === "" || phone === "" || !terms) {
        alert("Please fill in all required fields and agree to the Terms & Conditions.");
    } else {
        // Simulate updating profile
        alert("Profile updated successfully!");
    }
}
