import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const onSignInHandler = async () => {
    const response = await signInWithGooglePopup();
    const userDoc = await createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      <div>Sign In Page</div>
      <button onClick={onSignInHandler}>Sign In</button>
    </div>
  );
};

export default SignIn;
