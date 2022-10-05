import './style/core/index.scss';
import styled from 'styled-components';
import List from './component/List';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import memberHook from './hooks/MemberHooks';
import listHook from './hooks/ListHook';
import Board from './pages/Board';
import BoardWrite from './pages/BoardWrite';
import WriteHook from './hooks/WriteHook';
import BoardUpdate from './pages/Boardupdate';
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
const App = () => {
  const MemberHook = memberHook('');
  const Listkhook = listHook([]);
  const Writehook = WriteHook([]);
  return (
    <Content>
      <Routes>
        <Route path='/' element={<List {...Listkhook} />} />
        <Route path='/board/:id' element={<Board />} />
        <Route
          path='/board/update/:id'
          element={<BoardUpdate {...Writehook} />}
        />
        <Route path='/board/write' element={<BoardWrite {...Writehook} />} />
        <Route path='/signup' element={<Signup {...MemberHook} />} />
        <Route path='/login' element={<Login {...MemberHook} />} />
      </Routes>
    </Content>
  );
};

export default App;
