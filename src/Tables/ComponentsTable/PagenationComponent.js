import React from 'react';

function PagenationComponent(props) {
    return (
        <div className={"pagination flex items-center justify-center gap-3"}>
            <div className={"text-sm w-3 cursor-pointer"} onClick={props.handelNext}>
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className={"bg-primary-500 text-lg w-5 justify-center text-center cursor-pointer"} onClick={() => {}}>
                1
            </div>
            <div className={"text-sm w-3 cursor-pointer"}>
                <i className="fas fa-chevron-left" onClick={props.handelPrevious}></i>
            </div>
        </div>
    );
}

export default PagenationComponent;