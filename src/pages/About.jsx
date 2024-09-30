// import Container from "../components/Container";

import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function About(){
    return(
    <section className=" min-h-screen w-full space-y-8 bg-gradient-to-tr from-teal-600 to-sky-800 p-4 lg:p-24 ">
        <h2 className="text-5xl text-white">About me</h2>
        
            <p className="border-2 p-4 text-white text-3xl font-georama rounded-lg">
            I’m a passionate fullstack web developer who likes building responsive, user-friendly websites and web applications. I focus on creating clean, efficient code and seamless user experiences.
            </p>
            <p className="border-2 p-4 text-white text-3xl font-georama rounded-lg">
               I'm using technologies like HTML, CSS, JavaScript, and modern frameworks like React, also i use nodejs with express framework in backend to make CRUD operations and API. Whether collaborating with teams or working independently, I’m dedicated to delivering high-quality solutions that bring ideas to life.
            </p>
 
            <div className="flex lg:flex-row justify-between text-3xl text-white md:text-7xl xl:text-8xl border-2 p-4 rounded-lg">
                <FaHtml5/>
                <FaCss3/>
                <FaSass/>
                <SiTailwindcss />
                <FaReact/>
                <FaJs/>
                <FaNodeJs/>
                <DiMongodb/>
            </div>
    </section>
    );
};