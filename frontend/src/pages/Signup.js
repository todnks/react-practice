import axios from 'axios';
import { Link } from 'react-router-dom';
const Signup = ({ setMember, member }) => {
  const signup = (event) => {
    event.preventDefault();
    if (!Object.values(member)) {
      alert('빈칸을 채워주세요');
    }
    axios
      .post('/member/signup', {
        ...member,
      })
      .then(() => {
        alert('회원가입성공');
      })
      .catch(({ response }) => {
        alert(response.data.error);
        return;
      });
  };
  return (
    <div>
      <input
        placeholder='아이디'
        onChange={({ target }) => setMember({ id: target.value })}
      />
      <input
        placeholder='비밀번호'
        onChange={({ target }) => setMember({ password: target.value })}
      />
      <input
        placeholder='name'
        onChange={({ target }) => setMember({ name: target.value })}
      />
      <button onClick={signup}>회원가입</button>
      <Link to='/'>홈으로</Link>
    </div>
  );
};

export default Signup;
