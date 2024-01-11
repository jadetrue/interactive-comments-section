import {useState} from 'react'

const VoteForComment = () => {
    const [count, setCount] = useState(0)
    
    const increase = () => {
        setCount(count => count + 1);
    };
    
    const decrease = () => {
        if (count > 0) setCount(count => count - 1);
    }

  return (
    <div>
    <button onClick={() => increase()}>+</button>
    <p>{count}</p>
    <button onClick={() => decrease()}>-</button>
    </div>
  )
}

export default VoteForComment