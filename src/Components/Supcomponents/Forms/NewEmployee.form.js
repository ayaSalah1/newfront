import React from 'react';
import TextInput from "../inputs/TextInput";
import DefaultFileInput from "../inputs/DefaultFileInput";
import DefaultSelect from "../inputs/DefaultSelect";
import DefaultBtn from "../Buttons/DefaultBtn";

function NewEmployeeForm(props) {
    return (
        <div className={"w-full flex flex-col " + props.className}>
            {
                props.title ? <h4 className={"text-xl"}>اضافة موظف</h4> : ""
            }

            <div className={"inputs flex gap-5 justify-between flex-wrap w-full"}>
                <TextInput className={"custom-w-44"} name={"name"} value={""} title={"الاسم"}/>
                <TextInput className={"custom-w-44"} name={"name"} value={""} title={"الايميل"}/>
                <TextInput className={"custom-w-44"} name={"name"} value={""} title={"كلمه المرور"}/>
                <TextInput className={"custom-w-44"} name={"name"} value={""} title={"تأكيد كلمه المرور"}/>
                <DefaultFileInput className={"custom-w-44 text-default-opacity"} name={"name"} value={""}
                                  title={"صورة الغلاف (اختياري)"}/>
                <DefaultSelect className={"custom-w-44"} classNameSelect={"select-arrow-left"} name={"teamEmployee"}
                               value={""} title={"فريق الموظف"}/>
                <DefaultSelect className={"custom-w-44"} classNameSelect={"select-arrow-left"} name={"teamEmployee"}
                               value={""} title={"نوع الموظف"}/>
                <TextInput className={"custom-w-44"} name={"name"} value={""} title={"ايام الاجازه السنويه"}/>
                <TextInput className={"custom-w-44"} name={"name"} value={""} title={"الصلاحيات"}/>
                <DefaultSelect className={"custom-w-44"} classNameSelect={"select-arrow-left"} name={"teamEmployee"}
                               value={""} title={"اختر الفئات"}/>
            </div>
            <DefaultBtn className={"mt-10"} title={"اضافة موظف"}/>
        </div>
    );
}

export default NewEmployeeForm;