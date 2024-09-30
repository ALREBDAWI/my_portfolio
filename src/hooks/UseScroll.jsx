import { useEffect, useState } from "react"

const UseScroll = () => {

    const [complete , setComplete] = useState(0);
    useEffect(()=>{
        const updateScrollProgress = () => {
            const currentScrollProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            console.log(scrollHeight);
            if (scrollHeight){
                setComplete(
                    Number((currentScrollProgress/scrollHeight).toFixed(2)) * 100
                ); 
            };
        };
        window.addEventListener('scroll', updateScrollProgress);
    },[]);
    
    return complete;
};

export default UseScroll;