
import styles from "./Counter.module.css"

function Counter({count,setCount}) {
     
    return (
        <div className={styles.counterContainer}>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div className={styles.buttons}>
                <button onClick={()=>{
                    setCount(count-1)
                }} disabled={count === 0}>Decrement</button>
                <button onClick={() => {
                    setCount(count + 1)
                }}>Increment</button>
                <button onClick={()=>{
                    setCount(0)
                }}>Reset</button>
            </div>
            
        </div>
    )
}

export default Counter