import { useEffect} from 'react'
import axios from 'axios'

const DisplayAll = (props) => {
const {characterList, setCharacterList} = props

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
        <div>
            {
                characterList.map((character) => (
                    <div key={character._id}>
                        <h2>Name: {character.name}</h2>
                        <h2>Class: {character.playerClass}</h2>
                        <h2>Hometown: {character.hometown}</h2>
                        <h2>Level: {character.level}</h2>
                        <button>EDIT</button>
                        <button>DETAILS</button>
                        <br></br>
                        {/* <h3>Created: {character.createdAt}</h3> */}
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayAll;