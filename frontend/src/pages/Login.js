import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Login = ({ setMember, member }) => {
  let navigate = useNavigate();
  const signin = () => {
    if (!member.id || !member.password) {
      alert('아이디 또는 비밀번호를 입력해주세요');
      return;
    }
    axios
      .post('/member/login', {
        ...member,
      })
      .then(({ data }) => {
        if (!data) {
          alert('로그인실패');
          return;
        }
        alert('로그인성공');
        navigate('/');
      });
  };
  return (
    <div>
      <div>
        <input
          placeholder='아이디'
          onChange={({ target }) => setMember({ id: target.value })}
        />
        <input
          placeholder='비밀번호'
          onChange={({ target }) => setMember({ password: target.value })}
        />
        <button onClick={signin}>로그인</button>
      </div>
      <Link to='/'>홈으로</Link>
    </div>
  );
};

export default Login;
