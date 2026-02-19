import {useState} from "react"

function FruitsList() {
    const fruits = ["Strawberry", "Banana", "Apple"]
    

    return (
        <>
        <div>
        <h2>Fruits List</h2>
        {fruits.length === 0 ? <p>No Fruits Available</p> : null}

        <ul>
            {fruits.map((fruit, index)=> <li key={index}>{fruit}</li>)}
        </ul>
        </div>
        </>
        
    );

}

export default FruitsList;