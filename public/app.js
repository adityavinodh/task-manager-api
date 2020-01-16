const formSubmit = () => {
    document.getElementById('signup-btn').value = 'Loading...'
    if(document.getElementById('password').value.length < 7) {
        document.getElementById('signup-btn').value = 'Sign Up'
        alert("Password is not strong! Minimum characters allowed is 7.")
        return false;
    } else if(document.getElementById('password').value !== document.getElementById('confirm-password').value) {
        document.getElementById('signup-btn').value = 'Sign Up'
        alert("Passwords do not match!")
        return false;
    }
    
}
