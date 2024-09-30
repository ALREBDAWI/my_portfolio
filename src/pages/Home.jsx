
import image from "../pictures/home_blue_bg_3.webp";

export default function Home({scrollToSection}){
return(
    <>
       <div  style={{ backgroundImage: `url(${image})`}} className=" min-h-screen w-full bg-cover bg-center bg-fixed p-4 pt-32 lg:p-24 lg:pt-40">
         <div className="space-y-8 md:space-y-16 bg-white/20 rounded-lg p-8">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-7xl text-left font-bold text-black">My name is Mahmoud and i build fullstack websites</h1>
                <h2 className="text-black text-3xl md:text-5xl font-georama">Are you looking for a new team member?</h2>
            </div>
            <div className="space-y-4 md:space-y-0 md:space-x-12 w-full flex flex-col  items-center md:flex-row justify-center ">
                <a className='w-52 bg-yellow-500 shadow-lg text-center p-4 rounded-md text-4xl text-black font-bold transition-transform duration-300 hover:-translate-y-2' href="#" onClick={() => scrollToSection('contact')}>contact</a>
                <a className='w-52 bg-blue-700 shadow-lg text-center p-4 rounded-md text-4xl text-white font-bold transition-transform duration-300 hover:-translate-y-2' href="#" onClick={() => scrollToSection('projects')}>projects</a>
            </div>
         </div>
       </div>
    </> 
);
};