import { useCallback } from 'react';
import { useState } from 'react';

function WriteHook(initState) {
  const [board, setData] = useState(initState);
  const boardParams = { title: '', content: '' };
  const setBoard = useCallback((target) => {
    for (let paramsKeys in boardParams) {
      if (paramsKeys === Object.keys(target)[0]) {
        boardParams[paramsKeys] = Object.values(target)[0];
      }
    }
    setData(boardParams);
  }, []);
  return {
    setBoard,
    setData,
    board,
  };
}

export default WriteHook;
