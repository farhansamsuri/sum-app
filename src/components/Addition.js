import {useState} from "react";

const Addition = (props) => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const onNum1Change = (e) => {
        setNum1(e.target.value);
    }

    const onNum2Change = (e) => {
        setNum2(e.target.value);
    }

    const handleonSubmit = (e) => {
        e.preventDefault();

        props.handleSum(num1,num2);
    }




    return(
        <div className = 'addition'>
        <form onSubmit= {handleonSubmit}>
        <input type='text' value={num1} onChange={onNum1Change}></input>
        +
        <input type='text' value={num2} onChange={onNum2Change}></input>
        <button disabled={!num1 || !num2}>Show Answer</button>
        </form>       
        </div>
    )
}

export default Addition;