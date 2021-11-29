import { useState } from 'react';
import Count from './Count';
import Button from './Button';



const Counter = () => {
    const [count, setCount] = useState(0);

    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting ...";

    return(
        <div>
            <Count count={count} />
            <Button setCount={setCount} />
            <p className="feedback">{feedback}</p>
        </div>
    )
}

export default Counter;