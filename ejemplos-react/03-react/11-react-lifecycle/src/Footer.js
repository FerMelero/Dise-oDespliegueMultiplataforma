import { useEffect } from "react";

function Footer ({counter}) {
    console.log('Footer> is called');
    
    useEffect(() => {
        console.log("Footer> useEffect> ", counter)
        return () => {
            console.log("Footer> useEffect> UNMOUNT! ", counter)
        }
    }, [counter])

    return (
        <div>This footer contains this prop: {counter}</div>
    )
}

export default Footer;