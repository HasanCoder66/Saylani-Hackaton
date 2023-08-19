import {
    db,
    app,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    auth,
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    getDocs

} from "./config.js"
// console.log(app)

const firstName = document.querySelector('#firstName')
// console.log(firstName)

const lastName = document.querySelector('#surName')
// console.log(lastName)

const signupEmail = document.querySelector('#signup-Email')
// console.log(signupEmail)

const signupPassword = document.querySelector('#signup-Password')
// console.log(signupPassword)

const RepeatPassword = document.querySelector('#RepeatPassword')
// console.log(RepeatPassword)

const signupBtn = document.querySelector('#signup-btn')
// console.log(signupBtn)
const showPass = document.querySelector('#showPassword')
// console.log(showPass)



// show Password Functions 
function showPassword() {
    if (signupPassword.type === 'password') {
        signupPassword.type = 'text'
    } else {
        signupPassword.type = 'password'
    }

}
function showPasswordRepeat() {
    if (RepeatPassword.type === 'password') {
        RepeatPassword.type = 'text'
    } else {
        RepeatPassword.type = 'password'
    }

}


// add User Handler function 3
async function addUserHandler(uid) {
    console.log(uid)
    // console.log(" chal gaya");
    try {
        await setDoc(doc(db, "users", uid), {
            firstName: firstName.value,
            lastName: lastName.value,
            signupEmail: signupEmail.value
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//   Empty fields function 2
function emptyFields() {
    firstName.value = ""
    lastName.value = ""
    signupEmail.value = ""
    signupPassword.value = ""
    RepeatPassword.value = ""
}


// SignupFunction handler 
function signupHandler() {
    console.log("dsffdsfdgfgf")
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                // console.log(user)
                addUserHandler(user.uid)
                emptyFields()
                // console.log(user, "==>user")
                window.location.href = "./login/login.html"
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
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

        })


}



RepeatPassword.addEventListener('click', showPasswordRepeat);
showPass.addEventListener('click', showPassword);
signupBtn.addEventListener('click', signupHandler);