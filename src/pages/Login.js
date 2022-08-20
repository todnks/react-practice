import axios from 'axios';
import { Link } from 'react-router-dom';
function Login({ setMember, member }) {
  function Signin(e) {
    e.preventDefault();
    if (!member.id || !member.password) {
      alert('아이디 또는 비밀번호를 입력해주세요');
      return;
    }
    axios
      .post('/member/signin', {
        ...member,
      })
      .then(function () {
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
        <input
          placeholder='아이디'
          onChange={({ target }) => setMember({ id: target.value })}
        />
        <input
          placeholder='비밀번호'
          onChange={({ target }) => setMember({ password: target.value })}
        />
        <button>로그인</button>
      </form>
      <Link to='/'>홈으로</Link>
    </div>
  );
}

export default Login;
