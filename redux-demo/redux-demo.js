const redux = require('redux')

// 리듀서는 액션이 도착할 때마다 새로운 상태 스냅샷을 반환함
// 리듀서 함수는 2개의 인수를 받음
// 기존상태와 발송된 액션
// 새로운 상태 객체를 반환 -> 기존의 상태를 대체
// store가 초기화 될 때(처음 실행시) 리덕스가 리듀서를 실행
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }
  return state
}

// 어떤 리듀서 함수가 store를 변경하는지 알려주기 위해 인수로 리듀서 함수를 넣어줌
const store = redux.createStore(counterReducer)

console.log(store.getState())

// subscribe 함수
const counterSubscriber = () => {
  const latestState = store.getState()
  console.log(latestState)
}

// 리덕스는 데이터와 store가 변경될 때마다 실행함
store.subscribe(counterSubscriber)

// 액션(객체) dispatch
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
