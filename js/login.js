const clientRef = db.collection('clients');
const staffRef = db.collection("staff");
const registration = document.getElementById('registration');
const loginFormEmail = document.querySelector('.login-form#email-login');
const loginFormPhone = document.querySelector('.login-form#phone-login');
const phoneQues = document.getElementById('login_phone_number_ques');
const emailQues = document.getElementById('login_email_ques');

var dt = new Date();

if(phoneQues  != null) {
    phoneQues.addEventListener('click', () => {
        console.log('switching to phone login');
        document.getElementById('email-login').style.display = "none";
        document.getElementById('phone-login').style.display = "block";
    })
}

if(emailQues != null) {
    emailQues.addEventListener('click', () => {
        console.log('switching to email login');
        document.getElementById('phone-login').style.display = "none";
        document.getElementById('email-login').style.display = "block";
    })
}

if(registration != null){
    registration.addEventListener('submit', (evt)=> {
        evt.preventDefault();
        evt.preventDefault();
        console.log('form submitted');
        var firstName = $('#firstname').val();
        var lastName = $('#lastname').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var phone = $('#phone').val();
        var address = $('#address').val();
        var company_desc = $('#company_desc').val();
        var company_name = $('#company_name').val();
        var business_type = $("input[type='radio'][name='business_type']:checked").val();
        var vat = $('#vat').val();
        var currency = $("#currency :selected").val();       
        console.log(client_id);
        firebase.auth.createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userId = user.uid;
            console.log(userId);
            console.log(business_type);
            setDoc(doc(clientRef, userId), {
                email: email,
                firstName: firstName,
                lastName: lastName,
                company_name: company_name,
                phone: phone,
                address: address,
                currency: currency,
                vat: vat,
                business_type: business_type,
                company_desc: company_desc,
                date_created: new Date()
            })
            .then(()=> {
                console.log('Im done registering!');
                window.location.href= "login.php";
            });
            
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    })
}

if(loginFormEmail != null){
    loginFormEmail.addEventListener('submit', evt => {
        evt.preventDefault();
        var email =  document.getElementById('email').value;
        var password = document.getElementById('password').value;
        console.log(email);
        console.log(password);
        console.log(typeof email + typeof password)
        console.log('hi, D!');
        if(email.value != "" && password.value != "") {
            auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                clientRef.doc(user.uid).get()
                .then(clientdoc => {
                    console.log('found clientdoc');
                    console.log(clientdoc.data());
                    if(clientdoc.data() != null){
                        clientRef.doc(user.uid).update({
                            last_login: dt
                        })
                        .then(() => {
                            setAdminSession(clientdoc.data(), user.uid);
                        });
                    } else {
                        // getDocs(query(staffRef, user.uid))
                        staffRef.doc(user.uid).get()
                        .then((userQry) => {   
                            if(userQry.data() != null){
                                staffRef.doc(user.uid).update({
                                    last_login: dt
                                })
                                .then(() => {
                                    setSession(doc.data(), doc.id)
                                    // userQry.forEach(doc=> {
                                    //     var business_id = doc.data().userId;
                                    //     console.log(id);
                                    //     setSession(doc.data(), doc.id, business_id);
                                    // });
                                })
                                .catch((error) => {
                                    const errorMessage = error.message;
                                    console.log(errorMessage);
                                });
                            } else {
                                alert('User does not exist!');
                            }
    
                        });
                            
                    }
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        } else {
           alert('Input your login details!');
        }

    })
}

if(loginFormPhone != null){
    loginFormPhone.addEventListener('submit', evt => {
        evt.preventDefault();
        const phoneNumber = document.getElementById('phone_number').value;
        console.log(phoneNumber);
        if(phoneNumber != ""){
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    const onSignInSubmit = () => {
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
                            const errorMessage = error.message;
                            console.log(errorMessage);
                        });
                    };
                    onSignInSubmit;
                }
            });
        } else {
            alert('Input your login details!');
         }
      
    })
}