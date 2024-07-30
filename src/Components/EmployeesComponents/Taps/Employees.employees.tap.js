import React, { useState } from "react";
import BtnsIcons from "../../Supcomponents/Buttons/BtnsIcons";
import NewDepartmentModal from "../../../modals/Department/NewDepartment.modal";
import EditDepartmentModal from "../../../modals/Department/EditDepartment.modal";
import TableWithBtns from "../../../Tables/TableWithBtns";
import TreeComponent from "../../Supcomponents/Tree.component";
import NewEmployeeModal from "../../../modals/Employee/NewEmployee.modal";
import EditEmployeeModal from "../../../modals/Employee/EditEmployee.modal";

function EmployeesEmployeesTap() {
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
  const displayNewEmployeeModal = () => {
    setIsNewEmployeeModalOpen(!isNewEmployeeModalOpen);
  };
  const displayEditEmployeeModal = () => {
    setIsEditEmployeeModalOpen(!isEditEmployeeModalOpen);
  };
  return (
    <>
      <div className={"w-full mt-10 flex flex-wrap h-full items-center"}>
        <div className={"w-full"}>
          <BtnsIcons
            userIcon={true}
            handelUserIcon={displayNewEmployeeModal}
            editIcon={true}
            handelEditIcon={displayEditEmployeeModal}
            deleteIcon={true}
            handelDeleteIcon={() => {}}
          />
        </div>

        <div className={"w-full flex gap-10"}>
          <TreeComponent title={"الأقسام"} />
          <div className={"flex-1"}>
            <TableWithBtns
              title={"جدول الموظفين"}
              isInput={true}
              inputTitle={"بحث"}
              inputName={"search"}
              inputValue={""}
              inputClass={"my-5"}
            >
              <thead className="table-font text-primary text-gray-900 uppercase dark:text-gray-400 title-table-font">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <input type={"checkbox"} name={""} onChange={() => {}} />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الاسم
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الايميل
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الفئة
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الفريق
                  </th>
                  <th scope="col" className="px-6 py-3">
                    نوع الموظف
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ايام الاجازه
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-6 py-4">
                    <input type={"checkbox"} name={""} onChange={() => {}} />
                  </td>
                  <td className="px-6 py-4">تواصل اجتماعي</td>
                  <td className="px-6 py-4">حازم</td>
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">25</td>
                  <td className="px-6 py-4">متفاعل</td>
                  <td className="px-6 py-4 text-red-600">10</td>
                </tr>
              </tbody>
            </TableWithBtns>
          </div>
        </div>
      </div>

      <NewEmployeeModal
        isModalOpen={isNewEmployeeModalOpen}
        onClose={displayNewEmployeeModal}
      />
      <EditEmployeeModal
        isModalOpen={isEditEmployeeModalOpen}
        onClose={displayEditEmployeeModal}
      />
    </>
  );
}

export default EmployeesEmployeesTap;
