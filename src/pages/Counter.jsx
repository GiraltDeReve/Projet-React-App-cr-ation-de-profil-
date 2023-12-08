import React, { useCallback, useEffect, useState } from 'react';

function Counter(props) {
    const [counter, setCounter] = useState (0);
    const [historique, setHistorique] = useState ([]);

    const histoCounter = useCallback((newCount) => {
      setHistorique([...historique,counter]);
      setCounter(newCount);
    }, [counter, historique]);
    
    return (
      <div>
        <h2>Home</h2>
        {counter} : le compteur est {counter % 2 ?'impair' : 'pair'}
        <br />
        <button onClick={() => histoCounter(counter+1)}>+</button>
        <button onClick={() => histoCounter(counter-1)}>-</button>
        <br />
        {historique.map((histo, index) => <div key={index}>Valeur {index} : {histo} </div>)}
      </div>
    );
}

export default Counter;