import React from "react";
import TapsComponent from "../../Components/Taps.component";
import TasksList from "./components/TaskCardComponent";
import TableWithBtns from "../../Tables/TableWithBtns";
import ThirdTapComponent from "./components/ThirdTabComponent";

const ManageTasks = () => {
  return (
    <div>
      <TapsComponent
        firstTapTitle={"ادارة المهام"}
        secondTapTitle={"قائمة"}
        thirdTapTitle={"المهام والتقيمات"}
        FourthTapTitle={"التحليلات"}
        FifthTapTitle={"المشكلات"}
        firstTapComponent={<TasksList />}
        SecondTapComponent={
          <TableWithBtns
            className={"gap-3 mt-10"}
            title="جدول المهام"
            titleClass={"pr-10"}
            deleteIcon={true}
          >
            <thead className="table-font text-primary text-gray-900 uppercase dark:text-gray-400 title-table-font">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <input type={"checkbox"} name={""} onChange={() => {}} />
                </th>
                <th scope="col" className="px-6 py-3">
                  العنوان
                </th>
                <th scope="col" className="px-6 py-3">
                  الاهمية{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  الموظف{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  الفريق{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  موعد التسليم{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  الحالة
                </th>
                <th scope="col" className="px-6 py-3">
                  الوصف
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-6 py-4">
                  <input type={"checkbox"} name={""} onChange={() => {}} />
                </td>
                <td className="px-6 py-4">تحليل البيانات</td>
                <td className="px-6 py-4">مهمة مستعجلة</td>
                <td className="px-6 py-4">حازم المدهون</td>
                <td className="px-6 py-4">ناشر محترم</td>
                <td className="px-6 py-4">21-5-2024</td>
                <td className="px-6 py-4 text-red-600">لم تنتهي بعد</td>
                <td className="px-6 py-4"> تطبيقات</td>
              </tr>
            </tbody>
          </TableWithBtns>
        }
        ThirdTapComponent={<ThirdTapComponent />}
        // FourthTapComponent={<PlanningEmployeesTap />}
      />
    </div>
  );
};

export default ManageTasks;
