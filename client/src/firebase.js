import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS7hCAegS3HvyH8xHsNDVMBII7exHRmzw",
  authDomain: "yt-clone-f9bc9.firebaseapp.com",
  projectId: "yt-clone-f9bc9",
  storageBucket: "yt-clone-f9bc9.appspot.com",
  messagingSenderId: "321893775291",
  appId: "1:321893775291:web:2983cc39e6017cee07369e",
  measurementId: "G-2DW986HRLJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
