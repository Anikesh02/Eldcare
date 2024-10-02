import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBOmxLNfLGGTFefhXGQXZUmsvj-LdrP0oc",
  authDomain: "eldcare-95000.firebaseapp.com",
  projectId: "eldcare-95000",
  storageBucket: "eldcare-95000.appspot.com",
  messagingSenderId: "417899429726",
  appId: "1:417899429726:web:ff5d0ec3b02142916d59cf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return null;
  }
}
export const signUpWithGoogle = async (gender, role) => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Set default profile photo if photoURL is null
    let photoURL = user.photoURL;
    if (!photoURL) {
      const storageRef = ref(storage, `profile_photos/genericProfile.jpeg`);
      photoURL = await getDownloadURL(storageRef); // Get generic profile photo URL
    }

    // Prepare custom user data
    const customUserData = {
      name: user.displayName,
      gender: gender,  
      role: role ,  
      email: user.email,
      profile: photoURL  
    };

    // Save the custom data to Firestore
    await setDoc(doc(db, 'users', user.uid), customUserData);

    console.log("User saved to Firestore:", customUserData);
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return null;
  }
}

async function createUser(name, email, password, photo, gender, role) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    var storageRef = ref(storage, `profile_photos/${userCredential.user.uid}`);
    console.log(photo);

    if (photo != null) {
      const snapshot = await uploadBytes(storageRef, photo);
      console.log('Uploaded the file!', snapshot);
    }
    else {
      storageRef = ref(storage, `profile_photos/genericProfile.jpeg`);
    }

    const photoURL = await getDownloadURL(storageRef);
    console.log(photoURL);

    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: photoURL
    });

    const customUserData = {
      name: name,
      gender: gender,
      role: role,
      profile: photoURL
    };

    await setDoc(doc(db, 'users', userCredential.user.uid), customUserData);
    return userCredential.user;

  } catch (error) {
    console.error("Error object:", error);
    const errorMessage = error?.message || "An unknown error occurred";
    throw new Error(errorMessage);
  }
}

async function logInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    const errorMessage = error.message;
    console.error("Login failed:", errorMessage);
    return null;
  }
}

async function getParameters(uid) {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
}

async function logOutUser() {
  try {
    await auth.signOut();
    localStorage.removeItem('user');
  } catch (error) {
    console.error("Logout failed:", error);
  }
}

async function isLoggedIn() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject("No user is logged in");
      }
    });
  });
}


export { createUser, logInUser, auth, getParameters, db, logOutUser, isLoggedIn};
export default app;