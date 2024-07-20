import React from 'react';
import TextInput from "./TextInput";

function InputWithIcon(props) {
    return (
        <div className={" " + props.className}>
            <label className={"btn-primary w-full flex justify-center "} htmlFor={props.id}>
                <i className={props.iconClass}></i>
                <input className={" h-full mr-2 custom-input"} name={props.name} type={'text'} value={props.vlaue}
                       onChange={props.onChange} placeholder={props.title}/>
            </label>

        </div>
    );
}

export default InputWithIcon;