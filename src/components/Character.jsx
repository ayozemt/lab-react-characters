import {useState} from 'react';

function Character({id, name, occupation, weapon, cartoon, handleDelete, handleEdit, cleanInputs }) {
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState({
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
    });


const handleSubmit = async (e) => {
    e.preventDefault();
    handleEdit(id, data);
    setIsEditing(false);
}

const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    });
    cleanInputs();
}

return (
    <div className="characterBox" style={{ border: "2px solid blue", padding: "24px" }}>
      {
        isEditing ?
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={data.name} onChange={handleChange} />
            <label htmlFor="occupation">Occupation</label>
            <input type="text" name="occupation" value={data.occupation} onChange={handleChange} />
            <label htmlFor="weapon">Weapon</label>
            <input type="text" name="weapon" value={data.weapon} onChange={handleChange} />
            <label htmlFor="cartoon">Is a cartoon?</label>
            <select name="cartoon" value={data.cartoon} onChange={handleChange}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>

            <button type="submit">Edit</button>
          </form> :
          <div>
            <p>Name: {name}</p>
            <p>Occupation: {occupation}</p>
            <p>Weapon: {weapon}</p>
            <p>Is a cartoon? {cartoon ? "Yes" : "No"}</p>
          </div>
        }
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
    );
}

export default Character;
