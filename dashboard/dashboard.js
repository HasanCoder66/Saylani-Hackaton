
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
    onAuthStateChanged,
    query,
    where,
    getDocs,
    getDoc,
    serverTimestamp

} from "../config.js"


const inputTitle = document.querySelector('#input-Title')
// console.log(inputTitle)

const inputTextArea = document.querySelector('#input-TextArea')
// console.log(inputTextArea)

const publishBtn = document.querySelector('#publish-post')
// console.log(publishBtn)

const containerPost = document.querySelector('.containerPost')
// console.log(containerPost)

let currentUser;
// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {

        const uid = user.uid;
        currentUser = uid
        // console.log(currentUser )
        getData(currentUser)
        // ...
    } else {
        window.location.href = "../signup/signup.html"
    }
});


async function publishHandler() {


    try {
        await setDoc(doc(db, "Blogs", currentUser), {
            inputTitle: inputTitle.value,
            inputTextArea: inputTextArea.value,
            timeStamp: serverTimestamp(),
            author: currentUser
        });
        getData(currentUser)
        // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}


async function getData(uid) {
    // console.log()        
    const postsCollectionRef = collection(db, "Blogs");
    const q = query(postsCollectionRef);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {

        // doc.data() is never undefined for query doc snapshots
        let postId = doc.id
        const { author, inputTextArea, inputTitle } = doc.data()
        // console.log(data)
        console.log(doc.id, " => ", doc.data());
        const gettingUserData = await getAuthData(author)



        let div = document.createElement('div')
        div.setAttribute('class', "postedSection ")
        div.innerHTML = `
<div class="card mb-3" style="width: 25%; line-height: 10px; border: none;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.svgrepo.com/show/13656/user.svg" class="img-fluid rounded-start" alt="..."
                            width="80px" style="margin-top: 8px; margin-left: 5px;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${inputTitle}</h5>
                            <p class="card-text">${gettingUserData?.firstName}</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <p id="paragraph">
                ${inputTextArea}
            </p>
            <div id="myLinks">
                <a href="#" id="delete " class="me-5">Delete</a>
                <a href="#" id="edit">Edit</a>
            </div>`
        containerPost.prepend(div)

    });

}
getData()

async function userGetData(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        console.log(uid, "arhiii haii")
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

userGetData()
publishBtn.addEventListener('click', publishHandler)




async function getAuthData(id) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}