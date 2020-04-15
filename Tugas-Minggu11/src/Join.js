import React, {useState, useContext} from "react";
import {AuthContext} from "./index";
import * as firebase from "firebase";
// import GoogleLogin from 'react-google-login';

const Join = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                if(res.user) Auth.setLoggedIn(true);
            })
            .catch(e => {
                setErrors(e.message);
            });
    };

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
    
        firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
              console.log(result)
              history.push('/reports')
              Auth.setLoggedIn(false)
            })
            .catch(e => setErrors(e.message))
          })
     
      }

    return (
        <div>
            <h1>Join Us</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password"
                />
                <hr />
                <button onClick={() => handleGoogleLogin()} class="googleBtn" type="button">
                    <img
                        src="https://pngimg.com/uploads/google/google_PNG19635.png"
                        alt="logo"
                    />
                    Join With Google
                </button>

                <button type="submit">Create Account</button>

                <span>{error}</span>
            </form>
        </div>
    );
};

export default Join;