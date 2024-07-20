import React, {useState} from 'react';
import BtnsIcons from "../../Supcomponents/Buttons/BtnsIcons";
import TextInput from "../../Supcomponents/inputs/TextInput";
import DefaultSelect from "../../Supcomponents/inputs/DefaultSelect";
import DefaultFileInput from "../../Supcomponents/inputs/DefaultFileInput";
import DefaultBtn from "../../Supcomponents/Buttons/DefaultBtn";
import AddDepartmentModal from "../../../modals/Department/AddDepartment.modal";
import EditDepartmentModal from "../../../modals/Department/EditDepartment.modal";

function AddNewEmployeeTap(props) {
    const [isAddDepartmentModalOpen, setIsAddDepartmentModalOpen] = useState(false);
    const [isEditDepartmentModalOpen, setIsEditDepartmentModalOpen] = useState(false);

    const displayAddDepartmentModal = () =>{
        setIsAddDepartmentModalOpen(!isAddDepartmentModalOpen);
    }
    const displayEditDepartmentModal = () =>{
        setIsEditDepartmentModalOpen(!isEditDepartmentModalOpen);
    }
    return (
        <div className={"mt-10 flex flex-col"}>
            <BtnsIcons
                departmentIcon={true}
                handelDepartmentIcon={displayAddDepartmentModal}
                editIcon={true}
                handelEditIcon={displayEditDepartmentModal}
                deleteIcon={true}
                handelDeleteIcon={() =>{}}
            />

            <div className={"w-full flex flex-col gap-6 mx-auto px-20"}>
                <h4 className={"text-xl"}>اضافة موظف</h4>
                <div className={"inputs flex gap-5 justify-between flex-wrap w-full"}>
                    <TextInput className={"custom-w-44"} name={"name"} value={""} title={"الاسم"}/>
                    <TextInput className={"custom-w-44"} name={"name"} value={""} title={"الايميل"}/>
                    <TextInput className={"custom-w-44"} name={"name"} value={""} title={"كلمه المرور"}/>
                    <TextInput className={"custom-w-44"} name={"name"} value={""} title={"تأكيد كلمه المرور"}/>
                    <DefaultFileInput className={"custom-w-44 text-default-opacity"} name={"name"} value={""} title={"صورة الغلاف (اختياري)"}/>
                    <DefaultSelect className={"custom-w-44"} classNameSelect={"select-arrow-left"} name={"teamEmployee"} value={""} title={"فريق الموظف"}/>
                    <DefaultSelect className={"custom-w-44"} classNameSelect={"select-arrow-left"} name={"teamEmployee"} value={""} title={"نوع الموظف"}/>
                    <TextInput className={"custom-w-44"} name={"name"} value={""} title={"ايام الاجازه السنويه"}/>
                    <TextInput className={"custom-w-44"} name={"name"} value={""} title={"الصلاحيات"}/>
                    <DefaultSelect className={"custom-w-44"} classNameSelect={"select-arrow-left"} name={"teamEmployee"} value={""} title={"اختر الفئات"}/>
                </div>
                <DefaultBtn className={"mt-10"} title={"اضافة موظف"} />
            </div>

            <AddDepartmentModal isModalOpen={isAddDepartmentModalOpen} onClose={displayAddDepartmentModal} />
            <EditDepartmentModal isModalOpen={isEditDepartmentModalOpen} onClose={displayEditDepartmentModal} />

        </div>
    );
}

export default AddNewEmployeeTap;