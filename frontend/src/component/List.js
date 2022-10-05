import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Header';
import ListItem from './Listitem';

const Table = styled.ul`
  text-align: left;
  width: 70%;
  margin: auto;
  margin-top: 30px;
`;
const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr;
  font-size: 19px;
  border-bottom: 1px solid #000;
`;

const List = ({ setlist, list, count, setCount }) => {
  const maxCount = Math.ceil(count / 10);
  let pagiNationBtn = [];
  const getListItem = async () => {
    await axios.get(`/board/list`).then(({ data }) => {
      setlist(data);
      setCount(data.length);
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
    <>
      <Header />
      <Table>
        <ListHeader>
          <div>번호</div>
          <div>작성자</div>
          <div>글제목</div>
          <div>작성일자</div>
        </ListHeader>
        <div>
          {list !== null &&
            list.map((list, key) => <ListItem {...list} key={key}></ListItem>)}
        </div>
        {pagiNationBtn &&
          setBtn().map((number, key) => (
            <input
              type='submit'
              onClick={getListItem}
              value={number}
              key={key}
            />
          ))}
      </Table>
    </>
  );
};

export default List;
