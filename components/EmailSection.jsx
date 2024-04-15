"use client"

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const EmailSection = () => {
    const [emailSubmitted, setemailSubmitted] = useState(false);

    const hanndleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONdata
        }
        const response = await fetch(endpoint, options);
        console.log(response)
        if (response.status === 200) {
            alert("Email sent successfully");
            setemailSubmitted(true);
        }
    }

    return (
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div>
                <h5 className="text-xl font-bold text-white my-2">
                    Lets Connect
                </h5>
                <p className="text-gray-300 mb-4 max-w-md">
                    I am currently looking for new opportunities, my inbox is always open. If you have any questions, please feel free to reach out.
                </p>
                <div className="socials flex flex-row gap-4">
                    <Link href={"https://github.com/Ankitsingh0460"}>
                        <FaGithub className="w-10 h-10 text-gray-400 hover:text-white" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/ankitsingh0460/"} >
                        <FaLinkedin className="w-10 h-10 text-gray-400 hover:text-white" />
                    </Link>
                    <Link href={"https://twitter.com/Singhankit0460"} >
                        <FaTwitter className="w-10 h-10 text-gray-400 hover:text-white" />
                    </Link>
                </div>
            </div>
            <div>
                <form onSubmit={hanndleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className=" text-xs md:text-sm text-gray-200 ">Your email</label>
                        <input name="email" type="email" className="p-2 rounded-lg bg-[#18191E] text-gray-400" id="email" required placeholder="john.joe@gmail.com" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="subject" className=" text-xs md:text-sm text-gray-200 ">Subject</label>
                        <input name="subject" type="text" className="p-2 rounded-lg bg-[#18191E] text-gray-400" id="subject" required placeholder="Lets work." />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-gray-200 text-sm block mb-2 font-medium">Message</label>
                        <textarea name="message" id="message" rows="4" className="p-2 rounded-lg bg-[#18191E] text-gray-400" required placeholder="Hello, I am interested in your work." />
                    </div>
                    <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">Send Message</button>
                    {
                        emailSubmitted && (
                            <p className="text-green-500">Email sent successfully</p>
                        )
                    }
                </form>
            </div>
        </section>
    );
}

export default EmailSection;