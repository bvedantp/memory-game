import React from "react";

export default function Score(props) {
    const [score, setScore] = React.useState(0)
    const [finalScore, setFinalScore] = React.useState(0)

    function trackScore(arrle) {
        props.mainState.forEach(element => {
            if(element == 2) {
                setFinalScore((prevScore)=>{
                    return (prevScore>arrle) ? prevScore : arrle
                })
                props.stateToZero()
                alert('Game over')
            }
        });
    }

    let newArr = props.mainState.filter(element => element == 1 );
    //console.log(newArr)
    React.useEffect(()=> {
        setScore(newArr.length)
        trackScore(newArr.length)
    }, [newArr.length])

    

    return(
        <div>
            <p>Current Score: {score}</p>
            <p>Best Score: {finalScore == 0 ? finalScore : finalScore+1}</p>
        </div>
    )
}