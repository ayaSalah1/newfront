import React from 'react';
import {Tooltip, Tooltip as ReactTooltip} from "react-tooltip";

function EditAndDeleteIcons(props) {
    return (
        <>
            <div className={"flex " + props.className}>
                {props.deleteIcon ? (
                    <div
                        data-tooltip-id={"id-delete"}
                        data-tooltip-content={props.deleteContent}
                        className={"delete-icon cursor-pointer " + props.classDelete}
                        onClick={props.handelDeleteIcon}
                    >
                        <i className="fa-regular fa-trash-can"></i>
                    </div>
                ) : null}
                {props.editIcon ? (
                    <div
                        data-tooltip-id={"id-edit"}
                        data-tooltip-content={props.editContent}
                        className={"edit-icon cursor-pointer " + props.classEdit}
                        onClick={props.handelEditIcon}
                    >
                        <i className="fa-regular fa-pen-to-square"></i>
                    </div>
                ) : null}
            </div>

            <Tooltip
                id={"id-delete"}
                place={"bottom"}
                style={{backgroundColor:"#d7355d"}}
            />
            <Tooltip
                id={"id-edit"}
                place={"bottom"}
                style={{backgroundColor:"#498696"}}
            />
        </>
    );
}

export default EditAndDeleteIcons;