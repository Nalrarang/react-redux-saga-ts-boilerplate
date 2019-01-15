import { FETCH_CATEGORIES_FULFILLED, FETCH_CATEGORIES_REJECTED } from './categoryActions'
import RootAction from '../rootAction'

export type CategoryState = Readonly<{
    categoryList: object;
}>

const initialState = {
    categoryList: {}
}

const category = (state: CategoryState = initialState, action: RootAction) => {
    switch (action.type) {
        case FETCH_CATEGORIES_FULFILLED:
            return Object.assign({}, state, {
                categoryList: action.payload
            })
        case FETCH_CATEGORIES_REJECTED:
            return Object.assign({}, state, {
                showError: true,
                error: action.error
            })
        default:
            return state
    }
}

export default category