import { Actions as CategoryActions } from './category/categoryActions'

type RootAction = CategoryActions[keyof CategoryActions]

export default RootAction