import { put, takeEvery } from "redux-saga/effects"
import actions, { FETCH_CATEGORIES } from './categoryActions'
import axios from 'axios'

const API_URL:string = 'https://api.buzzni.net/product'

function* fetchCategoriesSaga() {
    try {
        const { data } = yield axios.get(`${API_URL}/api/v1/category`)
        yield put(actions.fetchCategoriesFulfilled(data))        
    } catch (err){
        yield put(actions.fetchCategoriesRejected(err.response))
    }
}

function* watchCategory() {
    yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga)    
}