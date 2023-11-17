import React from 'react';
import useCount from './useCount';

function App() {
  const { count, showCount, handelShow, incrementCount } = useCount();

  return (
    <div>
      <button onClick={handelShow}>
        Show count
      </button>

      <button onClick={incrementCount}>
        Count
      </button>

      <p>{showCount && <span>{count}</span>}</p>
    </div>
  );
}

export default App;
