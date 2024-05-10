// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // If the message contains a toggleContents property
    if (message.toggleContents !== undefined) {
        // Toggle the visibility of #contents based on the message
        toggleContentsVisibility(message.toggleContents);
    }
});

function toggleContentsVisibility(show) {
    var contentsElements = document.querySelectorAll('#contents, #secondary');

    contentsElements.forEach(element => {
        if (show) {
            element.style.display = "none"; // Show #contents
        } else {
            element.style.display = "block"; // Hide #contents
        }
    });
}
