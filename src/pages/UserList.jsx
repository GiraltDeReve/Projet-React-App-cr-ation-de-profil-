import React, { useCallback, useEffect, useState } from "react";
import UserProfil from "../components/UserProfil";
import PropTypes from 'prop-types';

function UserList(props) {
  const [usersKnow, setUsersKnow] = useState([]);
  useEffect (() => {
    // pas de async await autorisé dans un useEffetc
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then (res => res.json())
      .then (result => setUsersKnow(result))
  },[]);

  const [newUser, setNewUser] = useState ("");
  const [criteria, setCriteria] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([])

  const handleSearch = useCallback(e =>
    setCriteria(e.target.value),
    [setCriteria])

  const handleInscription = useCallback(e =>
    setNewUser(e.target.value),
    [setNewUser])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(newUser);
    // Mise à jour de l'état de manière asynchrone
    setUsersKnow(prevUsers => [...prevUsers, newUser]);
    console.log(usersKnow);
    setNewUser("");
  }, [newUser, setUsersKnow]);


  useEffect(() => {
    setFilteredUsers(usersKnow.filter(user => user.name.toLowerCase().includes(criteria.toLowerCase())))
  }, [criteria, usersKnow]);
  // parce qu'on veut recalculer filtererUser dés que criteria et usersKnow change

const deleteUser = useCallback ((userId) => {
setUsersKnow(usersKnow.filter(user => user.id !== userId))
// les utilisateurs qu'on garde dans notre liste users sont ceux qui n'ont pas l'id de l'user donc sa corbeille a été cliqué, déchangeant notre fonction deleteUser

}, [usersKnow])
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher"
            onChange={handleSearch}
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nouvel utilisateur"
            onChange={handleInscription}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Créer
          </button>
        </div>
      </form>
      <ul>
        {filteredUsers.map((user, id) => (
          <UserProfil key={id} user={user.name} deleteUser={() => deleteUser(user.id)} />
        ))}
      </ul>
    </div>
  );
}

UserProfil.propTypes = {
  deleteUser : PropTypes.func.isRequired
};

export default UserList;
