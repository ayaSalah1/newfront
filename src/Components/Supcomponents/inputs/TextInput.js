import React from 'react';

function TextInput(props) {
    return (
        <input className={"px-4 default-input-text "+props.className} name={props.name} type={'text'} value={props.vlaue} onChange={props.onChange} placeholder={props.title}/>
    );
}

export default TextInput;