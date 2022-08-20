import { useState, useCallback } from 'react';

const data = new Set()

function App(){
  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)

  const incrementNumber = useCallback(() => setNumber(number + 1), [number])
  const decrementNumber = useCallback(() => setNumber(number - 1), [number])

  data.add(incrementNumber)
  data.add(decrementNumber)
  return <>
    <h2>OPTIMIZATION - {data.size}</h2>
    <h3>data - {number}/{count}</h3>
    <button onClick={incrementNumber}>up</button>
    <button onClick={decrementNumber}>down</button>
    <button onClick={() => setCount(count + 1)}>count up</button>
    <button onClick={() => setCount(count - 1)}>count down</button>
  </>
}
export default App