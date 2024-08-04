import React from 'react';
import PagenationComponent from "./ComponentsTable/PagenationComponent";
import BtnsIcons from "../Components/Supcomponents/Buttons/BtnsIcons";
import TextInput from "../Components/Supcomponents/inputs/TextInput";

function TableWithBtns(props) {
    const handelNext = () => {
        // Function to handle next page
    }

    const handelPrevious = () => {
        // Function to handle previous page
    }

    return (
        <div className={"flex flex-col " + props.className}>
            <div className={"flex w-full justify-between"}>
                {props.title && (
                    <div className={"pb-5 " + props.titleClass}>
                        <h3 className={"font-bold"}>{props.title}</h3>
                    </div>
                )}

                <BtnsIcons
                    userIcon={props.userIcon}
                    handelUserIcon={props.handelUserIcon}
                    departmentIcon={props.departmentIcon}
                    handelDepartmentIcon={props.handelDepartmentIcon}
                    editIcon={props.editIcon}
                    handelEditIcon={props.handelEditIcon}
                    deleteIcon={props.deleteIcon}
                    handelDeleteIcon={props.handelDeleteIcon}
                    deleteContent={props.deleteContent}
                />
            </div>
            {props.isInput && (
                <div>
                    <TextInput value={props.inputValue} onChange={props.handleChangeSearchValue} className={props.inputClass} name={props.inputName}
                               title={props.inputTitle} />
                </div>
            )}

            <div className="relative overflow-x-auto w-full">
                <table className="w-full text-sm text-right ltr:text-left text-gray-500 dark:text-gray-400">
                    {props.children}
                </table>
            </div>
            <PagenationComponent handelNext={handelNext} handelPrevious={handelPrevious} />
        </div>
    );
}

export default TableWithBtns;