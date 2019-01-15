import { CategoryType } from './categoryModel'

export const FETCH_CATEGORIES = "FETCH_CATEGORIES"
export const FETCH_CATEGORIES_FULFILLED = "FETCH_CATEGORIES_FULFILLED"
export const FETCH_CATEGORIES_REJECTED = "FETCH_CATEGORIES_REJECTED"

export type Actions =  {
    FETCH_CATEGORIES: {
        type: typeof FETCH_CATEGORIES
    },
    FETCH_CATEGORIES_FULFILLED: {
        type: typeof FETCH_CATEGORIES_FULFILLED
        payload: CategoryType
    },
    FETCH_CATEGORIES_REJECTED: {
        type: typeof FETCH_CATEGORIES_REJECTED,
        error: any
    }
}

const categoryActions = {
    fetchCategories: (): Actions[typeof FETCH_CATEGORIES] => ({
        type: FETCH_CATEGORIES
    }),
    fetchCategoriesFulfilled: (categories: CategoryType): Actions[typeof FETCH_CATEGORIES_FULFILLED] => ({
        type: FETCH_CATEGORIES_FULFILLED,
        payload: categories
    }),
    fetchCategoriesRejected: (error: any): Actions[typeof FETCH_CATEGORIES_REJECTED] => ({
        type: FETCH_CATEGORIES_REJECTED,
        error
    })
}

export default categoryActions