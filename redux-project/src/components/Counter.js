import { useSelector, useDispatch } from 'react-redux'

// 액션 import
import { counterActions } from '../store/counter'

// useStore를 사용해 storedp 직접 접근해도 되지만
// useSelector를 사용해 자동으로 상태의 일부를 선택할 수 있음

import classes from './Counter.module.css'

const Counter = () => {
  // 전체 상태 객체에서 일부만 가져올 수 있음
  // useSelector를 사용하면 리액트 리덕스가 자동으로 subscribe을 설정을 해줌
  // -> 컴포넌트가 업데이트 될 때마다 새로운 state 값을 받음
  // -> 리덕스 스토어가 업데이트 된다면 컴포넌트 함수가 다시 실행됨
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)
  // 인수X, reducer 함수에 action을 보내는 dispatch 함수를 반환
  const dispatch = useDispatch()

  // dispatch에 action type을 담아 보낼 함수 추가
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  // payload를 dispath에 타입과 함께 전달!
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
    // action 생성자 생성 by toolkit -> {type: "SOME_UNIQUE_IDENTIFIER, payload: 10"}
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
