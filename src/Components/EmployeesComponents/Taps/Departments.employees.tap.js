import React, {useEffect, useState} from 'react';
import TableWithBtns from "../../../Tables/TableWithBtns";
import NewDepartmentModal from "../../../modals/Department/NewDepartment.modal";
import EditDepartmentModal from "../../../modals/Department/EditDepartment.modal";
import { useDispatch, useSelector } from "react-redux";
import GetDepartmentAction from "../../../redux/action/Department/GetDepartment.action";
import EditAndDeleteIcons from "../../Supcomponents/Buttons/EditAndDeleteIcons";
import {useCheckboxHandlers} from "../../../utils/Methods/checkboxHandlers";
import DeleteDepartmentAction from "../../../redux/action/Department/DeleteDepartment.action";
import DeleteSomeDepartmentsAction from "../../../redux/action/Department/DeleteSomeDepartments.action";
import {aleartsToast} from "../../../utils/alearts/alearts";

function DepartmentsEmployeesTap(props) {
    const [isAddDepartmentModalOpen, setIsAddDepartmentModalOpen] = useState(false);
    const [isEditDepartmentModalOpen, setIsEditDepartmentModalOpen] = useState(false);
    const [editDepartmentItem, setEditDepartmentItem] = useState({});
    const departmentsItems = useSelector((state) => state.departments);
    const departments = departmentsItems.data;
    const dispatch = useDispatch();

    const {
        selectedIds: departmentIds,
        selectAllChecked,
        handleSelectAllChange,
        handleCheckboxChange
    } = useCheckboxHandlers(departments);

    const displayAddDepartmentModal = () => {
        setIsAddDepartmentModalOpen(!isAddDepartmentModalOpen);
    };

    const displayEditDepartmentModal = () => {
        setIsEditDepartmentModalOpen(!isEditDepartmentModalOpen);
    };

    const handelEditIcon = (department) => {
        setEditDepartmentItem(department)
        setIsEditDepartmentModalOpen(!isEditDepartmentModalOpen);

    };

    const handelDeleteIcon = (department) => {
        dispatch(DeleteDepartmentAction({ id: department._id }));
    };

    const handelClickDeleteBtn = () => {
        if (departmentIds.length > 0) {
            dispatch(DeleteSomeDepartmentsAction({ departmentIds: departmentIds }));
        } else {
            aleartsToast("error", "يرجى اختيار بعض الأقسام ");
        }
    };

    useEffect(() => {
        dispatch(GetDepartmentAction({ page: 1 }));
    }, [dispatch]);

    return (
        <>
            <TableWithBtns className={"gap-3 mt-10"} title="الأقسام" titleClass={"pr-10"}
                           deleteIcon={true} handelDeleteIcon={handelClickDeleteBtn}
                           departmentIcon={true} handelDepartmentIcon={displayAddDepartmentModal}>
                <thead
                    className="table-font text-primary text-gray-900 uppercase dark:text-gray-400 title-table-font">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <input type="checkbox" checked={selectAllChecked} onChange={handleSelectAllChange}/>
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
                {departments.length > 0 ? (
                    departments.map((department) => (
                        <tr key={department._id}>
                            <td className="px-6 py-4">
                                <input type="checkbox" name={"check[]"} value={department._id}
                                       checked={departmentIds.includes(department._id)}
                                       onChange={(event) => handleCheckboxChange(event)}/>
                            </td>
                            <td className="px-6 py-4">
                                {department.name}
                            </td>
                            <td className="px-6 py-4">
                                {department.supervisor?.name}
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
                            <td className="px-6 py-4">
                                <EditAndDeleteIcons editIcon={true}
                                                    deleteIcon={true}
                                                    handelEditIcon={() => handelEditIcon(department)}
                                                    handelDeleteIcon={() => handelDeleteIcon(department)}
                                                    classEdit={"text-primary"}
                                                    classDelete={"text-red-500"}
                                                    className={"flex-row-reverse justify-end gap-3"} />
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7" className={"text-center"}>
                            لا يوجد اقسام متوفرة
                        </td>
                    </tr>
                )}
                </tbody>
            </TableWithBtns>

            <NewDepartmentModal isModalOpen={isAddDepartmentModalOpen} onClose={displayAddDepartmentModal}/>
            <EditDepartmentModal department={editDepartmentItem}  isModalOpen={isEditDepartmentModalOpen} onClose={displayEditDepartmentModal}/>
        </>
    );
}

export default DepartmentsEmployeesTap;
