import { Fab, Grid } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import TaskListItem from "../widgets/TaskListItem";
import { useAppSelector } from "../../../store/hooks";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import AddTaskDialog from "../widgets/AddTaskDialog";
import { useTaskListHook } from "../hooks/useTasklistHook";


interface TasksListProps {

}




const TasksList: FunctionComponent<TasksListProps> = () => {
    const {handleClickOpen,handleClose,taskList,open} = useTaskListHook();    

    const displayedTasks = taskList.map((task, index) => {
        return <Grid item xs={12} md={(index === taskList.length - 1) && (index % 2 === 0) ? 12 : 6} key={task.getId()}>
            <TaskListItem task={task} />
        </Grid>;
    })

    return (<Fragment>
        <Grid container spacing={2}>
            {displayedTasks}
        </Grid>
        <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 20, right: 20 }} onClick={() => {
            handleClickOpen();
        }}>
            <AddIcon />
        </Fab>
        <AddTaskDialog open={open} handleClose={handleClose} />
    </Fragment>);
}

export default TasksList;