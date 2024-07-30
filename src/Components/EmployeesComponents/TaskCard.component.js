import React from "react";
import profileIcon from "../../assets/icons/profile.png";

function TaskCardComponent({ tasks }) {
  return (
    <div className="w-full bg-default-input rounded-lg py-5 px-5">
      {tasks.map((task, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-6 mb-6 last:mb-0">
            <div className="info-task flex flex-col w-2/3">
              <h3 className="font-bold text-lg">{task.taskTitle}</h3>
              <div className="description-task flex flex-col gap-3 mt-3">
                <h4 className="text-md font-semibold">التفاصيل</h4>
                <p className="text-sm text-gray-400">{task.taskDetails}</p>
              </div>
            </div>
            <div className="info-user flex items-center gap-4 w-1/3 text-right rtl">
              <div className="max-w-12">
                <img
                  className="w-10 h-10 rounded-full"
                  src={profileIcon}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-medium">{task.name}</h3>
                <h4 className="text-xs text-gray-600">{task.role}</h4>
              </div>
            </div>
          </div>
          {index < tasks.length - 1 && (
            <hr className="border-t-2 border-gray-300 mb-6" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default TaskCardComponent;
