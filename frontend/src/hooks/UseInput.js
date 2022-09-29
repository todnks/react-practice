import { useCallback } from 'react';
import { useState } from 'react';

function UseInput(initState) {
  const [value, setValue] = useState(initState);
  const onChange = useCallback(({ target }) => {
    setValue(target.value);
  }, []);
  return {
    value,
    setValue,
    onChange,
  };
}

export default UseInput;
