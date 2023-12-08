import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Counter from './pages/Counter';
import UserList from './pages/UserList';
import SimLogin from './pages/SimLogin';
import SimRegister2 from './pages/SimRegister2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [user, setUser] = useState ('');    

  return (
    <div>
      <Header user={user} />
      <div className="p-3">
          <Routes>
            <Route exact="true" path="/" element={<UserList />} />
            <Route exact="true" path="/Counter/" element={<Counter />} />
            <Route
              exact="true"
              path="/Login/"
              element={<SimLogin setUser={setUser} />}
            />
            <Route
              exact="true"
              path="/Register/"
              element={<SimRegister2 setUser={setUser} />}
            />
          </Routes>
      </div>
    </div>
  );
}

export default App;
