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
    <div className='vote-for-comment'>
      <button className='vote-for-comment__btn btn__reset' onClick={() => increase()}>+</button>
        <p className='clr__primary'>{count}</p>
      <button className='vote-for-comment__btn btn__reset' onClick={() => decrease()}>-</button>
    </div>
  )
}

export default VoteForComment