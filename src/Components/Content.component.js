import React from 'react';
import LineChart from "../utils/Charts/LineChart ";
import DoughnutChart from "../utils/Charts/DoughnutChart";
import DefultTable from "../Tables/DefultTable";
import TapsComponent from "./Taps.component";
import ChartsHomeComponent from "./HomeComponents/Charts.home.component";

function ContentComponent(props) {
    return (
        <div className={"w-10/12 mx-auto"}>
            <TapsComponent/>
            <ChartsHomeComponent/>
            <DefultTable/>
        </div>
    );
}

export default ContentComponent;