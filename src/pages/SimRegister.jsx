import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

function SimRegister(props) {
    const [countries, setCountries] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const handleName = useCallback(event => setName(event.target.value), [])
    const handleEmail = useCallback(event => setEmail(event.target.value), [])
    const handlePassword = useCallback(event => setPassword(event.target.value), [])
    const handleCountry = useCallback(event => setCountry(event.target.value), [])
    
    const navigate = useNavigate()

    useEffect(() => {
      axios
        .get('https://data.gouv.nc/api/records/1.0/search/?dataset=liste-des-pays-et-territoires-etrangers&q=&rows=300&sort=libcog')
        .then(result => setCountries(result.data.records))
    }, [])

    const handleSubmit = useCallback ((e) => {
    try {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', { name, email, password, country });
        navigate("/");
        props.setUsersKnow(name)
    } catch (err) {
        console.error(err)};
    }, [name, email, password, country, navigate, props]);

    return (
        <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input type="text" className="form-control" id="name" value={name} onChange={handleName} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={handleEmail} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input type="password" className="form-control" id="password" value={password} onChange={handlePassword} />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Pays</label>
            <select className="form-select" id="country" value={country} onChange={handleCountry}>
              <option value=""></option>
              {countries.map((country, index) =>
                <option key={index} value={country.fields.libcog}>{country.fields.libcog}</option>
              )}
            </select>
          </div>
          <div className="d-grid gap">
            <button className="btn btn-primary btn-expand">Valider</button>
          </div>
            </form>
        </div>
    );
}

SimRegister.propTypes = {
    setUsersKnow: propTypes.func.isRequired
  }

export default SimRegister;