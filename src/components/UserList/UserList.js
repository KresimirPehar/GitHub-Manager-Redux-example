import React, { memo } from 'react';
import User from '../User/User';
import StyledUserList from './UserList.style';

const UserList = memo(({ users }) => {
  return (
    <StyledUserList>
      {users.map((user, index) => (
        <User key={index.toString()} {...user} />
      ))}
    </StyledUserList>
  );
});

export default UserList;
