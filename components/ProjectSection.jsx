import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
    return (
        <div id="projects" className="flex flex-col gap-20 mt-16 justify-start items-center">
            <h2 className="text-center text-white text-4xl font-bold">My Projects</h2>
            <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">


                <ProjectCard
                    imgUrl={"/Blog.png"}
                    title={"BlogiFY App"}
                    description={"Blog web application based on (JavaScript, NodeJS,ExpressJS,MongoDB,EJS) for password security HashPassword is use"}
                    githubLink={"https://github.com/Ankitsingh0460/BlogiFy"}
                />

                <ProjectCard
                    imgUrl={"/Resturant.png"}
                    title={"Resturant-App"}
                    description={"Resturant website it is made on React,Js,Html,Css,Bootstaps,@Mui "}
                    githubLink={"https://github.com/Ankitsingh0460/Restaurant-App"}
                />


                <ProjectCard
                    imgUrl={"/E-commerce.png"}
                    title={"E-Commerce"}
                    description={"This website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location."}
                    githubLink={"https://github.com/Ankitsingh0460/E-Commerce-Website"}
                />

                <ProjectCard
                    imgUrl={"/URL.png"}
                    title={"URL Shortener"}
                    description={"URL shortener app that help us to converts a long URL into a short URL .The idea is to minimize the web page address into something which user can easily remember and track.  "}
                    githubLink={"https://github.com/Ankitsingh0460/URL-Shortener"}
                />


                <ProjectCard
                    imgUrl={"examportal.png"}
                    title={"Online Examination Portal"}
                    description={"Online Examination System is a cost-effective, scalable way to convert traditional pen and paper-based exams to online and paperless mode. Candidates can appear forthe exam using any desktop, laptop, or mobile device with a browser."}
                    githubLink={"https://github.com/Ankitsingh0460/Online-Examination-Portal"}
                />



                <ProjectCard
                    imgUrl={"/ai-saas.png"}
                    title={"Ai-Saas"}
                    description={"AI Platform which can generate code, text and Images SaaS platforms generate vast amounts of data, and AI transforms this raw information into actionable insights. From predictive analytics to sentiment analysis. "}
                    githubLink={"https://github.com/Ankitsingh0460/Ai_Saas-Master"}
                />

                <ProjectCard
                    imgUrl={"/iot.png"}
                    title={"Smart Home Automation"}
                    description={"It is a IOT base Project. With the help of this project, we easily operate our home appliances like (Bulb, Fan, Ac, etc.) from Remote Location. "}
                    githubLink={"https://github.com/Ankitsingh0460/Smart-Home-Automation-"}
                />


                <ProjectCard
                    imgUrl={"/ImageSearch.png"}
                    title={"ImageSearch"}
                    description={"It is a Image search website where we can search any type of image. "}
                    githubLink={"https://github.com/Ankitsingh0460/Image-Search"}
                />

                <ProjectCard
                    imgUrl={"/Amazon.png"}
                    title={"AmazonClone"}
                    description={"It is a clone of Original Website. "}
                    githubLink={"https://github.com/Ankitsingh0460/Amazon-Clone"}
                />






            </div>
        </div>
    );
}

export default ProjectSection;