import './style/core/index.scss';
import Header from './component/Header';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
function App() {
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
    <Content>
      <Header />
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
    </Content>
  );
}

export default App;
