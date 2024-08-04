import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import TextInput from "../inputs/TextInput";
import DefaultFileInput from "../inputs/DefaultFileInput";
import DefaultSelect from "../inputs/DefaultSelect";
import DefaultBtn from "../Buttons/DefaultBtn";
import GetDepartmentAction from "../../../redux/action/Department/GetDepartment.action";
import { useDispatch, useSelector } from "react-redux";
import { empTypeOptions, rolesOptions } from "../../../utils/Methods/StaticOptions";
import GetCategoriesAction from "../../../redux/action/Category/GetCategories.action";
import MultiSelectComponent from "../inputs/MultiSelect";
import CreateEmployeeAction from "../../../redux/action/Employee/CreateEmployees.action";
import EditEmployeeAction from "../../../redux/action/Employee/EditEmployee.action";

function NewEmployeeForm(props) {
    const [initialValues, setInitialValues] = useState({
        name: "", email: "", phone: "", profileImg: {}, type: "", department: "", holidays: "", role: "",
        Category: [],weekEnd:5
    });
    const [selectedFile, setSelectedFile] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const departments = useSelector((state) => state.departments.data);
    const categories = useSelector((state) => state.categories.data);

    const handleSubmit = (values) => {
        setIsLoading(true)

        const Category = values.Category?.map((category) => {
            return category.value
        })
        if(props.employee){
            console.log(values)
            const email = props.employee?.email === values.email ? "" : values.email;
            dispatch(
                EditEmployeeAction({ ...values, id: props.employee._id, email: email })
            ).then(() => {
                setIsLoading(false)
            });
        }else{
            dispatch(CreateEmployeeAction({
                ...values,
                Category: Category,
                image: selectedFile,
            })).then(() => {
                setIsLoading(false)
            })
        }
    };


    const onChangeFunction = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    useEffect(() => {
        if (props.employee) {
            const categoryOptions = props.employee.Category ? props.employee.Category.map((category) => {
                return { value: category._id, label: category.name };
            }) : [];
            console.log(props.employee)
            // if (props.employee.profileImg) {
            //     console.log("bilal")
            //     setSelectedFile({ name: props.employee.profileImg });
            // }
            setInitialValues(prevValues => ({
                ...prevValues,
                ...props.employee,
                Category: categoryOptions,
                password:""
                // profileImg: {name:props.employee.profileImg}
            }));
        }
    }, [props.employee]);  // Ensure that this effect runs when props.employee changes


    useEffect(() => {
        dispatch(GetDepartmentAction({ page: 1 }));
        dispatch(GetCategoriesAction({ page: 1 }));
    }, [dispatch]);

    const categoryOptions = categories.map((category) => {
        return { value: category._id, label: category.name };
    });

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
            {({ values, handleChange, setFieldValue }) => (
                <Form className={"w-full flex flex-col " + props.className}>
                    {props.title ? <h4 className={"text-xl"}>اضافة موظف</h4> : ""}
                    <div className={"inputs flex gap-5 justify-between flex-wrap w-full"}>
                        <TextInput
                            className={"custom-w-44"}
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            title={"الاسم"}
                        />
                        <TextInput
                            className={"custom-w-44"}
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            title={"الايميل"}
                        />
                        <TextInput
                            className={"custom-w-44"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            title={"كلمة المرور"}
                        />
                        <TextInput
                            className={"custom-w-44"}
                            name="passwordConfirm"
                            value={values.passwordConfirm}
                            onChange={handleChange}
                            title={"تأكيد كلمة المرور"}
                        />
                        <DefaultFileInput
                            className={"custom-w-44 text-default-opacity"}
                            name="image"
                            onChange={(event) => onChangeFunction(event)}
                            value={selectedFile}
                            title={"صورة الغلاف (اختياري)"}
                        />
                        <DefaultSelect
                            className={"custom-w-44"}
                            classNameSelect={"select-arrow-left"}
                            name="Department"
                            value={values.Department}
                            onChange={handleChange}
                            title={"فريق الموظف"}
                        >
                            {departments.map((department) => (
                                <option key={department._id} selected={department._id === props.employee?.Department?._id} value={department._id}>{department.name}</option>
                            ))}
                        </DefaultSelect>
                        <DefaultSelect
                            className={"custom-w-44"}
                            classNameSelect={"select-arrow-left"}
                            name="type"
                            value={values.type}
                            onChange={handleChange}
                            title={"نوع الموظف"}
                        >
                            {empTypeOptions.map((type) => (
                                <option key={type._id}
                                        selected={type._id === props.employee?.type}
                                        value={type._id}>{type.name}</option>
                            ))}
                        </DefaultSelect>
                        <TextInput
                            className={"custom-w-44"}
                            name="holidays"
                            value={values.holidays}
                            onChange={handleChange}
                            title={"ايام الاجازة السنوية"}
                        />
                        <DefaultSelect
                            className={"custom-w-44"}
                            classNameSelect={"select-arrow-left"}
                            name="role"
                            value={values.role}
                            onChange={handleChange}
                            title={"الصلاحيات"}
                        >
                            {rolesOptions.map((role) => (
                                <option key={role._id} selected={role._id === props.employee?.role} value={role._id}>{role.name}</option>
                            ))}
                        </DefaultSelect>
                        <MultiSelectComponent
                            className={"custom-w-44"}
                            value={values.Category}
                            name="Category"
                            options={categoryOptions}
                            onChange={(selectedOptions) => setFieldValue('Category', selectedOptions)}
                            title={"اختر الفئات"}
                        />
                    </div>
                    <DefaultBtn spanner={isLoading} className={"mt-6"} title={props.titleBtn} />
                </Form>
            )}
        </Formik>
    );
}

export default NewEmployeeForm;
