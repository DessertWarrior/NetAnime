import { useEffect, useRef, useState } from "react";

function CardInput(props) {
    if (props.entries[0] === 'id')
        return null;
    const key = props.entries[0];
    const value = props.entries[1] ? props.entries[1] : '';
    const [width,setWidth] = useState(value)
    const cardRef = useRef(null);
    //trigger only once since no target. Useeffect hook executed after the component is rendered.
    useEffect(()=>{
        const textarea= cardRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    },[])
    useEffect(()=>{
        props.handleChange([key,width]);
    },[width])//once setWidth, set handler to the cardInfo.

    const handleChange= (event)=>{
        setWidth(event.target.value);   
        
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    }
    return (
        <div className="form-floating">
            <textarea className="form-control" 
            ref={cardRef}
            value={width} 
            onChange={handleChange} 
            placeholder="Leave a comment here" 
            id={key} 
            style={{ overflow: 'hidden', resize: 'none', scrollbarWidth: 'none' }}>
            </textarea>
            <label htmlFor={key}>{key}</label>
        </div>
    );
}

export default CardInput;