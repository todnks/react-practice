import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  let [member, setMember] = useState();
  const getMemberInfo = () => {
    axios.get('/member/getMemberInfo').then(({ data }) => {
      if (!data) {
        setMember(null);
        return;
      }
      setMember(data);
    });
  };
  const logout = () => {
    axios.get('/member/logout').then(() => {
      alert('로그아웃');
      setMember(null);
    });
  };
  useEffect(() => {
    getMemberInfo();
  }, []);
  return (
    <div>
      {(member && (
        <div>
          <div>이름:{member.name}</div>
          <div>아이디:{member.userId}</div>
          <button onClick={logout}>로그아웃</button>
          <Link to='/board/write'>글쓰기</Link>
        </div>
      )) || (
        <div>
          <Link to='/login'>로그인</Link>
          <Link to='/signup'>회원가입</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
