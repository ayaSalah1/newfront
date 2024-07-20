import React from 'react';
import PagenationComponent from "./ComponentsTable/PagenationComponent";
import BtnsIcons from "../Components/Supcomponents/Buttons/BtnsIcons";

function TableWithBtns(props) {
    const handelNext = () => {

    }
    const handelPrevious = () => {

    }
    return (
        <div className={"mt-10 flex flex-col gap-3"}>
            <BtnsIcons
                userIcon={props.userIcon}
                handelUserIcon={props.handelUserIcon}
                editIcon={props.editIcon}
                handelEditIcon={props.handelEditIcon}
                deleteIcon={props.deleteIcon}
                handelDeleteIcon={props.handelDeleteIcon}
            />
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