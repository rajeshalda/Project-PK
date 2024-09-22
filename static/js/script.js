function openGift() {
    // Hide the modal
    document.getElementById('open-gift-modal').style.display = 'none';

    // Show the video
    var video = document.getElementById('bg-video');
    video.style.display = 'block'; // Ensure the video is visible
    video.controls = false; // No need for controls

    // Play the video with sound
    video.muted = false; // Ensure the video is not muted
    video.volume = 1.0;  // Set full volume

    video.play()
        .then(() => {
            console.log("Video started playing with sound");
        })
        .catch((error) => {
            console.error("Video autoplay failed:", error);
            alert("Autoplay blocked. Please click the play button on the video to start.");
            video.controls = true; // Enable controls for manual playback if autoplay fails
        });

    // Start confetti after video starts
    startConfetti();

    // When the video ends, stop the confetti, hide the video, and show the birthday message
    video.onended = function() {
        video.style.display = 'none'; // Hide the video

        // Show the "Happy Birthday" message
        document.getElementById('happy-birthday-message').style.display = 'block';
    };
}

function startConfetti() {
    const confettiInterval = 300;   // Interval between confetti batches

    // Repeat confetti at intervals indefinitely
    setInterval(() => {
        confetti({
            particleCount: 5,
            angle: 90,
            spread: 90,
            origin: { x: Math.random(), y: 0 }, // Random x position, y = 0 (top of the screen)
            gravity: 1.2,
            drift: 0.5
        });
    }, confettiInterval);
}

// Ensure modal shows up on page load
window.onload = function() {
    document.getElementById('open-gift-modal').style.display = 'flex';

    // Automatically scroll the gallery horizontally
    let gallery = document.getElementById("gallery");
    let scrollAmount = 0;
    const scrollStep = 1; // Speed of scroll (increase for faster scroll)

    function autoScroll() {
        if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
            scrollAmount = 0; // Reset scroll to the beginning when reaching the end
        } else {
            scrollAmount += scrollStep;
            gallery.scrollLeft = scrollAmount;
        }

        requestAnimationFrame(autoScroll); // Keep the scrolling continuous
    }

    autoScroll();
};
