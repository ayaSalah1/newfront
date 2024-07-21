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
            <BtnsIcons
                userIcon={props.userIcon}
                handelUserIcon={props.handelUserIcon}
                departmentIcon={props.departmentIcon}
                handelDepartmentIcon={props.handelDepartmentIcon}
                editIcon={props.editIcon}
                handelEditIcon={props.handelEditIcon}
                deleteIcon={props.deleteIcon}
                handelDeleteIcon={props.handelDeleteIcon}
            />
            {
                props.title ?
                    <div className={"pb-5 " + props.titleClass}>
                        <h3 className={"font-bold"}>{props.title}</h3>
                    </div>
                    :""
            }
            {
                props.isInput ?
                    <div>
                        <TextInput className={props.inputClass} name={props.inputName} value={props.inputValue}
                                   title={props.inputTitle}/>
                    </div>
                    :""
            }

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-right ltr:text-left text-gray-500 dark:text-gray-400">
                    {props.children}
                </table>
            </div>
            <PagenationComponent handelNext={handelNext} handelPrevious={handelPrevious}/>
        </div>
    );
}

export default TableWithBtns;
