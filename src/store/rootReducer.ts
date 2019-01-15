import { combineReducers } from 'redux'
import category, { CategoryState } from './category/categoryReducer'


export interface RootState {
    category: CategoryState;
}

const rootState = combineReducers<RootState>({
    category
})

export default rootState
