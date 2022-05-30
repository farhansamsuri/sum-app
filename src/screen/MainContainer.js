import React, {useState} from "react";
import Addition from "../components/Addition";
import DisplayAnswer from "../components/DisplayAnswer";



const MainContainer = () => {

    const [answer, SetAnswer] = useState ('');

    const handleSum = (x, y) => {

        const newState = Number(x) + Number(y);
        setAnswer(newState);
    }
    return (

        <>
        <h1>Sum App</h1>
        <Addition handleSum = {handleSum} />
        <DisplayAnswer answer = {answer} />
        </>
    );
}

export default MainContainer;