import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  let [member, setMember] = useState();
  const getData = () => {
    axios.get('/member/getMemberInfo').then(({ data }) => {
      console.log(data);
      if (data === null) {
        setMember(null);
        return;
      }
      setMember(data);
    });
  };
  function logout() {
    axios.get('/member/logout').then((res) => {
      alert('로그아웃');
      setMember(null);
    });
  }
  useEffect(() => {
    getData();
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
          <Link to='/login'>로그인</Link>
          <Link to='/signup'>회원가입</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
