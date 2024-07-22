import React, {useEffect, useState} from 'react';
import TextInput from "../../Components/Supcomponents/inputs/TextInput";
import DefaultBtn from "../../Components/Supcomponents/Buttons/DefaultBtn";
import DefaultSelect from "../../Components/Supcomponents/inputs/DefaultSelect";
import DefaultModal from "../DefaultModal";
import GetEmployeesAction from "../../redux/action/Employee/GetEmployees.action";
import {useDispatch, useSelector} from "react-redux";
import CreateDepartmentAction from "../../redux/action/Department/CreateDepartment.action";
import {ErrorMessage, Form, Formik} from "formik";
import {validationSchemaDepartment} from "../../validationSchema";

function NewDepartmentModal(props) {
    const employees = useSelector((state) => state.employees.data);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();


    const handleSubmitValues = (values) => {
        setIsLoading(true)
        dispatch(CreateDepartmentAction(values)).then(() => {
            props.onClose();
            setIsLoading(false)
        });
    };


    useEffect(() => {
        dispatch(GetEmployeesAction({page: 1}));
    }, [dispatch]);

    return (
        <DefaultModal isModalOpen={props.isModalOpen} title={"اضافة قسم"} onClose={props.onClose}>
            <Formik
                initialValues={{name: "", supervisor: ""}}
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
                                    {
                                        employees.map((element) => (
                                            <option value={element._id}
                                                    className={"option-default"}>{element.name}</option>
                                        ))
                                    }
                                </DefaultSelect>
                            </div>
                            <div className={"flex gap-12"}>
                                <ErrorMessage name="name">
                                    {(msg) => <div
                                        className="text-red-500 mb-3 custom-w-44 text-start text-sm mr-5">{msg}</div>}
                                </ErrorMessage>
                                <ErrorMessage name="supervisor">
                                    {(msg) => <div
                                        className="text-red-500 mb-3 custom-w-44 text-start text-sm mr-5">{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <DefaultBtn className={"my-10"} title={"اضافة قسم"} spanner={isLoading}/>
                    </Form>
                )}
            </Formik>
        </DefaultModal>
    );
}

export default NewDepartmentModal;
