// Make a console log to make sure the extension is running
console.log('Notification Extension active!')
chrome.runtime.sendMessage(
    {msg: "Am I the only tab?"},
    function (response) {
        console.log(response);
    }
);

// Create an HTML Script tag
var script = document.createElement('script');

// Make the source of that script tag the notification file
script.src = chrome.extension.getURL('notification_script.js');

// Add the script tag to the end of the Head
(document.head).appendChild(script);