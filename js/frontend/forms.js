document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the input fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Password strength rules
    const rules = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const isStrong = Object.values(rules).every(Boolean);

    if (!isStrong) {
        let message = "Password must have:\n";
        if (!rules.length) message += "- At least 8 characters\n";
        if (!rules.uppercase) message += "- At least 1 uppercase letter\n";
        if (!rules.lowercase) message += "- At least 1 lowercase letter\n";
        if (!rules.number) message += "- At least 1 number\n";
        if (!rules.specialChar) message += "- At least 1 special character\n";

        alert(message);
        return; // stop here — don't show the "success" alert below
    }

    // Display the values in an alert or console log
    alert("Name: " + name + "\nEmail: " + email + "\nPassword: " + password);
});