import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/allCharacters')
      .then((response) => {
        // console.log(response.data); //Will show the response data, which is an array
        setCharacterList(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <>
      <h1>Full Stack</h1>
      {
        characterList.map((character) => (
          <div>
            <h2>Name: {character.name}</h2>
            <h2>Class: {character.class}</h2>
            <h2>Hometown: {character.hometown}</h2>
            <h2>Level: {character.level}</h2>
            <br></br>
            {/* <h3>Created: {character.createdAt}</h3> */}
          </div>
        ))
      }
    </>
  )
}

export default App
