import React from 'react';

function BtnsIcons(props) {
    return (
        <div className={"btns-table flex flex-row-reverse gap-3 px-20 text-sm"}>
            {props.departmentIcon ? <div className={"users-icon cursor-pointer"} onClick={props.handelDepartmentIcon}>
                <i className="fa-solid fa-user-group"></i></div> : ""}
            {props.userIcon ? <div className={"users-icon cursor-pointer"} onClick={props.handelUserIcon}>
                <i className="fas fa-user-plus"></i></div> : ""}
            {props.deleteIcon ? <div className={"delete-icon cursor-pointer"} onClick={props.handelDeleteIcon}>
                <i className="fa-regular fa-trash-can"></i></div> : ""}
            {props.editIcon ? <div className={"edit-icon cursor-pointer"} onClick={props.handelEditIcon}>
                <i className="fa-regular fa-pen-to-square"></i></div> : ""}
        </div>
    );
}

export default BtnsIcons;