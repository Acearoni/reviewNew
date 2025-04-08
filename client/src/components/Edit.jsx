import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



const Edit = (props) => {

    const {id} = useParams()
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [hometown, setHometown] = useState("")
    const [level, setLevel] = useState(1);
    const [playerClass, setPlayerClass] = useState("Barbarian")
    const [errors, setErrors] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneCharacter/${id}`)
            .then((res) => {
                setName(res.data.name)
                setHometown(res.data.hometown)
                setLevel(res.data.level)
                setPlayerClass(res.data.playerClass)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        const newCharacter = {name, hometown, level, playerClass}
        axios.put(`http://localhost:8000/api/findOneAndUpdate/${id}`, newCharacter)
            .then((res) => {
                navigate('/')
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }




    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Character Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                {
                    errors.name ?
                        <p>{errors.name.message}</p> :
                        null
                }

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
                {
                    errors.playerClass ?
                        <p>{errors.playerClass.message}</p> :
                        null
                }

                <label>Hometown: </label>
                <input type="text" onChange={(e) => setHometown(e.target.value)} value={hometown} />
                {
                    errors.hometown ?
                        <p>{errors.hometown.message}</p> :
                        null
                }

                <label>Level: </label>
                <input type="number" onChange={(e) => setLevel(e.target.value)} value={level} />
                {
                    errors.level ?
                        <p>{errors.level.message}</p> :
                        null
                }

                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default Edit;