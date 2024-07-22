import React from 'react';

function DefaultSelect(props) {
    return (
        <div className={"px-4 select-default-container flex items-center "+props.className}>
            <select name={props.name} onChange={props.onChange} className={"select-default w-full text-default-opacity " + props.classNameSelect}>
                <option value={""} className={"option-default"}>{props.title}</option>
                {props.children}
            </select>
        </div>
    );
}

export default DefaultSelect;