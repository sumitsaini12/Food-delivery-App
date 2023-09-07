import React, { memo, useState } from "react";
import loginBg from "../assets/Img/loginBg.png";
import Logo from "../assets/Img/logo.png";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../assets/animations";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/Firebase.config";


function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const firebaseAuth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, googleProvider)
      .then((userCred) => {
        firebaseAuth.onAuthStateChanged((cred) => {
          if (cred) {
            cred.getIdToken().then((token) => {
              console.log(token);
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="w-srceen h-screen relative overflow-hidden flex">
      {/* background image */}

      <img
        src={loginBg}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt="background Images..."
      />

      {/* content bar */}
      <div className="flex flex-col items-center bg-cardOverlay w-[80%] md:w-500 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        {/* Top logo section */}
        <div className="flex items-center justify-start w-full gap-3">
          <img src={Logo} className="w-8" alt="logo..." />
          <p className="text-headingColor text-2xl font-bold">City</p>
        </div>

        {/* welcome text */}
        <p className="text-3xl text-headingColor font-semibold">Welcome Back</p>
        <p className="text-xl text-textColor -mt-6">
          {isSignUp ? "Sign Up" : "Sign In"} in with following
        </p>

        {/* Input section */}
        <LoginInput
          placeholder="Enter Here"
          icon={<FaEnvelope className="text-xl text-textColor" />}
          inputState={userEmail}
          inputStateFunc={setUserEmail}
          type="email"
          isSignUp={isSignUp}
        />

        <LoginInput
          placeholder="Password Here"
          icon={<FaLock className="text-xl text-textColor" />}
          inputState={password}
          inputStateFunc={setPassword}
          type="password"
          isSignUp={isSignUp}
        />

        {isSignUp && (
          <LoginInput
            placeholder="Confirm Password Here"
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={confirm_password}
            inputStateFunc={setConfirm_password}
            type="password"
            isSignUp={isSignUp}
          />
        )}

        {!isSignUp ? (
          <p>
            Doesn't have an account:{" "}
            <motion.button
              {...buttonClick}
              className="text-red-600 underline cursor-pointer bg-transparent"
              onClick={() => setIsSignUp(true)}
            >
              Create one
            </motion.button>
          </p>
        ) : (
          <p>
            already have an account:{" "}
            <motion.button
              {...buttonClick}
              className="text-red-600 underline cursor-pointer bg-transparent"
              onClick={() => setIsSignUp(false)}
            >
              Sign-in here
            </motion.button>
          </p>
        )}

        {/* button section */}
        {isSignUp ? (
          <motion.button
            {...buttonClick}
            className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
          >
            Sign Up
          </motion.button>
        ) : (
          <motion.button
            {...buttonClick}
            className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
          >
            Sign In
          </motion.button>
        )}

        {/* line */}
        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
          <p className="text-white">or</p>
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
        </div>

        {/* Google Button */}
        <motion.div
          {...buttonClick}
          onClick={loginWithGoogle}
          className="flex items-center justify-center px-24 py-2 bg-white backdrop-blur-md cursor-pointer rounded-3xl gap-4"
        >
          <FcGoogle className="text-3xl" />
          <p className="capitalize text-base font-semibold text-headingColor">
            Signin with Google
          </p>
        </motion.div>
      </div>
    </div>
  );
}
export default memo(Login);
