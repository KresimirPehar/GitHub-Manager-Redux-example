import React, { memo } from 'react';
import { UserCard, Photo, Name, Location } from './User.style';

const User = memo(({ avatarUrl, name, location }) => {
  return (
    <UserCard>
      <Photo src={avatarUrl} />
      <Name>{name}</Name>
      <Location>{location}</Location>
    </UserCard>
  );
});

export default User;
