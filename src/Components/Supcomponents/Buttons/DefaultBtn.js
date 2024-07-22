import React from 'react';

function DefaultBtn(props) {
    return (
        <div className={"flex w-full justify-center " + props.className}>
            {props.spanner ? <button onClick={props.onClick} disabled
                                     className={"text-primary btn-primary font-bold text-sm w-40 flex justify-center items-center cursor-not-allowed"}>
                    <div
                        className="border-gray-300 h-7 w-7 animate-spin rounded-full border-4 border-t-primary">
                    </div>
                </button> :
                <button onClick={props.onClick}
                        className={"text-primary btn-primary font-bold text-sm w-40"}>{props.title} {props.children}</button>}
        </div>
    );
}

export default DefaultBtn;