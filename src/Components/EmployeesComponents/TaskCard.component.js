import React from 'react';
import profileIcon from "../../assets/icons/profile.png";

function TaskCardComponent(props) {
    return (
        <div className={"w-full flex flex-row-reverse justify-around bg-default-input rounded-lg py-5 px-3"}>
            <div className={"info-user flex gap-2"}>
                <div className={"max-w-8"}>
                    <img className="max-w-full" src={profileIcon} alt="logo"/>
                </div>
                <div className={"flex flex-col"}>
                    <h3>احلام</h3>
                    <h3>ناشر محترف</h3>
                </div>
            </div>
            <div className={"info-task flex flex-col gap-3"}>
                <h3 className={"font-bold text-md"}>مهمة تحليل البيانات</h3>
                <div className={"description-task flex flex-col gap-2"}>
                    <h3 className={"font-bold text-md"}>التفاصيل</h3>
                    <p>نشر محترف للبيانات ومعرفه تفاصيل المهمه</p>
                </div>
            </div>
        </div>
    );
}

export default TaskCardComponent;