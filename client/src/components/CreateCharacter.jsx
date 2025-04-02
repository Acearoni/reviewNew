import React, { useState } from 'react';
import axios from 'axios';

const CreateCharacter = (props) => {

    const {characterList, setCharacterList} = props;
    const [name, setName] = useState("")
    const [hometown, setHometown] = useState("")
    const [level, setLevel] = useState(1);
    const [playerClass, setPlayerClass] = useState("Barbarian")
    
    const submitHandler = (e) => {
        e.preventDefault()
        const newCharacter = {name, hometown, level, playerClass}
        axios.post('http://localhost:8000/api/createCharacter', newCharacter)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <h2>Add To Characters!</h2>
            <form onSubmit={submitHandler}>
                <label>Character Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>

                <label>Class: </label>
                <select onChange={(e) => setPlayerClass(e.target.value)} value={playerClass}>
                    <option value="barbarian">Barbarian</option>
                    <option value="warlock">Warlock</option>
                    <option value="rogue">Rogue</option>
                    <option value="wizard">Wizard</option>
                    <option value="ranger">Ranger</option>
                    <option value="fighter">Fighter</option>
                    <option value="cleric">Cleric</option>
                    <option value="chef">Chef</option>
                </select>

                <label>Hometown: </label>
                <input type="text" onChange={(e) => setHometown(e.target.value)} value={hometown}/>

                <label>Level: </label>
                <input type="number" onChange={(e) => setLevel(e.target.value)} value={level}/>
                
                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default CreateCharacter;