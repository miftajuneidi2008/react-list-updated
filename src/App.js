import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [person, setPerson] = useState({ fname: "", email: "" });
  const [people, setPeople] = useState([]);
  function Change(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }
  //end

  function HandleForm(e) {
    e.preventDefault();
    if (person.fname && person.email) {
      const nperson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, nperson]);
    }
  }

  //end

  function Remove() {
    setPerson({ fname: "", email: "" });
  }
  return (
    <div className="App">
      <form onSubmit={HandleForm}>
        <div className="form-control">
          <label htmlFor="fname">Name :</label>
          <input
            type="text"
            name="fname"
            value={person.fname}
            onChange={Change}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            value={person.email}
            onChange={Change}
          />
        </div>
        <button type="submit" className="btn">
          Add Person
        </button>
      </form>
      <button type="submit" className="btn" onClick={Remove}>
        Remove Person
      </button>
      <table border="1px">
        <tbody>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
          {people.map((person) => {
            const { id, fname, email } = person;
            return (
              <tr key={id}>
                <td>{fname}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
