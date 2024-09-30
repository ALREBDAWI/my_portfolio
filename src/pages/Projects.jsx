import Project from "../components/Project";
import casaImg from "../pictures/casa_main_page.webp";
import sophieImg from "../pictures/sophie_main_page.webp";
import backendProjectImg from "../pictures/backend_cover.webp";
import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";

export default function Projects(){

    return(
        <section id="projects" className="p-4 md:p-24 space-y-16">

                <div className="space-y-10">
                <h2 className="text-5xl tracking-wide">projects</h2>
                <p className="text-3xl font-georama">As a student at OPEN CLASS ROOM school, i've been challenged to do different projects using different technologies both in backend and frotend, and here are some of them </p>
                </div>
                                
                <Project imgSource={casaImg} 
                title="Kasa rental agency" 
                descreption="A website for an apartment rental company, focusing on the front-end using React based on a provided mockup. My responsibilities included creating animations for the Collapses components and implementing key features such as React components, React Router for routing, props, and state management. Additionally, I utilized Sass for styling throughout the project." 
                href='https://github.com/ALREBDAWI/kasa-agency-with-react.git'
                icons={[FaReact, FaSass]}
                />

                <Project imgSource={sophieImg} 
                title="Sophie Bluel" 
                descreption="It's a front-end project using vanilla JavaScript for an interior designer named Sophie Bluel. The website features a dynamic gallery that fetches and displays the designer's works, adding new works and deleting any.Additionally, I built a user interface for logging in, allowing authorized users to access and manage content. The project focuses on clean, responsive design and seamless interaction without relying on external libraries" 
                href='https://github.com/ALREBDAWI/une-page-web-dynamique-avec-JavaScript.git'
                icons={[IoLogoJavascript]}
                />

                <Project imgSource={backendProjectImg} 
                title="Mon vieux grimoire backend" 
                descreption="I developed a server using Express and managed communication with a MongoDB database. This involved designing data models and implementing CRUD operations for managing books and their related ratings. also, users can signup and signin thanks to the system of authentification created, then they can add, modify, and delete books only added by them." 
                href='https://github.com/ALREBDAWI/books_rating_backend.git'
                icons={[FaNodeJs, DiMongodb]}
                />
            
        </section>
    );
};