import React from 'react';

function DefaultTextArea(props) {
    return (
        <textarea rows={props.rows} placeholder={props.title} className={"px-4 " + props.className} name={props.name} onChange={props.onChange}  alt={props.name}>
            {props.value}
        </textarea>
    );
}

export default DefaultTextArea;