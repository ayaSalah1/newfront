import React from 'react';
import LineChart from "../../utils/Charts/LineChart ";
import DoughnutChart from "../../utils/Charts/DoughnutChart";

function ChartsHomeComponent(props) {
    return (
        <div className={"flex flex-row-reverse justify-evenly gap-10 py-10 border-b-2 border-gray-300"}>
            <div className={"w-5/12 flex items-center justify-center"}>
                <LineChart/>
            </div>
            <div className={"w-4/12 flex items-center justify-center"}>
                <DoughnutChart/>
            </div>
        </div>

    );
}

export default ChartsHomeComponent;