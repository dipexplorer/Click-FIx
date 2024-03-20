//form submission and display a confirmation message
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Clear form fields
        contactForm.reset();
        
        // Display confirmation message
        alert(`Thank you, ${name}! Your message has been submitted. We'll get back to you soon.`);
    });
});
