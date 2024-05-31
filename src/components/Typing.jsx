import { useEffect, useState } from "react";

function Typing({
    text , typingSpeed = 100 , deletingspeed=50
}){
    const [displayText , setDisplayText] = useState("");
    const [isDeleting , setIsDeleting] = useState(false);
    const [index , setIndex] = useState(0);

    useEffect(() =>{

        const handleTyping = () => {
            if(isDeleting){
                if(index === 1){
                    setIsDeleting(false);
                }
                setIndex((prev) => prev -1);
                setDisplayText((prev) => prev.slice(0 , -1));
            }
            else{
                if(index == text.length-1){
                    setIsDeleting(true);
                }
                setIndex((prev) => (prev + 1));
                setDisplayText((prev) => prev + text[index]);
            }
        }

        const timeout = setTimeout(() => 
            handleTyping()
        , isDeleting ? deletingspeed : typingSpeed);


    }, [displayText , isDeleting]);

    return(
        <>
            <h1>{displayText}</h1>
        </>
    )
}

export default Typing;