import React from 'react';

function TaskCalendarComponent(props) {
    return (
        <div className={"flex bg-default-input p-5 rounded-lg"}>
            <div className={"flex flex-col"}>
                <h3 className={"font-bold text-md"}>عنوان المهمه</h3>
                <div className={"flex items-center gap-1"}>
                    <div className={"rounded-full bg-primary h-2"} style={{padding: "4px"}}></div>
                    <p>نشر محترف للبيانات ومعرفه تفاصيل المهمه</p>
                </div>
            </div>
            <span className={"text-xs bg-primary text-white rounded-lg h-4 px-2"}>غير مسلمه</span>
        </div>
    );
}

export default TaskCalendarComponent;