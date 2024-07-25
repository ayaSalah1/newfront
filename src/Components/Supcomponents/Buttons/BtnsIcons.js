import { Tooltip } from 'react-tooltip';
function BtnsIcons(props) {
    return (
        <>
            <div className={"btns-table flex flex-row-reverse gap-3 px-20 text-sm"}>
                {props.departmentIcon &&
                    <div className={"users-icon cursor-pointer"} data-tooltip-id="my-tooltip"
                         data-tooltip-content="اضافة قسم جديد"
                         onClick={props.handelDepartmentIcon}>
                        <i className="fa-solid fa-circle-plus"></i></div>}
                {props.userIcon &&
                    <div className={"users-icon cursor-pointer"} data-tooltip-id="my-tooltip"
                         data-tooltip-content="اضافة موظف جديد" onClick={props.handelUserIcon}>
                        <i className="fa-solid fa-circle-plus"></i></div>}
                {props.deleteIcon &&
                    <div data-tooltip-id={"delete-icon"} data-tooltip-content={props.deleteContent}
                         className={"delete-icon cursor-pointer"} onClick={props.handelDeleteIcon}>
                        <i className="fa-regular fa-trash-can"></i></div>}
                {props.editIcon &&
                    <div className={"edit-icon cursor-pointer"} onClick={props.handelEditIcon}>
                        <i className="fa-regular fa-pen-to-square"></i></div>}
            </div>
            <Tooltip
                id="my-tooltip"
                place={"bottom"}
                style={{backgroundColor:"#343738"}}
            />

            <Tooltip
                id={"delete-icon"}
                place={"bottom"}
                style={{backgroundColor:"#343738"}}
            />
        </>
    );
}

export default BtnsIcons;
