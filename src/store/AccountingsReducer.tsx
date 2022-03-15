import { AccTypeId } from "../components/Accounting/AccountingsType"

export enum AccountingsActionTypes {
    SET_ACCOUNTINGS = "SET_ACCOUNTINGS",
    ADD_ACCOUNTING  =  "ADD_ACCOUNTING",
    SUB_ACCOUNTING  =  "SUB_ACCOUNTING",
    CHANGE_ACCOUNTING = "CHANGE_ACCOUNTING",

    ASYNC_SET_ACCOUNTINGS = "ASYNC_SET_ACCOUNTINGS",
    ASYNC_ADD_ACCOUNTING  =  "ASYNC_ADD_ACCOUNTING",
    ASYNC_SUB_ACCOUNTING  =  "ASYNC_SUB_ACCOUNTING",
    ASYNC_CHANGE_ACCOUNTING = "ASYNC_CHANGE_ACCOUNTING"
}

interface payloadChangeAccountingType {
    index: number;
    obj: AccTypeId;
}

interface AccountingsState {
    accountings: AccTypeId[];
}

export interface SetAccountingsAction {
    type: AccountingsActionTypes.SET_ACCOUNTINGS;
    payload: AccTypeId[];
}

export interface AddAccountingsAction {
    type: AccountingsActionTypes.ADD_ACCOUNTING;
    payload: AccTypeId;
}

export interface SubAccountingsAction {
    type: AccountingsActionTypes.SUB_ACCOUNTING;
    payload: number;
}

export interface ChangeAccountingsAction {
    type: AccountingsActionTypes.CHANGE_ACCOUNTING;
    payload: payloadChangeAccountingType;
}


type AccountingsAction = SetAccountingsAction | AddAccountingsAction | SubAccountingsAction | ChangeAccountingsAction;

const defaultState: AccountingsState = {
    accountings: []
}

const getSubObjArray = (i: number, array: AccTypeId[]) => {
    return array.filter((_, index) => index !== i);
}

const getInsertedObjArray = (i: number, obj: AccTypeId, array: AccTypeId[]) => {
    let newArray = [...array];
    newArray.splice(i, 1, obj);
    return newArray;
}

export const accountingsReducer = (state = defaultState, action: AccountingsAction): AccountingsState => {
    switch(action.type) {
        case AccountingsActionTypes.SET_ACCOUNTINGS:
            return { accountings: action.payload }
        case AccountingsActionTypes.ADD_ACCOUNTING:
            return { accountings: [...state.accountings, action.payload] }
        case AccountingsActionTypes.SUB_ACCOUNTING:
            return { accountings: getSubObjArray(action.payload, state.accountings) }  
        case AccountingsActionTypes.CHANGE_ACCOUNTING:
            return { accountings: getInsertedObjArray(action.payload.index, action.payload.obj, state.accountings)}         
        default:
            return state;
    }
}

export const setAccountingsCreator = (payload: AccTypeId[]) => ({type: AccountingsActionTypes.SET_ACCOUNTINGS, payload});
export const addAccountingCreator = (payload: AccTypeId) => ({type: AccountingsActionTypes.ADD_ACCOUNTING, payload});
export const subAccountingCreator = (payload: number) => ({type: AccountingsActionTypes.SUB_ACCOUNTING, payload});
export const changeAccountingCreator = (payload: payloadChangeAccountingType) => ({type: AccountingsActionTypes.CHANGE_ACCOUNTING, payload});

export const asyncSetAccountingsCreator = () => ({type: AccountingsActionTypes.ASYNC_SET_ACCOUNTINGS});
export const asyncAddAccountingCreator = (payload: AccTypeId) => ({type: AccountingsActionTypes.ASYNC_ADD_ACCOUNTING, payload});
export const asyncSubAccountingCreator = (payload: number) => ({type: AccountingsActionTypes.ASYNC_SUB_ACCOUNTING, payload});
export const asyncChangeAccountingCreator = (payload: payloadChangeAccountingType) => ({type: AccountingsActionTypes.ASYNC_CHANGE_ACCOUNTING, payload});