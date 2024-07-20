import React from 'react';

function DefaultBtn(props) {
    return (
        <div className={"flex w-full justify-center " + props.className}>
            <button className={"text-primary btn-primary font-bold text-sm w-40"}>{props.title}</button>
        </div>
    );
}

export default DefaultBtn;