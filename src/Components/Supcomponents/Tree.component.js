import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import GetDepartmentAction from "../../redux/action/Department/GetDepartment.action";

function TreeComponent(props) {
    const departmentsItems = useSelector((state) => state.departments);
    const departments = departmentsItems.data;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetDepartmentAction({ page: 1 }));
    }, [dispatch]);

    const handleCheckboxChange = (e, id) => {
        const isChecked = e.target.checked;
        props.onChangeDepartment(isChecked, id);
    };

    return (
        <div className={"flex flex-col md:w-1/5 w-full gap-10"}>
            <h3 className={"font-bold pr-5"}>{props.title}</h3>
            <div className={"flex flex-col p-5 border-l-2"}>
                <div className={"flex flex-col bg-default-input p-5 rounded-md"}>
                    {departments.map((department) => (
                        <div className={"flex items-center gap-3"} key={department._id}>
                            <input
                                type={"checkbox"}
                                id={department._id}
                                name={props.name}
                                value={department._id}
                                onChange={(e) => handleCheckboxChange(e, department._id)}
                            />
                            <p className={"text-md"}>{department.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TreeComponent;
