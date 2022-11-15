import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import db from "../../firebaseConfig";

const OAuth = () => {
  const navigate = useNavigate();
  async function handleGoogleSingBtn() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success("Google Sing In Successful");

      // Store user Firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("could not authorize with google");
    }
  }
  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleSingBtn}
        className="my-6 bg-gray-100 hover:bg-gray-200 text-black w-full py-4 rounded-md uppercase font-semibold transition duration-150 ease-in-out"
      >
        <FcGoogle className="inline-block text-xl mr-2" /> Contine with Google
      </button>
    </div>
  );
};

export default OAuth;
