import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const BoardUpdate = ({ setBoard, board }) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const update = () => {
    axios
      .put('/board/update', {
        ...board,
        idx: id,
      })
      .then(({ data }) => {
        if (!data) {
          alert('글수정 실패');
          return;
        }
        alert('글수정성공');
        navigate('/', { replace: true });
      });
  };
  return (
    <div>
      <div>글수정</div>
      <input
        placeholder='글제목'
        onChange={({ target }) => setBoard({ title: target.value })}
      />
      <input
        placeholder='글내용'
        onChange={({ target }) => setBoard({ content: target.value })}
      />
      <button onClick={update}>글수정</button>
      <Link to='/'>홈으로</Link>
    </div>
  );
};

export default BoardUpdate;
