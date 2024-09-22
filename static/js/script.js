// JavaScript to show the birthday message after a short delay
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("birthdayMessage");
    setTimeout(() => {
        modal.style.display = "block";
    }, 1500);  // Show modal after 1.5 seconds
});
