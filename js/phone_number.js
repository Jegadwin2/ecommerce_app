window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        const onSignInSubmit = () => {
            const phoneNumber = document.getElementById('phone_number').value;
            const appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...            
                const code = document.getElementById('identity_code').value;
                var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
                firebase.auth().signInWithCredential(credential);    
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
        };
    }
});