import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr;
  font-size: 19px;
  border-bottom: 1px solid #000;
`;

const ListItem = (props) => {
  return (
    <>
      <List>
        <div>{props.id}</div>
        <div>{props.writer}</div>
        <Link to={`/board/${props.id}`}>{props.content}</Link>
        <div>{props.registerDate}</div>
      </List>
      {/* {pagiNationBtn &&
          setBtn().map((number, key) => (
            <input
              type='submit'
              onClick={getListItem}
              value={number}
              key={key}
            />
          ))} */}
    </>
  );
};

export default ListItem;
