import React from 'react';
import { useSelector, useDispatch } from "react-redux";
const Drum = (props) => {
     const dispatch = useDispatch();

    const playSound = (clip,name) => {
      dispatch({ type: "add", payload: name });
      if(props.power){
        document.getElementById(clip)?.play().catch(console.error);
      }
      
    };
    return (
      <button key={props.data.key} onClick={() => playSound(props.data.key,props.data.description)}>
        <audio src={props.data.voice} id={props.data.key }></audio>
        {props.data.key} 
      </button>
    );
}

export default Drum;
