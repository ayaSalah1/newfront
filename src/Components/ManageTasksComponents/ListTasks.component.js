import React from 'react';
import EditAndDeleteIcons from "../Supcomponents/Buttons/EditAndDeleteIcons";
import TaskComponent from "./Task.component";

function ListTasksComponent(props) {
    return (
        <div className={"bg-primary-100 flex flex-col rounded-xl py-5 px-3 gap-5 w-[32%] mb-5"}>
            <div className={"list-task-title flex justify-between px-3 items-center"}>
                <h3 className={"text-lg"}>كتابة محتوى</h3>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
            <div className={"list-task flex flex-col gap-4"}>
                <TaskComponent />
                <TaskComponent />
                <TaskComponent />
                <TaskComponent />
            </div>
            <div className={"new-task flex w-full items-center gap-3 px-3 cursor-pointer"}>
                <i className="fa-solid fa-plus"></i>
                <div>
                    اضافة مهمة جديدة
                </div>
            </div>
        </div>
    );
}

export default ListTasksComponent;