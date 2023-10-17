import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { FunctionComponent } from "react";
import { deleteTask } from "../models/TaskSlice";
import Task from "../models/Task";
import { useAppDispatch } from "../../../store/hooks";

interface DeleteTaskDialogProps {
    open:boolean;
    handleClose:()=>void;
    task:Task
}
 
const DeleteTaskDialog: FunctionComponent<DeleteTaskDialogProps> = ({open,handleClose,task}) => {
    const dispatch=useAppDispatch();
    return (  <Dialog
        open={open}
        // TransitionComponent={Transition}
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
                dispatch(deleteTask(task))
                handleClose();
            }}>Agree</Button>
        </DialogActions>
    </Dialog> );
}
 
export default DeleteTaskDialog;