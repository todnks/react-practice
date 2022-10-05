import { useCallback } from 'react';
import { useState } from 'react';

const MemberHook = (initState) => {
  const [member, setData] = useState(initState);
  const memberParams = { id: '', password: '', name: '', email: '' };
  const setMember = useCallback((target) => {
    for (let paramsKeys in memberParams) {
      if (paramsKeys === Object.keys(target)[0]) {
        memberParams[paramsKeys] = Object.values(target)[0];
      }
    }
    setData(memberParams);
  }, []);
  return {
    setMember,
    setData,
    member,
  };
};

export default MemberHook;
