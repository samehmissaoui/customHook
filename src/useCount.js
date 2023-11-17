import { useState } from 'react';

function useCount() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);

  function handleClick() {
    setCount(count + 2);
  }

  function  handelShow () {
    setShowCount(!showCount)
  }

  return {
    count,
    showCount,
    handelShow,
    incrementCount: handleClick,
  };
}

export default useCount;