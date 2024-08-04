import React from 'react';
import EditAndDeleteIcons from "../Supcomponents/Buttons/EditAndDeleteIcons";

function TaskComponent(props) {
    return (
        <div className={"task flex flex-col gap-3 bg-white px-5 py-3 rounded-xl shadow-gray-700 shadow-md"}>
            <div className={"title-task flex justify-between"}>
                <h3>مهمة تحليل بيانات</h3>
                <div className={"employee-task flex gap-2 items-center"}>
                    <div className={"image-employee-task rounded-full max-w-6"}>
                        <img className={"max-w-full rounded-full"} src={"https://placehold.co/400x400"} alt={"img"}/>
                    </div>
                    <h3>كريم</h3>
                </div>
            </div>
            <div className={"date-task flex justify-between items-end"}>
                <div
                    className={"date flex py-2 px-4 justify-between text-sm items-center bg-primary rounded-md text-white w-6/12"}>
                    <div>17 oct 2024</div>
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className={"task-actions w-3/12"}>
                    <EditAndDeleteIcons
                        editIcon={true}
                        deleteIcon={true}
                        bgPrimaryDelete={true}
                        handelEditIcon={() => {
                        }}
                        handelDeleteIcon={() => {
                        }}
                        // classEdit={"text-primary"}
                        // classDelete={"text-red-500"}
                        editContent={"تعديل المهمة"}
                        deleteContent={"حذف المهمة"}
                        className={"flex-row-reverse justify-end gap-3 text-sm"}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaskComponent;