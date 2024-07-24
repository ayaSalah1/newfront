import React, { useEffect, useState } from 'react';
import BtnsIcons from "../../Supcomponents/Buttons/BtnsIcons";
import TableWithBtns from "../../../Tables/TableWithBtns";
import TreeComponent from "../../Supcomponents/Tree.component";
import NewEmployeeModal from "../../../modals/Employee/NewEmployee.modal";
import EditEmployeeModal from "../../../modals/Employee/EditEmployee.modal";
import { useCheckboxHandlers } from "../../../utils/Methods/checkboxHandlers";
import { useDispatch, useSelector } from "react-redux";
import GetEmployeesAction from "../../../redux/action/Employee/GetEmployees.action";
import EditAndDeleteIcons from "../../Supcomponents/Buttons/EditAndDeleteIcons";
import DeleteDepartmentAction from "../../../redux/action/Department/DeleteDepartment.action";
import DeleteSomeDepartmentsAction from "../../../redux/action/Department/DeleteSomeDepartments.action";
import { aleartsToast } from "../../../utils/alearts/alearts";
import DeleteSomeEmployeesAction from "../../../redux/action/Employee/DeleteSomeEmployees.action";
import DeleteEmployeeAction from "../../../redux/action/Employee/DeleteEmployee.action";

function EmployeesEmployeesTap() {
    const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);
    const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
    const [editItem, setEditItem] = useState({});
    const employees = useSelector((store) => store.employees.data);
    const [employeesTable, setEmployeesTable] = useState(employees);
    const [searchInput, setSearchInput] = useState("");
    const [selectedDepartmentIds, setSelectedDepartmentIds] = useState([]);
    const dispatch = useDispatch();

    const {
        selectedIds: elementsId,
        selectAllChecked,
        handleSelectAllChange,
        handleCheckboxChange
    } = useCheckboxHandlers(employees);

    const displayNewEmployeeModal = () => {
        setIsNewEmployeeModalOpen(!isNewEmployeeModalOpen);
    };
    const displayEditEmployeeModal = () => {
        setIsEditEmployeeModalOpen(!isEditEmployeeModalOpen);
    };
    const handelEditIcon = (element) => {
        setEditItem(element);
        setIsEditEmployeeModalOpen(!isEditEmployeeModalOpen);
    };

    const handelDeleteIcon = (employee) => {
        dispatch(DeleteEmployeeAction({id: employee._id,employees:employees,tasks:employee.tasks})).then(() => {
            setEmployeesTable(employeesTable.filter((employeeItem) => employeeItem._id !== employee._id ))
        });
    };


    const handleDepartmentsCheck = (isChecked, id) => {
        let updatedSelectedDepartmentIds;
        if (isChecked) {
            updatedSelectedDepartmentIds = [...selectedDepartmentIds, id];
        } else {
            updatedSelectedDepartmentIds = selectedDepartmentIds.filter((deptId) => deptId !== id);
        }
        setSelectedDepartmentIds(updatedSelectedDepartmentIds);

        const filteredEmployees = employees.filter((employee) =>
            updatedSelectedDepartmentIds.includes(employee.Department?._id)
        );
        setEmployeesTable(filteredEmployees);
    };

    const handelOnChangeSearch = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        const employeesFilter = employees.filter((employee) =>
            employee.name.includes(value)
        );
        setEmployeesTable(employeesFilter);
    };
    const handelClickDeleteBtn = () => {
        if (elementsId.length > 0) {
            dispatch(DeleteSomeEmployeesAction({ employeesIds: elementsId })).then(() => {
                setEmployeesTable(employeesTable.filter((employee) => !elementsId.includes(employee._id)))
            });
        } else {
            aleartsToast("error", "يرجى اختيار بعض الموظفين ");
        }
    };

    useEffect(() => {
        dispatch(GetEmployeesAction({ page: 1 }));
    }, [dispatch]);

    return (
        <>
            <div className="w-full mt-10 flex flex-wrap items-center">
                <div className="w-full">
                    <BtnsIcons
                        userIcon={true}
                        handelUserIcon={displayNewEmployeeModal}
                        deleteIcon={true}
                        handelDeleteIcon={handelClickDeleteBtn}
                    />
                </div>
                <div className="w-full flex flex-wrap h-full gap-10">
                    <TreeComponent
                        onChangeDepartment={handleDepartmentsCheck}
                        title="الأقسام"
                    />
                    <div className="w-3/4 max-w-3/4 overflow-x-auto">
                        <TableWithBtns
                            title="جدول الموظفين"
                            isInput={true}
                            inputTitle="بحث"
                            inputValue={searchInput}
                            handleChangeSearchValue={handelOnChangeSearch}
                            inputName="search"
                            inputClass="my-5"
                        >
                            <thead className="table-font text-primary text-gray-900 uppercase dark:text-gray-400 title-table-font">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    <input type="checkbox" checked={selectAllChecked} onChange={handleSelectAllChange} />
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الاسم
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الايميل
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الفئة
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الفريق
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    نوع الموظف
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    ايام الاجازه
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الاجراءات
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {employeesTable.length > 0 ? (
                                employeesTable.map((element) => (
                                    <tr key={element._id} className="">
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                name="check[]"
                                                value={element._id}
                                                checked={elementsId.includes(element._id)}
                                                onChange={(event) => handleCheckboxChange(event)}
                                            />
                                        </td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.name}</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.email}</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">5</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.Department?.name}</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.type}</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.holidays} يوم</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">
                                            <EditAndDeleteIcons
                                                editIcon={true}
                                                deleteIcon={true}
                                                handelEditIcon={() => handelEditIcon(element)}
                                                handelDeleteIcon={() => handelDeleteIcon(element)}
                                                classEdit={"text-primary"}
                                                classDelete={"text-red-500"}
                                                className={"flex-row-reverse justify-end gap-3"}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        اختر احد الاقسام التي تريد عرض بيانات موظفيه
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </TableWithBtns>
                    </div>
                </div>
            </div>

            <NewEmployeeModal isModalOpen={isNewEmployeeModalOpen} onClose={displayNewEmployeeModal} />
            <EditEmployeeModal employee={editItem} isModalOpen={isEditEmployeeModalOpen} onClose={displayEditEmployeeModal} />
        </>
    );
}

export default EmployeesEmployeesTap;