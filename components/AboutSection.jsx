"use client";
import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import TabButton from "./TabButton";
const Tab_Data = [
  {
    id: "skills",
    name: "skills",
    content: (
      <ul style={{ "list-style": "disc" }}>
        <li>C#</li>
        <li>.Net</li>
        <li>IOT</li>
        <li>Java</li>
        <li>Html,CSS</li>
        <li>Python</li>
        <li>Django</li>
        <li>ReactJS</li>
        <li>ExpressJS</li>
        <li>NodeJS</li>
        <li>TailWind</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2" style={{ "list-style": "disc" }}>
        <li>
          Software Engineer Intern Blu Parrot Venture. (2024-2025,Dec-Present)
        </li>
        <li>
          Graduate Engineering Trainee Altruist Technology Pvt.Ltd
          (2024-Aug-Dec)
        </li>
        <li>
          Web development Internship in OctaNet Services Pvt Ltd.(2024-Mar-Jun)
        </li>
      </ul>
    ),
  },
  {
    id: "Education",
    name: "Education",
    content: (
      <ul style={{ "list-style": "disc" }}>
        <li>
          B.Tech:(CSE with Specialization in Data Science) (2024) [84.19%]
        </li>
        <li>12th: Science, BSEB (2019)[64.8%]</li>
        <li>10th: 10th Standard ,CBSE (2017) [85.5%]</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const aboutref = useRef(null);
  const [tab, settab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      settab(id);
    });
  };
  return (
    <section
      id="about"
      className="text-white grid grid-cols-1 md:grid-cols-2 gap-3"
      ref={aboutref}
    >
      <div className=" py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/about.png"} width={500} height={500} alt="about" />
      </div>
      <div className="flex flex-col justify-start mt-8 sm:mt-10 md:mt-20">
        <h1 className=" text-center text-white text-4xl mb-4 font-semibold">
          About Me
        </h1>
        <p className="text-base md:text-lg text-gray-300">
          I am an ambitious and detail-oriented upcoming graduate with a strong
          foundation in software development, particularly skilled in the MERN
          stack (MongoDB, Express.js,React.js, Node.js) and Next.js. Eager to
          contribute my technical skills and fresh perspectives to innovative
          projects, I am excited about embarking on a fulfilling career in the
          tech industry and as a developer.
        </p>
        <div className="flex flex-row mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Programming Language{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("experiences")}
            active={tab === "experiences"}
          >
            Experiences
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Education")}
            active={tab === "Education"}
          >
            Education
          </TabButton>
        </div>
        <div className="mt-8">{Tab_Data.find((t) => t.id === tab).content}</div>
      </div>
    </section>
  );
};

export default AboutSection;
