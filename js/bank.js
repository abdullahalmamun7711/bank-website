document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    // get email
    const userEmail = emailField.value;
    // get password
    const passField = document.getElementById('user-password');
    const userPassword = passField.value;
    if (userEmail == 'abdullah@gmail.com' && userPassword == 'nayon') {
        // if you can go another page then use window.location.href = 'page name where yo go'

        window.location.href = 'bank.html';
    }
});



