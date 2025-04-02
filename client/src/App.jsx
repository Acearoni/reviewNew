import { useState } from 'react'
import './App.css'
import DisplayAll from './components/DisplayAll'
import { Link, Route, Routes } from 'react-router-dom'
import CreateCharacter from './components/CreateCharacter'

function App() {

  const [characterList, setCharacterList] = useState([])

  return (
    <>
      <h1>Full Stack Recap!</h1>
      <Link to="/newCharacter">Add Character</Link>
      <br />
      <Link to="/">HOME</Link>
      <h2>Characters</h2>
      <br />
      <Routes>
        <Route index element={<DisplayAll characterList={characterList} setCharacterList={setCharacterList} />} />
        <Route path='/newCharacter' element={<CreateCharacter />} />
      </Routes>
    </>
  )
}

export default App
