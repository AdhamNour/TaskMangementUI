import { Box, Card, Typography, Checkbox, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Slide } from '@mui/material';
import { Fragment, FunctionComponent, ReactElement, Ref, forwardRef, useState } from "react";
import Task, { TASK_STATE } from "../models/Task";
import { Delete, Edit } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import { addTask, deleteTask } from '../models/TaskSlice';
import { TransitionProps } from '@mui/material/transitions';
import { useAppDispatch } from '../../../store/hooks';

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

    const handleClose = () => {
        setDeleteTaskDialog(false);
    };
    const handleOpen = () => {
        setDeleteTaskDialog(true);

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
                    <IconButton aria-label="edit" color="secondary">
                        <Edit />
                    </IconButton>

                </Box>
            </Box>
        </Card>
        <Dialog
            open={deleteTaskDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{`Deleteing "${task.getTitle()}" task`}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    task "{task.getTitle()}" is going to be deleted, are you sure to continue that action?            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={() => {
                    dispath(deleteTask(task))
                    handleClose();
                }}>Agree</Button>
            </DialogActions>
        </Dialog>
    </Fragment>);
}

export default TaskListItem;