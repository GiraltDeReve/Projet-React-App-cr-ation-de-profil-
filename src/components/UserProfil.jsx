import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function UserProfil(props) {
const handleClick = useCallback (() => {
axios.delete('https://jsonplaceholder.typicode.com/users/'+ props.user.id)
props.deleteUser(props.user.id)
 }, [props])
    return (
            <div className="card" style={{width: '18rem'}}>
  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Fprofil&psig=AOvVaw21KZR_pMXWJM8SJE2xiSLL&ust=1701100266758000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICZ4LqC4oIDFQAAAAAdAAAAABAE" className="card-img-top" alt="..." ></img>
  <div className="card-body">
    <h5 className="card-title">{props.user}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-flex justify-content-end'>
      <button className='btn btn-primary' onClick={handleClick}>
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  </div>
</div>
    );
}

UserProfil.propTypes = {
    user: PropTypes.string
}

export default UserProfil;