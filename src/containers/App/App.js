import React from 'react';
import { useSelector } from 'react-redux';
import UsersPage from '../UsersPage';
import Search from '../Search';
import Header from '../../components/Header';
import Wrapper from './App.style';

const App = () => {
  const filteredUser = useSelector(state => state.filteredUser);

  return (
    <Wrapper>
      <Header />
      <Search />
      <UsersPage users={filteredUser} />
    </Wrapper>
  );
};

export default App;
