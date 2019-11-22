import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { addGitHubUser } from '../../redux/actions/userActions';
import UserList from '../../components/UserList';
import AddUser from '../../components/AddUser';
import UserPageContainer from './UsersPage.style';

const UsersPage = ({ users }) => {
  const [userName, setUserName] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter Github Username . . .');
  const userError = useSelector(state => state.users.error);
  const loading = useSelector(state => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userError) setPlaceholder('User not found');
    else setPlaceholder('Enter Github Username . . .');
  }, [userError]);

  const onChange = e => {
    setPlaceholder('Enter Github Username . . .');
    setUserName(e.target.value);
  };

  const onSave = e => {
    e.preventDefault();
    dispatch(addGitHubUser(userName));
    setUserName('');
  };

  return (
    <UserPageContainer>
      <ClipLoader
        color='#D0021B'
        loading={loading}
        css='position: fixed; top: 150px'
      />
      <AddUser
        userName={userName}
        onChange={onChange}
        onSave={onSave}
        placeholder={placeholder}
      />
      <UserList users={users} />
    </UserPageContainer>
  );
};

export default UsersPage;
