import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import BoardItem from './BoardItem';
import { useState } from 'react';
const Table = styled.ul`
  text-align: left;
  width: 70%;
  margin: auto;
  margin-top: 30px;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr;
  font-size: 19px;
  border-bottom: 1px solid #000;
`;
function Board() {
  const [board, setBoard] = useState();
  const [member, setmember] = useState();
  let navigate = useNavigate();
  let nowpage = useParams();
  async function getviewItem() {
    const { data } = await axios.get('/member/getMemberInfo');

    const boarddata = await axios.get('/board/view', { params: nowpage });
    setmember(data);
    setBoard(boarddata.data);
  }
  const Delete = async () => {
    await axios.delete('/board/delete', { params: nowpage });
    alert('글삭제완료');
    navigate('/');
  };
  useEffect(() => {
    getviewItem();
  }, []);
  return (
    <>
      <Table>
        <List>
          <div>번호</div>
          <div>작성자</div>
          <div>글제목</div>
          <div>작성일자</div>s
        </List>
        {board && <BoardItem {...board}></BoardItem>}
      </Table>
      <Link to='/'>홈으로</Link>
      {member && board.userId === member.id && (
        <div>
          <Link to={`/board/update/${nowpage.id}`}>수정</Link>
          <button onClick={Delete}>글삭제</button>
        </div>
      )}
    </>
  );
}

export default Board;
