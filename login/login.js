import {
    app,
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    auth
} from '../config.js'




const loginEmail = document.querySelector('#loginEmail')
// console.log(loginEmail)
const loginPassword = document.querySelector('#loginPassword')
// console.log(loginPassword)
const loginBtn = document.querySelector('#login-btn')
// console.log(loginBtn)





function loginHandler() {

   
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(loginEmail.value)
            // console.log(loginPassword.value)
            if (user) {
                alert('User mil gaya')
                window.location.href = '../dashboard/dashboard.html'
            } else {
                alert('bhai nhi mil raha to kahan chala gaya')
            }
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;


            // console.log(errorCode);
            // console.log(errorMessage);
        });
}















loginBtn.addEventListener('click', loginHandler);