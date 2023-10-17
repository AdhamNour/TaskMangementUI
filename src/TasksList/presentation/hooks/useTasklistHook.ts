import {useAppSelector} from '../../../store/hooks';
import React, { useCallback, useState } from 'react';
export const useTaskListHook=()=>{
    let taskList = useAppSelector(state => state.tasks.tasks)
    const searchText = useAppSelector(state => state.searchText.searchText)
    const [open, setOpen] = useState(false);
    
    const handleClickOpen =useCallback(
      () => {
        setOpen(true)
      },
      [],
    )
    ;

    const handleClose = useCallback(
        () => {
          setOpen(false)
        },
        [],
      );

    let errorText ;
    if(taskList.length !==0) errorText = `There is no tasks added yet, add some`
    if(searchText !=='') errorText = `There is no results matching the search "${searchText}"`

    if (searchText !== '') taskList=taskList.filter(task => task.getTitle().includes(searchText))
        return {taskList,handleClickOpen,handleClose,open,errorText}
}