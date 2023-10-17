import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ChangeEvent, useCallback } from "react";
import {editSearchText} from '../models/searchTextSlice';

export const useLayoutHook=()=>{
    const currentURL= useLocation();
    const dispatch = useAppDispatch();
    const searchText = useAppSelector(state => state.searchText.searchText)
    const title = currentURL.pathname.replace('/','');

    const onSearchBarChange = useCallback(
      (newSearchText:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(editSearchText(newSearchText.target.value))
      },
      [dispatch],
    )
    
    return {onSearchBarChange,searchText,title}
}