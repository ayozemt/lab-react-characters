import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/characters";

function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`${API_URL}/${id}`);
            setCharacter(response.data);
        }
        getData();
    }, [id]);

    return (
        <div>
            {character ?
                <div>
                    <h1>Details of {character.name}</h1>
                    <p>Occupation: {character.occupation}</p>
                    <p>Weapon: {character.weapon}</p>
                    <p>Is a cartoon? {character.cartoon ? "Yes" : "No"}</p>
                </div> :
                <div>
                    <h1>Loading...</h1>
                </div>
            }
        </div>
    )
}

export default CharacterDetails;