import React from "react";
import Image from "next/image";
import { Languages } from "lucide-react";
import LoginForm from "@/components/login-form";

export default function page() {
    return (
        <>
            <div className="flex relative w-[100%] h-[100vw] overflow-hidden">
                <Image className="object-fill"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/14e89ca7-14c4-4116-b4a3-94cf3547b957/VN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt=""
                    fill
                />
                <div className="absolute h-full inset-auto flex items-center justify-between flex-col">
                    {/* header */}
                    <header className="w-svw min-h-24">
                        <nav className=" m-auto md:px-8 md:py-8 lg:mx-[126px] lg:min-w-[calc(83.33333333333334%-6rem)] lg:px-12 lg:py-6">
                            <div className="w-full">
                                <div className="flex items-center justify-between">
                                    <div className=" mt-2 ml-4 basis-1/2">
                                        {/* <Image src={ } alt="" width={0} height={0} /> */}
                                        <svg className="w-[148px] h-[40px] text-[rgb(229_9_20)] default-ltr-cache-1d568uk ev1dnif2"
                                            viewBox="0 0 111 30"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true" role="img"
                                            fill="currentColor"
                                        >
                                            <g>
                                                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="mt-2 ml-4 basis-1/2">
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    {/* form login */}
                    <div className=" form_login">
                        <div>
                            <div className="grid place-items-center mx-[229px] px-[50px] mb-[50px]">
                                {/* <div className="text-white">Form Login</div> */}
                                <div className="px-[68px] py-[48px] bg-black/35 rounded">
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer */}
                    <footer className="w-screen bg-black/50">
                        <div className=" lg:mx-[126px] lg:my-[72px] lg:px-12">
                            <div>
                                <div className="flex flex-col">
                                    <div>
                                        <h3 className="text-white text-sm mb-3">Questions? Contact us.</h3>
                                    </div>
                                    <div>
                                        <div className="my-3">
                                            <div>
                                                <ul className="grid grid-cols-4 gap-3 *:text-white *:text-sm">
                                                    <li>FAQ</li>
                                                    <li>Help Center</li>
                                                    <li>Terms of Use</li>
                                                    <li>Privacy</li>
                                                    <li>Cookie Preferences</li>
                                                    <li>Corporate Information</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="mt-3 ml-6">
                                                <div className="inline-block -ml-6">
                                                    <div className="">
                                                        <div className="relative flex items-center bg-white p-1 border-none rounded-md">
                                                            <Languages className="absolute" size={19} />
                                                            <select className="pl-10 focus:outline-none">
                                                                <option lang="vi" label="Tiếng Việt" value="vi-VN">Tiếng Việt</option>
                                                                <option lang="en" label="English" value="en-VN">English</option>
                                                            </select>
                                                        </div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}