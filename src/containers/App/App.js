import React from 'react';
import { useSelector } from 'react-redux';
import UsersPage from '../UsersPage/UsersPage';
import Search from '../Search/Search';
import Header from '../../components/Header/Header';
import Wrapper from './App.style';

const App = () => {
  const filteredUser = useSelector(state => state.users.filteredUser);

  return (
    <Wrapper>
      <Header />
      <Search />
      <UsersPage users={filteredUser} />
    </Wrapper>
  );
};

export default App;
