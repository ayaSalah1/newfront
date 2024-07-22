import React from 'react';
import EditAndDeleteIcons from "./EditAndDeleteIcons";

function BtnsIcons(props) {
    return (
        <div className={"btns-table flex flex-row-reverse gap-3 px-20 text-sm"}>
            {props.departmentIcon ? <div className={"users-icon cursor-pointer"} onClick={props.handelDepartmentIcon}>
                <i className="fa-solid fa-user-group"></i></div> : ""}
            {props.userIcon ? <div className={"users-icon cursor-pointer"} onClick={props.handelUserIcon}>
                <i className="fas fa-user-plus"></i></div> : ""}
            <EditAndDeleteIcons editIcon={props.editIcon}
                                deleteIcon={props.deleteIcon}
                                handelEditIcon={props.handelEditIcon}
                                handelDeleteIcon={props.handelDeleteIcon}
                                className={"gap-3"} />
        </div>
    );
}

export default BtnsIcons;