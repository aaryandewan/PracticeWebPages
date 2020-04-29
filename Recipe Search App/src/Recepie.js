import React from "react"
import './Recepie.css'
const Recepie = (props) => {
    return (
        <div className = "main">
            <h1>{props.name}</h1>
            <p>{props.calories}</p>
            <img src={props.image}/>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
        </div>
    )
}




export default Recepie