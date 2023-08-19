import {
    auth, EmailAuthProvider, reauthenticateWithCredential, updatePassword,

    signOut,

    getAuth,


} from "../config.js";

const OldPassword = document.querySelector('#OldPassword');
const NewPassword = document.querySelector('#NewPassword');
const editButtonhai = document.querySelector('#editButtonhai');
// console.log(OldPassword)
// console.log(NewPassword)
// console.log(editButtonhai)


// Function to change the user's password
async function changePassword() {
    const oldPasswordValue = OldPassword.value; // Get the value of the old password input
    const newPasswordValue = NewPassword.value; // Get the value of the new password input

    try {
        // Reauthenticate the user with their old password
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, oldPasswordValue);
        await reauthenticateWithCredential(user, credential);

        // If reauthentication is successful, update the password
        await updatePassword(user, newPasswordValue);

        console.log("Password updated successfully.");
        location.reload()
    } catch (error) {
        console.error("Error changing password:", error);
    }
}

editButtonhai.addEventListener('click', changePassword);