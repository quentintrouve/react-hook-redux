import { useSelector, useDispatch } from 'react-redux'
import './counter.css'

export default function Counter() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch({
      type: 'INCR'
    })
  }

  const decrementCount = () => {
    if (count >= 1) {
      dispatch({
        type: 'DECR'
      })
    }
  }

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <div class="bloc-btn">
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  )
}
