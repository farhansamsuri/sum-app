import '../App.css';

const DisplayAnswer = (props) => {

    const finalAnswer = props.answer;

    return (
        <div className= 'displayAnswer'>
        <h2>Answer : {finalAnswer}</h2>
        </div>
    )
}

export default DisplayAnswer;