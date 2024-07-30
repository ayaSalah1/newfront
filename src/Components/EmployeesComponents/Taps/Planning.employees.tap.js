import React, { useState } from "react";
import TaskCardComponent from "../TaskCard.component";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TaskCalendarComponent from "../TaskCalendar.component";

function PlanningEmployeesTap(props) {
  const [value, onChange] = useState(new Date());

  // Example task data
  const tasks = [
    {
      name: "احلام",
      role: "ناشر محترف",
      taskTitle: "مهمة تحليل البيانات",
      taskDetails: "نشر محترف للبيانات ومعرفه تفاصيل المهمه",
    },
    {
      name: "علي",
      role: "مطور",
      taskTitle: "تطوير واجهة المستخدم",
      taskDetails: "تحسين تصميم الواجهة وتجربة المستخدم",
    },
    // Add more tasks as needed
  ];

  return (
    <div className={"w-full flex justify-between mt-10 flex-wrap"}>
      <div className={"w-5/12 flex flex-col gap-5"}>
        <h3 className={"font-bold text-md mr-10"}>مهام تاريخ 8/1</h3>
        <div className={"flex flex-col gap-4 max-h-full"}>
          <TaskCardComponent tasks={tasks} />
        </div>
      </div>
      <div className={"flex flex-col items-center gap-6"}>
        <Calendar onChange={onChange} value={value} />
        <div className={"flex flex-col"}>
          <div className={"flex flex-col gap-3"}>
            <div className={"flex justify-between px-2"}>
              <h3 className={"font-bold text-md"}>المهام</h3>
              <div className={"icons-tasks flex gap-3"}>
                <i className="fa-regular fa-pen-to-square"></i>
                <i className="fa-solid fa-circle-plus"></i>
              </div>
            </div>
            <div className={"flex flex-col gap-3"}>
              <TaskCalendarComponent />
              <TaskCalendarComponent />
              <TaskCalendarComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanningEmployeesTap;
