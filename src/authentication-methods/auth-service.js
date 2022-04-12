import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from '../firebase.config'

const provider =new GoogleAuthProvider();

export const signInWithGoogle = ()=>{


    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic= result.user.photoURL;
        console.log(result.user.providerData);

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic', profilePic);

    }).catch((err)=>{
        console.log(err)
    })
}