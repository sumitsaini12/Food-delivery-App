import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Logo from "../Img/logo.png";
import Avatar from "../Img/avatar.png";
import { MdLogOut } from "react-icons/md";

function Header() {

    // const firebaseAuth = getAuth(app);
    // const provider = new GoogleAuthProvider();

     const login = async () => {
    //     const response = await signInWithPopup(firebaseAuth, provider);
    //     console.log(response);
     };

    const [isMenu, setISMenu] = useState(false);


    return (
        <div className="fixed z-50 w-screen p-6 px-16">
            {/* This code is :- desktop & tablet */}

            <div className="hidden md:flex w-full items-center justify-between">
                <div to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo..." />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </div>
                <div className="flex items-center gap-8">

                    <ul className="flex items-center gap-8 ">
                        <li className="text-textColor text-base hover:text-headingColor duration-100 translate-all ease-in-out cursor-pointer">Home</li>
                        <li className="text-textColor text-base hover:text-headingColor duration-100 translate-all ease-in-out cursor-pointer">Menu</li>
                        <li className="text-textColor text-base hover:text-headingColor duration-100 translate-all ease-in-out cursor-pointer">About Us</li>
                        <li className="text-textColor text-base hover:text-headingColor duration-100 translate-all ease-in-out cursor-pointer">Service</li>
                    </ul>

                    <div className="relative flex items-center justify-center"><MdShoppingBasket className="cursor-pointer text-textColor text-2xl" />

                        <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cardNumBg flex items-center justify-center">
                            <p className="text-sm text-white font-semibold ">2</p>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.img whileTap={{ scale: 0.6 }} src={Avatar} className="w-10 min-w-[40px] h-8 min-h-[40px] drop-shadow-xl cursor-pointer" alt="Login Img..." onClick={login} />
                        {
                            isMenu && (
                                <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"> New Item</p>

                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">Logout <MdLogOut /></p>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>

            {/* This code is :- mobile */}

            <div className="flex md:hidden w-full"></div>

        </div>
    )
}

export default Header;



