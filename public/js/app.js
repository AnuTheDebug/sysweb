var firebaseConfig = {
    apiKey: "AIzaSyCG_wustXBdgS71lU68U6D06tDhY8XtHUo",
    authDomain: "shri-yamuna-store-8574b.firebaseapp.com",
    databaseURL: "https://shri-yamuna-store-8574b.firebaseio.com",
    projectId: "shri-yamuna-store-8574b",
    storageBucket: "shri-yamuna-store-8574b.appspot.com",
    messagingSenderId: "375205079174",
    appId: "1:375205079174:web:899b9f8f418449aacc0907",
    measurementId: "G-ZE0MWEE907"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var messagesRef = firebase.database().ref('contactformmessages');
var partnerRef = firebase.database().ref('partnermessage');

$('#contactForm').submit(function(e) {
    e.preventDefault();

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
    });

    $('.success-message').show();
    window.alert("Thank You! Our Team will get in touch with you shortly.");

    $('#contactForm')[0].reset();
});

$('#partnerForm').submit(function(e) {
    e.preventDefault();

    var newMessageRef = partnerRef.push();
    newMessageRef.set({
        name: $('#pname').val(),
        email: $('#pemail').val(),
        mobile: $('#pmob').val(),
        subject: $('#psub').val(),
        message: $('#pmessage').val()
    });

    $('.success-message').show();
    window.alert("Thank You! Our Team will get in touch with you shortly.");

    $('#partnerForm')[0].reset();
});