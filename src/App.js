import React from "react";
import Card from "./components/Card";
import Score from "./components/Score";

function App() {

  const [mainState, setMainState] = React.useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  const [randum, setRandum] = React.useState(1)

  React.useEffect(()=> {
   // document.getElementsByClassName('mainSec')[0].addEventListener('click',()=>{
      let nombur = Math.floor(Math.random() * 16)
      if(nombur == 0) {nombur = 1}
      setRandum(nombur)
      //console.log(randum) // here random
   // })
  }, [mainState])

  function updateMainState(pointer) {
    //console.log(`mainPointer:`+pointer)
    setMainState((prevState) => {
      let finalState = prevState.map((unit,indexe) => {
        if(pointer == indexe) {
          unit++
        }
        return unit
      })
      //mainState[index] = mainState[index] + 1 //THIS IS VERY BAD BCOZ IT IS MUTATING STATE, USE MAP
      return [...finalState]
    })
  }

  function toZero() {
    setMainState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  }

  console.log(mainState)
  return (
    <div>
       <section> 
        <h1>Memory Game</h1>
        <Score mainState={mainState} stateToZero={toZero} />
      </section>
      <main className="mainSec" >
        <Card mainState={mainState} randum={randum} updateMainState={updateMainState} />
      </main> 
    </div>
  );
}

export default App;
