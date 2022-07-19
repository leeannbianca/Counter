function Buttons(props)
{
    const incrementChange = ()=>{
        props.increment();
    }

        const decrementChange = ()=>{
            props.decrement();

        }
    
    return(
        <div className="btns">
            <button className="btn1" onClick={incrementChange}>+</button>
            <button className="btn2" onClick={decrementChange}>-</button>
        </div>
    )
}

export default Buttons;