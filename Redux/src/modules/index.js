// 루트 리듀서: 여러 리듀서 함수들을 하나로 함쳐줌!

import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'

const rootReducer = combineReducers({
  counter,
  todos
})

export default rootReducer

// 불러올때 -> import rootReducer from './modules
