"use client";

import { Eye, EyeOff, Github } from "lucide-react";
import React, { ChangeEvent, ReactElement, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn } from "next-auth/react";
const LoginForm = () => {
    const { data: session } = useSession();

    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswrodFocused, setIsPasswordFocused] = useState(false);

    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setIsInputValue] = useState("");

    const togglePasswordVisibility = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của button
        setShowPass(!showPass);
    };

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    }
    const handleEmaiBlur = () => {
        setIsEmailFocused(false);
    }
    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
    }
    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleInputFocus = () => {
        setIsInputFocused(true);
    }
    const handleInputBlur = () => {
        setIsInputFocused(false);
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsInputValue(event.target.value);
    }
    return (
        <form className="" action="">
            {/* header */}
            <div>
                <h3 className="mb-7 text-white text-left">
                    Form Login
                </h3>
            </div>
            {/* content */}
            <div className="w-[250px] flex flex-col gap-4">
                <>
                    <>
                        <div className="relative p-1 bg-white rounded-md overflow-hidden">
                            <label className={`pl-4 text-black ${isEmailFocused || email ? 'text-xs font-normal' : 'text-xs font-medium'
                                } transition duration-300 ease-in-out transform ${isEmailFocused || email ? 'translate-y-[-10px]' : 'translate-y-0'
                                } absolute top-0 left-0 pt-2 px-2`}
                                htmlFor=""
                            >
                                Email or phone number
                            </label>
                            <input className="w-full text-sm pt-3 px-4 pb-1 mr-4 border-none focus:outline-none"
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                                onFocus={handleEmailFocus}
                                onBlur={handleEmaiBlur}
                            />
                        </div>
                    </>
                </>
                <>
                    <>
                        <div className="relative p-1 bg-white rounded-md overflow-hidden group">
                            <label className={`pl-4 text-black ${isPasswrodFocused || password ? 'text-xs font-normal' : 'text-xs font-medium'} 
                                    transition duration-300 ease-in-out transform ${isPasswrodFocused || password ? 'translate-y-[-10px]' : 'translate-y-0'} 
                                    absolute top-0 left-0 pt-2 px-2`}
                                htmlFor=""
                            >
                                Password
                            </label>
                            <input className="w-full text-sm pt-3 px-4 pb-1 mr-4 border-none focus:outline-none"
                                type={showPass ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}

                            />
                            {password && (
                                <button
                                    className="absolute p-1 right-0 top-1/2 flex items-center -translate-y-1/2 -translate-x-1/2 hover:border-white hover:rounded-full hover:shadow"
                                    type="button"
                                    role="button"
                                    onMouseDown={togglePasswordVisibility}
                                >
                                    {showPass ? <Eye className="cursor-pointer " color="black" size={18} /> : <EyeOff className="cursor-pointer" color="black" size={18} />}
                                </button>
                            )}

                        </div>
                    </>
                </>
                <>
                    <button className="w-full py-[6px] px-[16px] text-white bg-red-600 hovet:bg-red-700 cursor-pointer border-none rounded"
                        type="button"
                        role="button"
                    >
                        Sign In
                    </button>
                </>
                <>
                    <p className="text-white text-center">OR</p>
                </>
                <>
                    <div className="flex items-center justify-evenly">
                        <>
                            <button className="p-3 bg-black rounded-full"
                                type="button"
                                role="button"
                                onClick={() => signIn("github", {
                                    callbackUrl: "/browse"
                                })}
                            >
                                <Github size={20} color="white" />
                            </button>
                        </>
                        <>
                            <button className="p-3 bg-white rounded-full"
                                type="button"
                                role="button"
                                onClick={() => signIn("google", {
                                    callbackUrl: "/browse"
                                })}
                            >
                                <FcGoogle size={20} />
                            </button>
                        </>
                    </div>
                </>
                <>
                    <>
                        <p className="text-white text-center">
                            Forgot password ?
                        </p>
                    </>
                </>
                {/* footer */}
                <>
                    <>
                        <div className="flex items-center">
                            <input type="checkbox" name="" id="" />
                            <label className="text-white text-base pl-3" htmlFor="">Remember me</label>
                        </div>
                    </>
                    <div></div>
                </>
            </div>
        </form >
    );
}
export default LoginForm;