import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./sign-in-form.component.scss";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(INITIAL_FORM_STATE);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
        return;
      }
      if (error.code === "auth/user-not-found") {
        alert("user not found");
        return;
      }
      console.log(error);
    }
  };

  const resetFormFields = () => {
    setFormFields(INITIAL_FORM_STATE);
  };

  const onSignInWithGoogleHandler = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={onChangeHandler}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={onChangeHandler}
        />
        <div className="action-bar">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={onSignInWithGoogleHandler}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
