import React, { useState , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ComponentName = (props) => {
    const [character, setCharacter] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneCharacter/${id}`)
            .then((res) => {
                setCharacter(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler  = () => {
        axios.delete(`http://localhost:8000/api/deleteCharacter/${id}`)
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>View One </h1>
            <br></br>
            <h2>Name: {character.name}</h2>
            <h3>Hometown: {character.hometown}</h3>
            <h3>Level: {character.level}</h3>
            <h3>Class: {character.playerClass}</h3>
            <button onClick={deleteHandler}>DELETE</button>
        </div>
    );
}

export default ComponentName;