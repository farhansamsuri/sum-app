import '../App.css';
import config from '../config/index';

const DisplayAnswer = (props) => {

    const finalAnswer = props.answer;

    return (
        <div className= 'displayAnswer'>
        <h2> Answer : {finalAnswer}</h2>
        <div>BaseURL: {config.baseURL}</div>
        </div>
    )
}

export default DisplayAnswer;