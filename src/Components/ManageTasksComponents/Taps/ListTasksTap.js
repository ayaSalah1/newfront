import React, {useEffect} from 'react';
import BtnsIcons from "../../Supcomponents/Buttons/BtnsIcons";
import TableWithBtns from "../../../Tables/TableWithBtns";
import {useCheckboxHandlers} from "../../../utils/Methods/checkboxHandlers";
import {formatDate} from "../../../utils/Methods/formatDate.method";
import {useDispatch, useSelector} from "react-redux";
import GetTasksAction from "../../../redux/action/Task/GetTasks.action";

function ListTasksTap(props) {

    const tasks = useSelector((state) => state.tasks.data);

    const {
        selectedIds: elementsId,
        selectAllChecked,
        handleSelectAllChange,
        handleCheckboxChange
    } = useCheckboxHandlers(tasks);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetTasksAction({ page: 1 }));
    }, [dispatch]);

    return (
        <div className={"container px-10 box-border"}>
            <div className="w-full mt-10 flex flex-wrap items-center">
                    <div className="w-full overflow-x-auto">
                        <TableWithBtns
                            title="جدول المهام"
                            deleteIcon={true}
                        >
                            <thead className="table-font text-primary text-gray-900 uppercase dark:text-gray-400 title-table-font">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    <input type="checkbox" checked={selectAllChecked} onChange={handleSelectAllChange} />
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    العنوان
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الأهمية
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الموظف
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الفريق
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    موعد التسليم
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                    الحالة
                                </th>
                                <th scope="col" className="px-6 py-3 w-auto whitespace-nowrap">
                                   الوصف
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {tasks.length > 0 ? (
                                tasks.map((element) => (
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
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.priority}</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.assignTo?.name}</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.assignTo?.Department?.name}</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{formatDate(element.deadline)}</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">{element.holidays} يوم</td>
                                        <td className="px-6 py-4 w-auto whitespace-nowrap">
                                            {/*<EditAndDeleteIcons*/}
                                            {/*    editIcon={true}*/}
                                            {/*    deleteIcon={true}*/}
                                            {/*    handelEditIcon={() => {}}*/}
                                            {/*    handelDeleteIcon={() => {}}*/}
                                            {/*    classEdit={"text-primary"}*/}
                                            {/*    classDelete={"text-red-500"}*/}
                                            {/*    editContent={"تعديل الموظف"}*/}
                                            {/*    deleteContent={"حذف الموظف"}*/}
                                            {/*    className={"flex-row-reverse justify-end gap-3"}*/}
                                            {/*/>*/}
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

            {/*<NewEmployeeModal isModalOpen={isNewEmployeeModalOpen} onClose={displayNewEmployeeModal} />*/}
            {/*<EditEmployeeModal employee={editItem} isModalOpen={isEditEmployeeModalOpen} onClose={displayEditEmployeeModal} />*/}
        </div>
    );
}

export default ListTasksTap;