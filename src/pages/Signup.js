import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function Signup({ setMember, member }) {
  const Input = styled.input``;
  function signUp(event) {
    event.preventDefault();
    if (!Object.values(member)) {
      alert('빈칸을 채워주세요');
    }
    axios
      .post('/member/signup', {
        ...member,
      })
      .then(function () {
        alert('회원가입성공');
      })
      .catch(function ({ response }) {
        alert(response.data.error);
        return;
      });
  }
  return (
    <div>
      <form onSubmit={signUp}>
        <Input
          placeholder='아이디'
          onChange={({ target }) => setMember({ id: target.value })}
        />
        <Input
          placeholder='비밀번호'
          onChange={({ target }) => setMember({ password: target.value })}
        />
        <Input
          placeholder='name'
          onChange={({ target }) => setMember({ name: target.value })}
        />
        <Input
          placeholder='email'
          onChange={({ target }) => setMember({ email: target.value })}
        />
        <Input type='submit' value='회원가입' />
      </form>
      <Link to='/'>홈으로</Link>
    </div>
  );
}

export default Signup;
