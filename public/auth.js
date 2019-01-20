function createUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        const user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function(){
            alert('Email Verification has been sent');
        });
    });
}

function loginWithEmail(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password);
}

function loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

function loginWithFacebook(){
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

function logout(){
    firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        document.getElementById('auth-info').innerText = JSON.stringify(user, null, 2);

        // firebase.database().ref('users').child(user.uid).once('value', function(snapshot){
        //     if(!snapshot.exists()){
        //         firebase.database().ref('users').child(user.uid).set({
        //             displayName: user.displayName,
        //             photoURL: user.photoURL,
        //             email: user.email,
        //             purchaseHistory: [
        //                 'Nike',
        //                 'Converse',
        //                 'Adidas',
        //             ]
        //         });
        //     }
        // });
    }else{
        document.getElementById('auth-info').innerText = 'No user';
    }
});