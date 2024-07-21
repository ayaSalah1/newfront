import React, {useState} from 'react';
import TableWithBtns from "../../../Tables/TableWithBtns";
import NewDepartmentModal from "../../../modals/Department/NewDepartment.modal";
import EditDepartmentModal from "../../../modals/Department/EditDepartment.modal";

function DepartmentsEmployeesTap(props) {
    const [isAddDepartmentModalOpen, setIsAddDepartmentModalOpen] = useState(false);
    const [isEditDepartmentModalOpen, setIsEditDepartmentModalOpen] = useState(false);
    const displayAddDepartmentModal = () =>{
        setIsAddDepartmentModalOpen(!isAddDepartmentModalOpen);
    }
    const displayEditDepartmentModal = () =>{
        setIsEditDepartmentModalOpen(!isEditDepartmentModalOpen);
    }
    return (
        <>
            <TableWithBtns  className={"gap-3 mt-10"} title="الأقسام" titleClass={"pr-10"}
                editIcon={true} handelEditIcon={displayEditDepartmentModal}
                deleteIcon={true}
                departmentIcon={true} handelDepartmentIcon={displayAddDepartmentModal}>
                <thead
                    className="table-font text-primary text-gray-900 uppercase dark:text-gray-400 title-table-font">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <input type={"checkbox"} name={""} onChange={() => {}}/>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        القسم
                    </th>
                    <th scope="col" className="px-6 py-3">
                        مدير القسم
                    </th>
                    <th scope="col" className="px-6 py-3">
                        عدد الموظفين
                    </th>
                    <th scope="col" className="px-6 py-3">
                        النقاط
                    </th>
                    <th scope="col" className="px-6 py-3">
                        التفاعل
                    </th>
                    <th scope="col" className="px-6 py-3">
                        الانجاز
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="">
                    <td  className="px-6 py-4">
                        <input type={"checkbox"} name={""} onChange={() => {}}/>
                    </td>
                    <td  className="px-6 py-4">
                        تواصل اجتماعي
                    </td>
                    <td className="px-6 py-4">
                        حازم
                    </td>
                    <td className="px-6 py-4">
                        5
                    </td>
                    <td className="px-6 py-4">
                        25
                    </td>
                    <td className="px-6 py-4">
                        متفاعل
                    </td>
                    <td className="px-6 py-4 text-red-600">
                        10%
                    </td>
                </tr>
                </tbody>
            </TableWithBtns>

            <NewDepartmentModal isModalOpen={isAddDepartmentModalOpen} onClose={displayAddDepartmentModal} />
            <EditDepartmentModal isModalOpen={isEditDepartmentModalOpen} onClose={displayEditDepartmentModal} />
        </>
    );
}

export default DepartmentsEmployeesTap;