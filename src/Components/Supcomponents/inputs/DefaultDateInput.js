import React, {useRef} from 'react';

function DefaultDateInput(props) {
    const inputClick = useRef(null)

    const handelClickLabel = () => {
        inputClick.current.showPicker();
    }
    return (

        <div className={" " + props.className}>
            <label className={"btn-primary w-full flex "} htmlFor={props.id} onClick={handelClickLabel }>
                <i className={props.iconClass}></i>
                {props.title}
            </label>
            <input ref={inputClick} id={props.id} name={props.name}  className={"opacity-0 w-0 absolute"} type={"date"}/>
        </div>
    );
}

export default DefaultDateInput;