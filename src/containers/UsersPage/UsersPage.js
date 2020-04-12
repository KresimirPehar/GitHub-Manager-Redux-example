import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader as LoadingSpinner } from 'react-spinners';
import { addGitHubUser } from '../../redux/actions/userActions';
import UserList from '../../components/UserList';
import AddUser from '../../components/AddUser';
import UserPageContainer from './UsersPage.style';

const UsersPage = ({ users }) => {
  const [userName, setUserName] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter Github Username . . .');
  const userError = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userError) setPlaceholder('User not found');
    else setPlaceholder('Enter Github Username . . .');
  }, [userError]);

  const onChange = e => {
    setPlaceholder('Enter Github Username . . .');
    setUserName(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(addGitHubUser(userName));
    setUserName('');
  };

  return (
    <UserPageContainer>
      <LoadingSpinner
        color='#D0021B'
        loading={loading}
        css='position: absolute; top: 110px'
      />
      <AddUser
        userName={userName}
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder={placeholder}
      />
      <UserList users={users} />
    </UserPageContainer>
  );
};

export default UsersPage;
