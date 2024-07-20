import React from 'react';

function TapsHomeComponent(props) {
    return (
        <div className={"taps flex justify-start px-10"}>
            <ul className={"list-taps flex w-full border-b-2 border-gray-300 flex-row gap-6"}>
                <li id={"home-tap"} onClick={(e) => props.handleTapsMovs(e)} className={`item-tap ${props.tapsStates.isHomeTap ? ' active-tap ' : null}`}>الرئيسية</li>
                <li id={"add-department-tap"} className={`item-tap ${props.tapsStates.isAddDepartmentTap ? ' active-tap ' : null}`} onClick={(e) => props.handleTapsMovs(e)} >اضافه قسم</li>
                <li id={"add-employee-tap"} className={`item-tap ${props.tapsStates.isAddEmployeeTap ? ' active-tap ' : null}`} onClick={(e) => props.handleTapsMovs(e)}>اضافه موظف جديد</li>
                <li id={"add-task-tap"} className={`item-tap ${props.tapsStates.isAddTaskTap ? ' active-tap ' : null}`} onClick={(e) => props.handleTapsMovs(e)} >انشاء مهمة</li>
            </ul>
        </div>
    );
}

export default TapsHomeComponent;