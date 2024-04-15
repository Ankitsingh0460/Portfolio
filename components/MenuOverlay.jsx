import Link from "next/link";

const MenuOverlay = () => {
    return ( 
        <div>
            <ul className=" flex flex-col mt-20 gap-y-4 fixed right-0 top-0 bottom-0 bg-[#121212] bg-opacity-90 px-10 items-center justify-start">
                <li>
                    <Link href={"#about"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    About
                    </Link>
                </li>
                <li>
                    <Link href={"#projects"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    Projects
                    </Link>
                </li>
                <li>
                    <Link href={"#contact"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    Contact
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default MenuOverlay;