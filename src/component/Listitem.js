import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
function ListItem() {
  const [list, setList] = useState();
  const [count, setCount] = useState(null);
  const maxCount = Math.ceil(count / 10);
  let page = 1;
  let btn = [];
  const getList = async (e) => {
    if (e) {
      if (page !== Number(e.target.value)) {
        page = Number(e.target.value);
      }
    }
    await axios.get(`/board/list?page=${page}`).then(({ data }) => {
      setList(data.list);
      setCount(data.count);
    });
  };
  const setBtn = () => {
    for (let i = 1; i <= maxCount; i++) {
      btn.push(i);
    }
    return btn;
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <Table>
      <List>
        <div>번호</div>
        <div>작성자</div>
        <div>글제목</div>
        <div>작성일자</div>
      </List>
      {list &&
        list.map((data) => (
          <List key={data.idx}>
            <div>{data.idx}</div>
            <div>{data.writer}</div>
            <div>{data.content}</div>
            <div>{data.registDate}</div>
          </List>
        ))}
      {btn &&
        setBtn().map((number) => (
          <input type='submit' onClick={getList} value={number} />
        ))}
    </Table>
  );
}

export default ListItem;
