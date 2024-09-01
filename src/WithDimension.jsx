import { useEffect } from "react";
import  {useState, useRef} from react;

const WithDimension = (Component)=> {

    return function WithDimension (props) {
        const [width, setWidth] = useState (null);
        const [height, setHeight] = useState (null);

        const compRef = useRef ();
        
        useEffect(()=>{
            if(compRef.current){
                setWidth(compRef.current.offsetWidth);
                setHeight(compRef.current.offsetHeight);
            }
        }, [compRef])

        return <Component ref={compRef} height={height} width={width} {...props} />

    }
}

export default WithDimension;