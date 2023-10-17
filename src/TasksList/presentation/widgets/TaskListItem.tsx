import { Box, Card, Typography, Checkbox } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Task from "../models/Task";
import { } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

interface TaskListItemProps {
    task: Task
}

enum TASK_STATE {
    NOT_STARTED,
    IN_PROGRESS,
    FINISHED,

}

const TaskListItem: FunctionComponent<TaskListItemProps> = ({ task }) => {
    const [taskState, setTaskState] = useState<TASK_STATE>(TASK_STATE.NOT_STARTED);
    return (<Card>
        <Box padding={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography>{task.getTitle()}</Typography>
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
        </Box>
    </Card>);
}

export default TaskListItem;