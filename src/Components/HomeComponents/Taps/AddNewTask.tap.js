import React from 'react';
import TextInput from "../../Supcomponents/inputs/TextInput";
import DefaultSelect from "../../Supcomponents/inputs/DefaultSelect";
import DefaultTextArea from "../../Supcomponents/inputs/DefaultTextArea";
import InputWithIcon from "../../Supcomponents/inputs/InputWithIcon";
import DefaultBtn from "../../Supcomponents/Buttons/DefaultBtn";

function AddNewTaskTap(props) {
    return (
        <div className={"w-full flex flex-col mt-5 gap-6 mx-auto px-20"}>
            <h4 className={"text-xl"}>انشاء مهمة </h4>
            <div className={"inputs flex gap-7 justify-between flex-wrap w-full"}>
                <div className={"flex gap-5 justify-between flex-wrap w-full"}>
                    <TextInput className={"w-full"} name={"title"} value={""} title={"العنوان"}/>
                    <DefaultTextArea className={"w-full default-text-area"} rows={4} name={"name"} value={""} title={"الوصف"}/>
                </div>
                <div className={"flex gap-3 justify-between flex-wrap w-full"}>
                    <DefaultSelect className={"custom-w-49"} classNameSelect={"select-arrow-right"} name={"teamEmployee"} value={""} title={"اختر الاولوية"}/>
                    <DefaultSelect className={"custom-w-49"} classNameSelect={"select-arrow-right"} name={"teamEmployee"} value={""} title={"اختر الفريق"}/>
                    <DefaultSelect className={"custom-w-49"} classNameSelect={"select-arrow-right"} name={"teamEmployee"} value={""} title={"اختيار الموظف"}/>
                    <div className={"custom-w-49 flex flex-wrap justify-between"}>
                        <InputWithIcon className={"custom-w-49 text-default-opacity"} id={"hour-task"}  name={"name"} value={""} iconClass={"far fa-calendar-alt"} title={"وقت المهمه بالساعات"} />
                        <InputWithIcon className={"custom-w-49 text-default-opacity"} id={"minutes-task"} name={"name"} value={""} iconClass={"far fa-calendar-alt"} title={"وقت المهمه بالدقائق"} />
                    </div>
                    <TextInput className={"custom-w-49"} name={"name"} value={""} title={"موعد بدايه المهمه"}/>
                    <TextInput className={"custom-w-49"} name={"name"} value={""} title={"اخر موعد تسليم"}/>
                </div>
            </div>
            <DefaultBtn className={"mt-10"} title={"حفظ مهمة"} />
        </div>
    );
}

export default AddNewTaskTap;