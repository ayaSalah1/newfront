import React from 'react';
import TextInput from "../../Components/Supcomponents/inputs/TextInput";
import DefaultBtn from "../../Components/Supcomponents/Buttons/DefaultBtn";
import DefaultSelect from "../../Components/Supcomponents/inputs/DefaultSelect";
import DefaultModal from "../DefaultModal";

function AddDepartmentModal(props) {
    return (
        <DefaultModal isModalOpen={props.isModalOpen} title={"اضافة قسم"} onClose={props.onClose} >
            <div className="flex flex-col items-center py-15 ">
                <div className={"inputs w-full px-3 flex items-center justify-center gap-16"}>
                    <TextInput className={"custom-w-44"} name={"name"} value={""} title={"اسم القسم"}/>
                    <DefaultSelect className={"custom-w-44"} classNameSelect={"select-arrow-left"}
                                   name={"teamEmployee"} value={""} title={"اسم المدير"}/>
                </div>
                <DefaultBtn className={"my-10"} title={"اضافه قسم"}/>
            </div>
        </DefaultModal>
    );
}

export default AddDepartmentModal;
