import React, {useEffect, useState} from 'react';
import DefaultModal from "../DefaultModal";
import TextInput from "../../Components/Supcomponents/inputs/TextInput";
import DefaultSelect from "../../Components/Supcomponents/inputs/DefaultSelect";
import DefaultBtn from "../../Components/Supcomponents/Buttons/DefaultBtn";
import {ErrorMessage, Form, Formik} from "formik";
import {validationSchemaDepartment} from "../../validationSchema";
import {useDispatch, useSelector} from "react-redux";
import GetEmployeesAction from "../../redux/action/Employee/GetEmployees.action";
import EditDepartmentAction from "../../redux/action/Department/EditDepartment.action";

function EditDepartmentModal(props) {
    const employees = useSelector((state) => state.employees.data);
    const [isLoading, setIsLoading] = useState(false);
    const [initialValues, setInitialValues] = useState({name: '', supervisor: ''});
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.department) {
            setInitialValues({
                name: props.department.name || '',
                supervisor: props.department.supervisor?._id || ''
            });
        }
    }, [props.department]);

    const handleSubmitValues = (values) => {
        setIsLoading(true)
        dispatch(EditDepartmentAction({id: props.department._id, name: values.name, supervisor: values.supervisor})).then(() => {
            props.onClose();
            setIsLoading(false)
        });
    };

    useEffect(() => {
        dispatch(GetEmployeesAction({page: 1}));
    }, [dispatch]);

    return (
        <DefaultModal isModalOpen={props.isModalOpen} title={"تعديل قسم"} onClose={props.onClose}>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={handleSubmitValues}
                validationSchema={validationSchemaDepartment}
            >
                {({handleChange, values, touched, errors}) => (
                    <Form className="flex flex-col w-full items-center py-15 ">
                        <div className={"flex flex-col w-full gap-2"}>
                            <div className={"inputs w-full px-3 flex items-center justify-center gap-16"}>
                                <TextInput onChange={handleChange} className={"custom-w-44"}
                                           name={"name"} value={values.name} title={"اسم القسم"}/>
                                <DefaultSelect onChange={handleChange}
                                               className={"custom-w-44"} classNameSelect={"select-arrow-left"}
                                               name={"supervisor"} title={"اسم المدير"} value={values.supervisor}>
                                    <option value="">اختر مدير</option>
                                    {
                                        employees.map((element) => (
                                            <option key={element._id} value={element._id}
                                                    className={"option-default"}
                                                    selected={element._id === initialValues.supervisor}
                                            >{element.name}</option>
                                        ))
                                    }
                                </DefaultSelect>
                            </div>
                            <div className={"flex gap-12"}>
                                <ErrorMessage name="name">
                                    {(msg) => <div className="text-red-500 mb-3 custom-w-44 text-start text-sm mr-5">{msg}</div>}
                                </ErrorMessage>
                                <ErrorMessage name="supervisor">
                                    {(msg) => <div className="text-red-500 mb-3 custom-w-44 text-start text-sm mr-5">{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <DefaultBtn className={"my-10"} title={"تعديل قسم"} spanner={isLoading}/>
                    </Form>
                )}
            </Formik>
        </DefaultModal>
    );
}

export default EditDepartmentModal;
