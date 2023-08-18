

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// import { getFirestore, collection, addDoc, doc, setDoc }  from "https://www.static.com/firebasejs/10.1.0/firebase-firestore.js";




// const firebaseConfig = {
//     apiKey: "AIzaSyDFa7QA9XZRillJX8e6dJn6bwl3oaVWSZ8",
//     authDomain: "hackaton-saylaani.firebaseapp.com",
//     projectId: "hackaton-saylaani",
//     storageBucket: "hackaton-saylaani.appspot.com",
//     messagingSenderId: "972797441777",
//     appId: "1:972797441777:web:e235d1380fbf79f6fa9b50",
//     measurementId: "G-CJ4JJKMF5V"
// };



// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);


// LoginHandler function
// function loginHandler() {
//     signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(loginEmail.value)
//             console.log(loginPassword.value)
//             if (user) {
//                 alert('User mil gaya')
//                 window.location.href = './services.html'
//             } else {
//                 alert('bhai nhi mil raha to kahan chala gaya')
//             }
//             console.log(user)
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;


//             // console.log(errorCode);
//             // console.log(errorMessage);
//         });
// }





// SignupFunction handler 
// function signupHandler() {
//     createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             if (user) {
//                 // console.log(user)
//             }
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // console.log(errorCode)
//             // console.log(errorMessage)
// if (errorCode) {
//     if (errorCode == "auth/invalid-email") {
//         Swal.fire({
//             icon: 'error',
//             title: 'Shabash Bacha Email to likho'
//         })
//     } else if (errorCode == "auth/missing-password") {
//         Swal.fire({
//             icon: 'error',
//             title: 'Shabash Bacha password to likho'
//         })
//     } else if (errorCode == "auth/wrong-password") {
//         Swal.fire({
//             icon: 'error',
//             title: 'Shabash Bacha Password sahi likho'
//         })
//     } else if (errorCode == "auth/user-not-found") {
//         Swal.fire({
//             icon: 'error',
//             title: 'Shabash Bacha ye user signUp nhi hai pehle signUp karo'
//         })
//         let swalOk = document.querySelector('.swal2-confirm')
//         swalOk.addEventListener("click", () => {
//             window.location.href = "./signUp/signUp.html"
//         })
//     }
// }

//         })
// }
