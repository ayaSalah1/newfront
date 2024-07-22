import React from 'react';

function EditAndDeleteIcons(props) {
    return (
        <div className={"flex " + props.className} >
            {props.deleteIcon ? <div className={"delete-icon cursor-pointer " + props.classDelete} onClick={props.handelDeleteIcon}>
                <i className="fa-regular fa-trash-can"></i></div> : ""}
            {props.editIcon ? <div className={"edit-icon cursor-pointer " +props.classEdit} onClick={props.handelEditIcon}>
                <i className="fa-regular fa-pen-to-square"></i></div> : ""}
        </div>
    );
}

export default EditAndDeleteIcons;