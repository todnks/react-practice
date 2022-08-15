import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
  const [id, Setid] = useState();
  const [pw, Setpw] = useState();
  function Signin(e) {
    e.preventDefault();
    const member = { id: id, password: pw };
    if (!member.id || !member.password) {
      alert('아이디 또는 비밀번호를 입력해주세요');
      return;
    }
    axios
      .post('/member/signin', {
        ...member,
      })
      .then(function (res) {
        console.log(res);
        alert('로그인성공');
      })
      .catch(function ({ response }) {
        alert(response.data.error);
        return;
      });
  }
  return (
    <div>
      <form onSubmit={Signin}>
        <input placeholder='아이디' onChange={(e) => Setid(e.target.value)} />
        <input placeholder='비밀번호' onChange={(e) => Setpw(e.target.value)} />
        <button>로그인</button>
      </form>
      <Link to='/'>홈으로</Link>
    </div>
  );
}

export default Login;