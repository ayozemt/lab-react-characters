import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/characters";

function CharacterListNew() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(API_URL);
            setCharacters(response.data);
        }
        getData();
    }, []);

    const renderCharacters = () => {
        return (
            characters.map((character) => (
                <div key={character.id} className="character-item"> 
                <p>{character.name}</p>
                <Link to={`/characters/${character.id}`}>Details</Link>
            </div>
            ))
        );
}
return (
    <section className="character-list">
        {renderCharacters()}
    </section>
)
}

export default CharacterListNew;