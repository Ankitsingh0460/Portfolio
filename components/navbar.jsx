"use client"
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const Navbar = () => {
    const [navBarOpen, setNavbarOpen] = useState(true);
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about'); // Id of the about section
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects'); // Id of the about section
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact'); // Id of the about section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 px-10">
            <div className="flex flex-wrap items-center justify-between mx-auto p-3">
                <div className="text-2xl sm:text-3xl md:text-5xl text-white font-semibold">
                    <Link href={"/"}>
                        <Image src={"/logo2.png"} width={100} height={100} alt={"logo"} />
                    </Link>
                </div>
                <div className="mobile-menu block md:hidden">
                    {
                        navBarOpen ? <button onClick={() => setNavbarOpen(!navBarOpen)}><IoMdMenu className="h-5 w-5 text-white" /></button> : <button onClick={() => setNavbarOpen(!navBarOpen)}><IoCloseOutline className="h-5 w-5 text-white" /></button>
                    }
                    {
                        !navBarOpen && (
                            <div>
                                <MenuOverlay />
                            </div>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="nabbar" >
                    <ul className=" flex gap-x-4">
                        <li>
                            <button onClick={scrollToAbout} href={"#about"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={scrollToProjects} href={"#projects"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={scrollToContact} href={"#contact"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;