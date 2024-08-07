import React, { useEffect } from "react";
import ChartsHomeComponent from "../Charts.home.component";
import DefultTable from "../../../Tables/DefultTable";
import { useDispatch, useSelector } from "react-redux";
import GetTasksAction from "../../../redux/action/Task/GetTasks.action";

function HomeTap(props) {
  const dispatch = useDispatch();
  const tasksItems = useSelector((state) => state.tasks);
  const tasks = tasksItems.data || []; // Default to empty array if data is not available
  useEffect(() => {
    dispatch(GetTasksAction({ page: 1 }));
  }, [dispatch]);

  return (
    <>
      <ChartsHomeComponent />
      <DefultTable data={tasks} />
    </>
  );
}

export default HomeTap;
