import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './Character';

const API_URL = "http://localhost:8000/characters";
function CharactersList() {
    const [characters, setCharacters] = useState([]);
    const [data, setData] = useState({
        name: "",
        occupation: "",
        weapon: "",
        cartoon: false
    });

    const getData = async () => {
        try {
            const response = await axios.get(API_URL);
            setCharacters(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const displayCharacters = () => {
        return (
            characters.map((character) => (
                <Character key={character.id} handleDelete={handleDelete} handleEdit={handleEdit} cleanInputs={cleanInputs} {...character} />
            ))
        );
    }

    const cleanInputs = () => {
        setData({
            name: "",
            occupation: "",
            weapon: "",
            cartoon: false
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, { name, occupation, weapon, cartoon });
            getData();
            cleanInputs();
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        // cleanInputs(); aquí da error. Porque no va aquí!!
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = async (id, data) => {
        try {
            await axios.put(`${API_URL}/${id}`, data);
            getData();
        } catch (error) {
            console.log(error);
        }
    }

    const { name, occupation, weapon, cartoon } = data;

    return (
        <>
            <h1>Characters List</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <label htmlFor="occupation">Occupation</label>
                <input type="text" name="occupation" value={occupation} onChange={handleChange} />
                <label htmlFor="weapon">Weapon</label>
                <input type="text" name="weapon" value={weapon} onChange={handleChange} />
                <label htmlFor="cartoon">Is a cartoon?</label>
                <select name="cartoon" value={cartoon} onChange={handleChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <button type="submit">Create</button>
            </form>
            { characters.length ? displayCharacters() : <p>No data</p>}
        </>
    );
}

export default CharactersList;