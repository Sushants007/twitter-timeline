import React, { useState } from 'react';
import './InputOption.css';

function InputOption({Icon,title,color,clickedColor,count}) {
  const [active,setActive]=useState(false);
  let [displayCount,setDisplayCount]=useState(count)
  const handleClick=(e)=>
  {
    e.preventDefault(); 
    setActive(!active);
    if(displayCount!==0 && active)
    {
      let tempCount=displayCount-1;
      setDisplayCount(tempCount)
    }
    if(!active)
    {
      let tempCount=displayCount+1;
      setDisplayCount(tempCount)
    }
  }
  return (
    <div className='inputOption'>
        <Icon style={{color:active?clickedColor:color}} onClick={handleClick}/>
        <h4>{title} {displayCount}</h4>
    </div>
  )
}

export default InputOption