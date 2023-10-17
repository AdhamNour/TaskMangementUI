import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { useAppDispatch } from '../../../store/hooks';
import { addTask } from '../models/TaskSlice';
import Task from '../models/Task';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface AddTaskDialogProps {
    open: boolean;
    handleClose: () => void;
}

const AddTaskDialog: FunctionComponent<AddTaskDialogProps> = ({ open, handleClose }) => {
    const dispath = useAppDispatch()
    const [taskTitleValue, setTaskTitleValue] = useState('')

    return (<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle>{"Adding New Task"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Porvide the title of the new task:
            </DialogContentText>
            <TextField id="outlined-basic" label="Task Title" variant="outlined" value={taskTitleValue} onChange={(text) => setTaskTitleValue(text.target.value)} />

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={()=>{
                dispath(addTask(new Task(Date.now().toString(),taskTitleValue)));
                setTaskTitleValue('');
                handleClose();
            }}>Agree</Button>
        </DialogActions>
    </Dialog>);
}

export default AddTaskDialog;