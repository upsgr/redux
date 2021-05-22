import {addItem} from './types'

export const addTask = (text) => ({type: addItem, text: text})