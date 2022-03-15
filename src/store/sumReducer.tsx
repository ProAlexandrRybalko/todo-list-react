export const SET_SUM = "SET_SUM";
export const ADD_SUM = "ADD_SUM";
export const SUB_SUM = "SUB_SUM";
export const ASYNC_SET_SUM = "ASYNC_SET_SUM";
export const ASYNC_ADD_SUM = "ASYNC_ADD_SUM";
export const ASYNC_SUB_SUM = "ASYNC_SUB_SUM";

interface SumState {
    sum: number;
}

export interface SumAction {
    type: string;
    payload: number;
}

const defaultState: SumState = {
    sum: 0
}

export const sumReducer = (state = defaultState, action: SumAction): SumState => {
    switch(action.type) {
        case SET_SUM:
            return { sum: action.payload }
        case ADD_SUM:
            return { sum: state.sum + action.payload }
        case SUB_SUM:
            return { sum: state.sum - action.payload }         
        default:
            return state;
    }
}

export const setSumCreator = (payload: number) => ({type: SET_SUM, payload});
export const addSumCreator = (payload: number) => ({type: ADD_SUM, payload});
export const subSumCreator = (payload: number) => ({type: SUB_SUM, payload});

export const asyncSetSumCreator = () => ({type: ASYNC_SET_SUM});
export const asyncAddSumCreator = (payload: number) => ({type: ASYNC_ADD_SUM, payload});
export const asyncSubSumCreator = (payload: number) => ({type: ASYNC_SUB_SUM, payload});