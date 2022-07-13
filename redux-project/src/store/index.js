import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true }

// 리듀서에 의해 변경되는 데이터는 기존의 데이터에 덮어쓰게 된다
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      // showCounter 값은 기존 상태를 유지
      showCounter: state.showCounter
    }
  }

  // dispatch에서 전달한 타입 이외에 payload 값을 받아 처리
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state
}

const store = createStore(counterReducer)

// export 하여 외부에서 store를 사용할 수 있음
// 리액트 앱에 store를 제공해줘야함! 단 하나의 리덕스 스토어!
export default store
