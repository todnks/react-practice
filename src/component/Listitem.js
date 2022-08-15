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
  let [list, setList] = useState();
  const getData = () => {
    axios
      .get('https://mariadb-nodejs.herokuapp.com/api/v1/board/list')
      .then(({ data }) => {
        setList(data.list);
      });
  };
  useEffect(() => {
    getData();
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
      </Table>
  );
}

export default ListItem;
