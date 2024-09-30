import { FaGithub } from "react-icons/fa";

export default function Project ({imgSource, title, descreption, icons=[], href}) {

    return (
        <>
 
            <div className="flex flex-col items-center lg:flex-row space-x-6 border-2 rounded-lg border-black p-4 lg:p-14 ">
                <div className="relative w-full flex justify-center rounded-lg border-2 border-black">
                    <img src={imgSource} alt={title} className="w-full h-96 object-cover object-top rounded-lg"/>
                    <div href={href} className="absolute w-full h-full flex justify-center z-20 rounded-lg  bg-gradient-to-t from-white to-transparent">
                    <a href={href} className="absolute m-4 bottom-0"><FaGithub className=" cursor-pointer transition-transform duration-300 hover:-translate-y-2 size-24" /></a>
                    </div>
              
                </div>                    
                <div className="w-full  flex flex-col  space-y-6 p-6">
                    <h3 className="text-2xl md:text-4xl ">{title}</h3>
                    <p className="font-georama text-2xl break-words ">{descreption}</p>
                    <div className="flex flex-row space-x-6">{icons.map((Icon, index) => (
                        <Icon key={index} className="text-6xl text-blue-500" />
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};