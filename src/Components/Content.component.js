import React from 'react';
import LineChart from "../Charts/LineChart ";
import DoughnutChart from "../Charts/DoughnutChart";
import DefultTable from "../Tables/DefultTable";
import TapsHomeComponent from "./HomeComponents/Taps.home.component";
import ChartsHomeComponent from "./HomeComponents/Charts.home.component";

function ContentComponent(props) {
    return (
        <div className={"w-10/12 mx-auto"}>
            <TapsHomeComponent/>
            <ChartsHomeComponent/>
            <DefultTable/>
        </div>
    );
}

export default ContentComponent;