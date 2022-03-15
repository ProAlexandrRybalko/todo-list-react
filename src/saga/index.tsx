import { all } from 'redux-saga/effects';
import { accountingWatcher } from './accountingsSaga';
import { sumWatcher } from './sumSaga';

export function* rootWatcher() {
    yield all([sumWatcher(), accountingWatcher()]);
}