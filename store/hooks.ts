import { RootState, AppDispatch } from ".";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
