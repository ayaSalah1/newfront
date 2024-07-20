import React from 'react';

function DefaultSelect(props) {
    return (
        <div className={"px-4 select-default-container flex items-center "+props.className}>
            <select className={"select-default w-full text-default-opacity " + props.classNameSelect}>
                <option className={"option-default"}>{props.title}</option>
                <option className={"option-default"}>Option 1</option>
                <option className={"option-default"}>Option 2</option>
                <option className={"option-default"}>Option 3</option>
            </select>
        </div>
    );
}

export default DefaultSelect;