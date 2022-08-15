import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Member() {
  const [id, Setid] = useState();
  const [pw, Setpw] = useState();
  const [name, Setname] = useState();
  const [email, Setemail] = useState();
  function Login(e) {
    e.preventDefault();
    const member = { id: id, password: pw, name: name, email: email };
    if (!member.id || !member.password || !member.name || !member.email) {
      alert('빈칸을 채워주세요');
    }
    axios
      .post('/member/signup', {
        ...member,
      })
      .then(function (res) {
        console.log(res);
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
        <input placeholder='아이디' onChange={(e) => Setid(e.target.value)} />
        <input placeholder='비밀번호' onChange={(e) => Setpw(e.target.value)} />
        <input placeholder='name' onChange={(e) => Setname(e.target.value)} />
        <input placeholder='email' onChange={(e) => Setemail(e.target.value)} />
        <input type='submit' value='회원가입' />
      </form>
      <Link to='/'>홈으로</Link>
    </div>
  );
}

export default Member;
