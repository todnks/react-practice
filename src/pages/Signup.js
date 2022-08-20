import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function Signup({ setLogin, member }) {
  const Input = styled.input``;
  function Login(e) {
    e.preventDefault();
    if (!Object.values(member)) {
      alert('빈칸을 채워주세요');
    }
    axios
      .post('/member/signup', {
        ...member,
      })
      .then(function (res) {
        alert('회원가입성공');
      })
      .catch(function ({ response }) {
        alert(response.data.error);
        return;
      });
  }
  return (
    <div>
      <form onSubmit={Login}>
        <Input
          placeholder='아이디'
          onChange={(e) => setLogin({ id: e.target.value })}
        />
        <Input
          placeholder='비밀번호'
          onChange={(e) => setLogin({ password: e.target.value })}
        />
        <Input
          placeholder='name'
          onChange={(e) => setLogin({ name: e.target.value })}
        />
        <Input
          placeholder='email'
          onChange={(e) => setLogin({ email: e.target.value })}
        />
        <Input type='submit' value='회원가입' />
      </form>
      <Link to='/'>홈으로</Link>
    </div>
  );
}

export default Signup;
