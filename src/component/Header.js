import axios from 'axios';
import { useEffect, useState } from 'react';
function Header() {
  let [member, setMember] = useState();
  const getMemberInfo = () => {
    axios.get('/member/getMemberInfo').then(({ data }) => {
      if (data === null) {
        setMember(null);
        return;
      }
      setMember(data);
    });
  };
  function logout() {
    axios.get('/member/logout').then(() => {
      alert('로그아웃');
      setMember(null);
    });
  }
  useEffect(() => {
    getMemberInfo();
  }, []);
  return (
    <div>
      {(member && (
        <div>
          <div>이름:{member.name}</div>
          <div>아이디:{member.id}</div>
          <div>email:{member.email}</div>
          <button onClick={logout}>로그아웃</button>
        </div>
      )) || (
        <div>
          <a href='/login'>로그인</a>
          <a href='/signup'>회원가입</a>
        </div>
      )}
    </div>
  );
}

export default Header;
