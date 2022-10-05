import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr;
  font-size: 19px;
  border-bottom: 1px solid #000;
`;
const Board = (list) => {
  return (
    <>
      {list && (
        <List>
          <div>{list.id}</div>
          <div>{list.writer}</div>
          <div>{list.content}</div>
          <div>{list.registerDate}</div>
        </List>
      )}
    </>
  );
};

export default Board;
