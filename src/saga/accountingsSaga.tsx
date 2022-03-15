import { call, put, takeEvery } from "redux-saga/effects";
import { getAllAccountings } from "../assets/api/FetchAllAccountings";
import {
  AccountingsActionTypes,
  addAccountingCreator,
  AddAccountingsAction,
  changeAccountingCreator,
  ChangeAccountingsAction,
  setAccountingsCreator,
  subAccountingCreator,
  SubAccountingsAction,
} from "../store/AccountingsReducer";
import { allAccountingsResponse } from "./types";

function* setAccountingsWorker() {
  try {
    const response: allAccountingsResponse = yield call(getAllAccountings);
    yield put(setAccountingsCreator(response.data.accountings));
  } catch (err) {
    console.log(err);
  }
}

function* addAccountingsWorker(action: AddAccountingsAction) {
  yield put(addAccountingCreator(action.payload));
}

function* subAccountingsWorker(action: SubAccountingsAction) {
  yield put(subAccountingCreator(action.payload));
}

function* changeAccountingsWorker(action: ChangeAccountingsAction) {
  yield put(changeAccountingCreator(action.payload));
}

export function* accountingWatcher() {
  yield takeEvery(
    AccountingsActionTypes.ASYNC_SET_ACCOUNTINGS,
    setAccountingsWorker
  );
  yield takeEvery(
    AccountingsActionTypes.ASYNC_ADD_ACCOUNTING,
    addAccountingsWorker
  );
  yield takeEvery(
    AccountingsActionTypes.ASYNC_SUB_ACCOUNTING,
    subAccountingsWorker
  );
  yield takeEvery(
    AccountingsActionTypes.ASYNC_CHANGE_ACCOUNTING,
    changeAccountingsWorker
  );
}
