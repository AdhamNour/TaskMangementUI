import { Box, Card, Typography, Checkbox, IconButton, Slide } from '@mui/material';
import { Fragment, FunctionComponent, ReactElement, Ref, forwardRef, useState } from "react";
import Task, { TASK_STATE } from "../models/Task";
import { Delete, Edit } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import { TransitionProps } from '@mui/material/transitions';
import { useAppDispatch } from '../../../store/hooks';
import DeleteTaskDialog from './DeleteTaskDialog';
import EditTaskDialog from './EditTaskDialog';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface TaskListItemProps {
    task: Task
}

const TaskListItem: FunctionComponent<TaskListItemProps> = ({ task }) => {
    const dispath = useAppDispatch();
    const [deleteTaskDialog, setDeleteTaskDialog] = useState(false)
const [editTaskDialog, setEditTaskDialog] = useState(false)
    const handleClose = () => {
        setDeleteTaskDialog(false);
    };
    const handleOpen = () => {
        setDeleteTaskDialog(true);

    }
    const handleOpenEditTaskDialog=()=>{
        setEditTaskDialog(true);
    }
    const handleCloseEditTaskDialog=()=>{
        setEditTaskDialog(false);

    }
    const [taskState, setTaskState] = useState<TASK_STATE>(TASK_STATE.NOT_STARTED);
    return (<Fragment>
        <Card>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box padding={2} display={"flex"} alignItems={"center"}>
                    <Checkbox checked={taskState === TASK_STATE.FINISHED} indeterminate={taskState === TASK_STATE.IN_PROGRESS} onClick={() => {
                        if (taskState === TASK_STATE.NOT_STARTED) setTaskState(TASK_STATE.IN_PROGRESS);
                        if (taskState === TASK_STATE.IN_PROGRESS) setTaskState(TASK_STATE.FINISHED);
                    }}
                        sx={{
                            color: red[800],
                            '&.Mui-checked': {
                                color: green[600],
                            },
                        }} />
                    <Typography>{task.getTitle()}</Typography>
                </Box>
                <Box padding={2} display={"flex"} alignItems={"center"}>
                    <IconButton aria-label="delete" color="error" onClick={handleOpen}>
                        <Delete />
                    </IconButton>
                    <IconButton aria-label="edit" color="secondary" onClick={handleOpenEditTaskDialog}>
                        <Edit />
                    </IconButton>

                </Box>
            </Box>
        </Card>
       <DeleteTaskDialog open={deleteTaskDialog} handleClose={handleClose } task={task} />
       <EditTaskDialog open={editTaskDialog} handleClose={handleCloseEditTaskDialog } task={task} />
    </Fragment>);
}

export default TaskListItem;