import {combineReducers, createStore} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {worksReducer} from "./artWorks-reducer";

const rootReducer = combineReducers({
  works: worksReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;