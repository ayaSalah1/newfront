import React from 'react';

function DefaultFileInput(props) {
    return (
        <div className={" " + props.className}>
            <label className={"btn-primary w-full inline-block "} for="fileInput" >{props.title}</label>
            <input id="fileInput" name={props.name} className={"opacity-0 absolute w-0"} type={"file"} />
        </div>
    );
}

export default DefaultFileInput;