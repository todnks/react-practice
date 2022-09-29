import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
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
function ListItem({ setList, list, count, setCount }) {
  const maxCount = Math.ceil(count / 10);
  let page = 1;
  let pagiNationBtn = [];
  const getListItem = async (nowpage) => {
    if (nowpage) {
      if (page !== Number(nowpage.target.value)) {
        page = Number(nowpage.target.value);
      }
    }
    await axios.get(`/board/list?page=${page}`).then(({ data }) => {
      setList(data.list);
      setCount(data.count);
    });
  };
  const setBtn = () => {
    for (let btnSize = 1; btnSize <= maxCount; btnSize++) {
      pagiNationBtn.push(btnSize);
    }
    return pagiNationBtn;
  };
  useEffect(() => {
    getListItem();
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
        list.map((list) => (
          <List key={list.idx}>
            <div>{list.idx}</div>
            <div>{list.writer}</div>
            <div>{list.content}</div>
            <div>{list.registDate}</div>
          </List>
        ))}
      {pagiNationBtn &&
        setBtn().map((number) => (
          <input type='submit' onClick={getListItem} value={number} />
        ))}
    </Table>
  );
}

export default ListItem;
