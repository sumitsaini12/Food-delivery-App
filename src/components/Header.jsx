import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from "../Img/logo.png";
import Avatar from "../Img/avatar.png";

function Header() {


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
                        <motion.img whileTap={{ scale: 0.6 }} src={Avatar} className="w-10 min-w-[40px] h-8 min-h-[40px] drop-shadow-xl cursor-pointer" alt="Login Img..." />
                    </div>
                </div>

            </div>

            {/* This code is :- mobile */}

            <div className="flex md:hidden w-full"></div>

        </div>
    )
}

export default Header;

