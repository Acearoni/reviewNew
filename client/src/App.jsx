import { useState } from 'react'
import './App.css'
import DisplayAll from './components/DisplayAll'
import { Link, Route, Routes } from 'react-router-dom'
import CreateCharacter from './components/CreateCharacter'
import DisplayOne from './components/DisplayOne'
import Edit from './components/Edit'

function App() {

  const [characterList, setCharacterList] = useState([])

  return (
    <>
      <h1>Full Stack Recap!</h1>
      <Link to="/newCharacter">Add Character</Link>
      <br />
      <Link to="/">HOME</Link>

      <br />
      <Routes>
        <Route index element={<DisplayAll characterList={characterList} setCharacterList={setCharacterList} />} />
        <Route path='/newCharacter' element={<CreateCharacter />} />
        <Route path='/character/:id' element={<DisplayOne/> } />
        <Route path='/edit/:id' element={<Edit/> } />
      </Routes>
    </>
  )
}

export default App
