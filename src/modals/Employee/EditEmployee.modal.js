import React from 'react';
import DefaultModal from "../DefaultModal";
import NewEmployeeForm from "../../Components/Supcomponents/Forms/NewEmployee.form";

function EditEmployeeModal(props) {
    return (
        <DefaultModal isModalOpen={props.isModalOpen} title={"تعديل موظف"} onClose={props.onClose} >
            <NewEmployeeForm className={"gap-6 mx-auto px-10 pb-8"} />
        </DefaultModal>
    );
}

export default EditEmployeeModal;