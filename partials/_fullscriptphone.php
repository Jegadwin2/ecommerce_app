
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>;
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>;
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>;
<script type="module">
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBX8ClEPwdqZxG4OgDcDcudsTnJUrmU3Oc",
        authDomain: "inventory-efac2.firebaseapp.com",
        projectId: "inventory-efac2",
        storageBucket: "inventory-efac2.appspot.com",
        messagingSenderId: "245615377652",
        appId: "1:245615377652:web:de0517212277d282a7f2a1",
        measurementId: "G-CQEEWPN216"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    const db = firebase.firestore();
    const auth = firebase.auth();
    // const storage = getStorage();

    db.enablePersistence()
    .catch(err => {
        if(err.code == 'failed-precondition'){
            // probably multiple tabs open at once
            console.log('persistence failed');
        } else if(err.code == 'unimplemented') {
            // lack of browser support
            console.log('persistence is not available');
        }
    });
    <?php require_once('./js/phone_number.js');?>
</script>    
