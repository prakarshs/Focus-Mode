// document.getElementById("toggle").addEventListener("change", function() {
//     if(this.checked) {
//         document.body.style.backgroundColor = "#b0ffcc";
//     } else {
//         document.body.style.backgroundColor = ""; 
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("toggle");

    // Send a message to the content script when the checkbox state changes
    checkbox.addEventListener("change", function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            var isChecked = checkbox.checked;
            chrome.tabs.sendMessage(tabs[0].id, { toggleContents: isChecked });
        });
        if(this.checked) {
            document.body.style.backgroundColor = "#b0ffcc";
        } else {
            document.body.style.backgroundColor = ""; 
        }
    });
});



