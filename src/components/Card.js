import React from "react";

export default function Card(props) {
    //console.log(`randum:`+props.randum)
    let images = props.mainState.map((item,index)=> {
        let pointer = (index + props.randum) % props.mainState.length
      //  console.table(`pointer:`+pointer)
        return(
            <img key={index+1} id={pointer} style={{border:"3px solid black"}} width="120" onClick={()=>(props.updateMainState(pointer))} src={require(`../images/${pointer+1}.jpg`)} alt="" /> //this is workaround to include images without import
        )
    })

    return(
        <div> 
            {images}
        </div>
    )
}