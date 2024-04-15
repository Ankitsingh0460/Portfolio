"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';




const HeaderSeaction = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact'); // Id of the about section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "./Resume.pdf";
        link.download = "Ankit_Singh Resume.pdf"
        link.click();
    }

    return (
        <section className="mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-4 font-extrabold">
                        <div className=" mb-4 text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">Hello, I am</div>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Ankit Singh',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Computer Science Student',
                                2000,
                                'Web Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className=" text-base sm:text-lg lg:text-xl  text-gray-400 mb-4">
                        I am ready to contribute to innovative projects and make a meaningful impact.
                    </p>
                    <div className=" flex flex-col sm:flex-row gap-3 mt-3">
                        <button onClick={scrollToContact} className="p-3 w-full sm:w-fit text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mr-4 hover:bg-opacity-90 font-bold border border-white">Hire Me</button>
                        <button className="p-3 w-full font-bold sm:w-fit text-white bg-transparent rounded-full border border-white 
                text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text hover:text-slate-400 hover:border-slate-400
                "
                            onClick={handleResumeDownload}
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="col-span-5 mt-4">
                    <div className="rounded-full bg-[#181818] flex items-center justify-center overflow-hidden">
                        <Image
                            src={"/avatar.png"}
                            alt="avatar"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderSeaction;