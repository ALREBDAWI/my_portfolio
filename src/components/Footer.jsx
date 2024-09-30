import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <>
            <div className="flex justify-center w-full h-16" >
                <div className="w-full min-h-32 flex flex-col items-center space-y-3 text-white  p-6 bg-gray-800">
                <div className="flex flex-row space-x-4">
                    <a href="https://www.github.com/ALREBDAWI"><FaGithub className="size-10 transition-transform duration-300 hover:-translate-y-2" /></a>
                    <a href="https://www.linkedin.com/in/m-al-rebdawi-b7a284330"><FaLinkedin className="size-10 transition-transform duration-300 hover:-translate-y-2"/></a>
                </div> 
                <p>2024 Mahmoud AL REBDAWI</p>                   
                </div>
            </div>
        </>
    );
};