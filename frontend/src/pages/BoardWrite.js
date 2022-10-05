import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const BoardWrite = ({ setBoard, board }) => {
  const [member, setmember] = useState();
  let navigate = useNavigate();
  const userinfo = () => {
    axios.get('/member/getMemberInfo').then(({ data }) => {
      if (!data) {
        setmember(null);
        return;
      }
      setmember(data);
    });
  };
  const write = () => {
    axios
      .post('/board/write', {
        ...board,
        name: member.name,
        id: member.id,
      })
      .then(({ data }) => {
        if (!data) {
          alert('글쓰기 실패');
          return;
        }
        alert('글쓰기성공');
        navigate('/', { replace: true });
      });
  };
  useEffect(() => {
    userinfo();
  }, []);
  return (
    <div>
      <input
        placeholder='글제목'
        onChange={({ target }) => setBoard({ title: target.value })}
      />
      <input
        placeholder='글내용'
        onChange={({ target }) => setBoard({ content: target.value })}
      />
      <button onClick={write}>글쓰기</button>
      <Link to='/'>홈으로</Link>
    </div>
  );
};

export default BoardWrite;
