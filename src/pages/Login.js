import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Content = styled.div`
  width: 500px;
  margin: auto;
  text-align: center;
  background-color: white;
  height: 600px;
  margin-top: 100px;
  padding: 30px;
  list-style: none;
`;
function Member() {
  function Login(e) {
    e.preventDefault();
    const member = { id: e.target[0].value, password: e.target[1].value };
    axios
      .post('https://mariadb-nodejs.herokuapp.com/api/v1/member/signin', {
        ...member,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function MemberCheck(e) {
    e.preventDefault();
    axios
      .get('https://mariadb-nodejs.herokuapp.com/api/v1/member/getMemberInfo')
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <Content>
      <form onSubmit={Login}>
        <input placeholder='아이디' />
        <input placeholder='비밀번호' />
        <input type='submit' value='로그인' />
      </form>
      <form onSubmit={MemberCheck}>
        <input type='submit' value='확인' />
      </form>
      <Link to='/'>홈으로</Link>
    </Content>
  );
}

export default Member;
