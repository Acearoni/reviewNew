import { useState} from 'react'
import './App.css'
import DisplayAll from './components/DisplayAll'

function App() {

  const [characterList, setCharacterList] = useState([])

  return (
    <>
      <h1>Full Stack</h1>
      <h2>Characters</h2>
      <DisplayAll characterList={characterList} setCharacterList={setCharacterList} />
    </>
  )
}

export default App
