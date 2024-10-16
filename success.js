document.addEventListener("DOMContentLoaded", function () {
    const otpInput = document.getElementById("otpInput");
    const successAlert = document.getElementById("successAlert");
    const errorAlert = document.getElementById("errorAlert");
  
    // Allow only numeric input in OTP field
    otpInput.addEventListener("input", function () {
      otpInput.value = otpInput.value.replace(/\D/g, ""); // Remove non-numeric characters
    });
  
    // OTP form submission handling
    document.getElementById("otp-form").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const otpValue = otpInput.value;
  
      // Ensure OTP is exactly 6 digits
      if (otpValue.length === 6) {
        // OTP is valid if it's a 6-digit number
        successAlert.classList.remove("d-none");
        errorAlert.classList.add("d-none");
  
        // Redirect to next page after successful OTP verification
        setTimeout(function () {
          window.location.href = "nextpage.html"; // Replace with your actual next page
        }, 1000); // Wait 1 second before redirecting to show success message
      } else {
        // Show error if OTP is not 6 digits
        errorAlert.classList.remove("d-none");
        successAlert.classList.add("d-none");
      }
    });
  
    // Resend OTP functionality
    document.getElementById("resendLink").addEventListener("click", function (e) {
      e.preventDefault();
      alert("OTP Resent! Check your email.");
    });
  });
  
  