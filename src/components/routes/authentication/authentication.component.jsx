import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {

//    useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if(response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//    }, []) 





  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup </button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
