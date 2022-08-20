import './style/core/index.scss';
import Header from './component/Header';
import styled from 'styled-components';
import ListItem from './component/Listitem';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import memberHook from './hooks/MemberHook';
import listHook from './hooks/ListHook';
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
function App() {
  const MemberHook = memberHook('');
  const Listkhook = listHook('');
  return (
    <Content>
      <Header />
      <Routes>
        <Route path='/' element={ListItem({ ...Listkhook })} />
        <Route path='/login' element={Login({ ...MemberHook })} />
        <Route path='/signup' element={Signup({ ...MemberHook })} />
      </Routes>
    </Content>
  );
}

export default App;
