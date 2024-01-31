import {useState} from 'react'
import { Button } from './Button';

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
      <Button className='btn btn__reset' name="+" type="neutral" onClick={() => increase()}/>
        <p className='clr__primary'>{count}</p>
      <Button className='btn btn__reset' name="-" type="neutral" onClick={() => decrease()}/>
    </div>
  )
}

export default VoteForComment