import { useCallback } from 'react';
import { useState } from 'react';

function useInput(initState) {
  const [value, setValue] = useState(initState);
  const [member, setData] = useState();
  const data = { id: '', password: '', name: '', email: '' };
  const onChange = useCallback(({ target }) => {
    setValue(target.value);
  }, []);
  const setLogin = useCallback((target) => {
    for (let i in data) {
      if (i === Object.keys(target)[0]) {
        data[i] = Object.values(target)[0];
      }
    }
    setData(data);
  }, []);
  return {
    value,
    member,
    setValue,
    onChange,
    setLogin,
    setData,
  };
}

export default useInput;
