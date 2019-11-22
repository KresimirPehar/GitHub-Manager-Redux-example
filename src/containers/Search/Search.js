import React from 'react';
import { useDispatch } from 'react-redux';
import { filterUser } from '../../redux/actions/userActions';
import { SearchContainer, Title, Input } from './Search.style';

const Search = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterUser(e.target.value));

  return (
    <SearchContainer>
      <Title>Find user</Title>
      <Input
        type='text'
        placeholder='Search . . .'
        onChange={onChange}
        required
      />
    </SearchContainer>
  );
};

export default Search;
