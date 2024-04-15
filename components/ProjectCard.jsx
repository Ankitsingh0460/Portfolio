import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const ProjectCard = ({ imgUrl, title, description, githubLink }) => {
    return (
        <div className="hover:bg-[#181818] p-3 rounded-xl hover:transition hover:scale-105 transition-all">
            <Link href={githubLink}>
                <div className="">
                    <div className="h-52 md:h-60 rounded-t-xl relative hover:opacity-50 group" style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
                        <div className=" flex items-center justify-center h-full gap-20 ">
                        </div>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-xl text-white mt-4">{title}</h3>
                    <p className="text-[#ADB7BE]">{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;