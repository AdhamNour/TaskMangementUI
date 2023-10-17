import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { useAppDispatch } from '../../../store/hooks';
import { addTask, updateTask } from '../models/TaskSlice';
import Task from '../models/Task';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface EditTaskDialogProps {
    open: boolean;
    handleClose: () => void;
    task:Task
}

const EditTaskDialog: FunctionComponent<EditTaskDialogProps> = ({ open, handleClose,task }) => {
    const dispath = useAppDispatch()
    const [taskTitleValue, setTaskTitleValue] = useState(task.getTitle())

    return (<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle>{`Editing ${taskTitleValue} Task`}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Porvide the title of the new task:
            </DialogContentText>
            <TextField id="outlined-basic" label="Task Title" variant="outlined" value={taskTitleValue} onChange={(text) => setTaskTitleValue(text.target.value)} />

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={()=>{
                task.setTitle(taskTitleValue);
                dispath(updateTask(task));
                // setTaskTitleValue('');
                handleClose();
            }}>Agree</Button>
        </DialogActions>
    </Dialog>);
}

export default EditTaskDialog;