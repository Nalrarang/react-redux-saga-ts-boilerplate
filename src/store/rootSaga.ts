import { spawn } from 'redux-saga/effects';
import category from './category/categorySaga';


// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield spawn(category)
}
