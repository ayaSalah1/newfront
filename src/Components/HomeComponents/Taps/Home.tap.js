import React from 'react';
import ChartsHomeComponent from "../Charts.home.component";
import DefultTable from "../../../Tables/DefultTable";

function HomeTap(props) {
    return (
        <div className="flex flex-col max-h-full overflow-y-auto">
            <ChartsHomeComponent/>
            <DefultTable/>
        </div>
    );
}

export default HomeTap;