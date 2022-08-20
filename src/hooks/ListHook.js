import { useCallback } from 'react';
import { useState } from 'react';

function ListHook(initState) {
  const [list, setlist] = useState();
  const [count, setcount] = useState(null);
  const setList = useCallback((list) => {
    setlist(list);
  }, []);
  const setCount = useCallback((count) => {
    setcount(count);
  }, []);
  return {
    setlist,
    setList,
    list,
    count,
    setCount,
  };
}

export default ListHook;
