import {useState} from 'react';

const Counter =()=>{
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count-1)} id = 'decrement'>Decrement</button>
            
            {count}
          
            <button onClick={()=>setCount(count+1)} id = 'increment'>Increment</button>


            {/* // event comments are placed inside the {} braces */}
            {
            
            /* <script>
                function decrementFunction(){
                    setCount(count - 1)
                    // {()=>setCount(count - 1)}
                }
                function incrementFunction() {
                    setCount(count+1)
                   // {()=>setCount(count + 1)}
                    
                }
            </script> */}
        </div>
        

        
    );
};

export default Counter;