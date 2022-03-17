import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const firebaseappinit=()=>{
    initializeApp(firebaseConfig);
}
export default firebaseappinit;