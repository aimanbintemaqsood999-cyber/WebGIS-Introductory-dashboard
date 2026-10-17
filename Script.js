// Function to show Popup Modal
function showPopup(title, message) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-message").innerHTML = "<p>" + message + "</p>";
    document.getElementById("popup").style.display = "flex";
}

// Function to close Popup Modal
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Email Trigger
function showEmail() {
    showPopup("Email Address", "aimanmaqsood@example.com");
}

// Phone Number Trigger (Displays 'Nil' per Lab Manual)
function showPhone() {
    showPopup("Phone Number", "Nil");
}

// More Info Trigger (Displays 'Nil' per Lab Manual)
function showMoreInfo() {
    showPopup("More Info", "Nil");
}

// Interactive Basemap Switcher Function
function setBasemap(theme, btnElement) {
    // Remove active class from all buttons
    let buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    btnElement.classList.add('active');

    // Remove background classes
    document.body.classList.remove('satellite-bg', 'dark-bg');

    // Apply selected theme class
    if (theme === 'satellite') {
        document.body.classList.add('satellite-bg');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-bg');
    }
}

// Live Clock & System Status Tracker
function updateLiveTracker() {
    const timeElement = document.getElementById('live-time');
    if (timeElement) {
        const now = new Date();
        timeElement.innerText = "UTC Time: " + now.toUTCString().slice(17, 25) + " UTC";
    }
}

// Update clock every second
setInterval(updateLiveTracker, 1000);
updateLiveTracker();

// Close popup when clicking outside the popup content box
window.onclick = function(event) {
    var popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
};