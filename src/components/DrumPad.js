import React from 'react';



const DrumPad = (props) => {
    
    const playSound = (name) => {
        props.tune(name);
        const audio = document.getElementById(props.text);
        audio.play();
    }

    return (
    <div className='drum-pad' id={props.name} onClick={() => playSound(props.name)}>
        {props.text}
        <audio src={props.src} className='clip' id={props.text} type='audio/mp3'/>
    </div>
    )    
};

export default DrumPad;