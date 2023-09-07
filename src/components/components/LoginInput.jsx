import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { fadeInOutInput } from "../assets/animations";

function LoginInput({
  placeholder,
  type,
  icon,
  inputState,
  inputStateFunc,
  isSignUp,
}) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <motion.div
        {...fadeInOutInput}
        className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md px-4 py-2 w-full rounded-md ${
          isFocus ? "shadow-md shadow-red-400" : "shadow-none"
        }`}
      >
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none"
          value={inputState}
          onChange={(e) => inputStateFunc(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </motion.div>
    </>
  );
}
export default memo(LoginInput);
