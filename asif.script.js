document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 50, behavior: "smooth" });
            }
        });
    });

    // Contact Form Validation
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let dob = document.getElementById("dob").value;
        let message = document.getElementById("message").value.trim();
        let responseMsg = document.getElementById("responseMsg");

        if (!name || !email || !dob || !message) {
            responseMsg.style.color = "#ff4747";
            responseMsg.textContent = "⚠️ All fields are required!";
            return;
        }

        responseMsg.style.color = "#33cc33";
        responseMsg.textContent = "✅ Message sent successfully!";
        
        this.reset();
    });
});