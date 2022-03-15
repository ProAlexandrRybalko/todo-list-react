import { put, takeEvery, SagaReturnType, call } from 'redux-saga/effects';
import { getAllAccountings } from '../assets/api/FetchAllAccountings';
import { addSumCreator, ASYNC_ADD_SUM, ASYNC_SET_SUM, ASYNC_SUB_SUM, setSumCreator, subSumCreator, SumAction } from '../store/sumReducer';
import { allAccountingsResponse } from './types';

function* setSumWorker() {
    try {
        const response: allAccountingsResponse = yield call(getAllAccountings);
        yield put(setSumCreator(response.data.sum));
    } catch (err) {
        console.log(err);
    }
}

function* addSumWorker(action: SumAction) {
    yield put(addSumCreator(action.payload));
}

function* subSumWorker(action: SumAction) {
    yield put(subSumCreator(action.payload));
}

export function* sumWatcher() {
    yield takeEvery(ASYNC_SET_SUM, setSumWorker);
    yield takeEvery(ASYNC_ADD_SUM, addSumWorker);
    yield takeEvery(ASYNC_SUB_SUM, subSumWorker);
}
