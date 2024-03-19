// Function to toggle FAQ answer visibility
function toggleFAQAnswer(faqItem) {
    const faqAnswer = faqItem.querySelector('.faq-answer');
    faqAnswer.style.display = (faqAnswer.style.display === 'block' ? 'none' : 'block');
}

// Function to hide all FAQ answers except the clicked one
function hideOtherFAQAnswers(clickedItem) {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        if (item !== clickedItem) {
            const faqAnswer = item.querySelector('.faq-answer');
            faqAnswer.style.display = 'none';
        }
    });
}

// Add click event listener to each FAQ item
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        toggleFAQAnswer(item); // Toggle answer visibility
        hideOtherFAQAnswers(item); // Hide other answers
    });
});
