        // Function to show payment details based on the selected payment method
        function showPaymentDetails(paymentType) {
            const bankDetails = document.getElementById('bankDetails');
            const upiDetails = document.getElementById('upiDetails');
        
            if (paymentType === 'bank') {
                bankDetails.style.display = 'block';
                upiDetails.style.display = 'none';
            } else if (paymentType === 'upi') {
                bankDetails.style.display = 'none';
                upiDetails.style.display = 'block';
            }
        }
        
        // Function to validate the form inputs before submission
        function validateForm() {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const address = document.getElementById('address').value;
            const state = document.getElementById('state').value;
            const city = document.getElementById('city').value;
            const pincode = document.getElementById('pincode').value;
            const phone1 = document.getElementById('phone1').value;
            const email = document.getElementById('email').value;
            const termsCheckbox = document.getElementById('terms');
        
            if (!firstName || !lastName || !address || !state || !city || !pincode || !phone1 || !email) {
                alert('Please fill in all the required fields.');
                return false;
            }
        
            if (!termsCheckbox.checked) {
                alert('Please accept the terms and conditions to proceed.');
                return false;
            }
        
            return true;
        }
        
        // Function to handle form submission
        // Function to handle form submission and scroll to the payment section
        function submitForm() {
            if (validateForm()) {
                alert('Payment successful! Thank you for your order.');
                // Code for AJAX request to backend for payment processing and data storage
        
                // Scroll to the payment section
                document.getElementById('paymentSection').scrollIntoView({ behavior: 'smooth' });
            }
        }