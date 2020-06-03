const btnNotifications = document.getElementById('notifications');
btnNotifications.addEventListener('click', requestNotificationPermission);

function requestNotificationPermission() {
    alert("clicked");
    const btnN = document.getElementById('notifications');
    Notification.requestPermission(function (result) { //default
        if (result == 'granted') {
            displayConfirmNotification();
            console.log('notification permission granted! :)');
            // disable button to prevent user clicking it.
            btnN.disabled = true;
            btnN.innerHTML = 'NOTIFICATIONS ENABLED';
        }
        if (result == 'denied') {
            console.log('notification permission DENIED!');
            btnN.disabled = false;
        }
    });
}

function displayConfirmNotification() {
    if ('serviceWorker' in navigator) {
        var options = {
            body: 'SW: You successfully subscribed to our Notification service!',
            icon: '../_images/wppwa.png',
            image: '../_images/avatar2.png',
            dir: 'ltr',
            lang: 'en-US', // BCP 47,
            // vibrate: [100, 50, 200],
            badge: '../_images/avatar6.png', // on top bar
        };
        navigator.serviceWorker.ready
            .then(function (swreg) {
                swreg.showNotification('Successfully subscribed (from SW)!', options);
            });
    }
}