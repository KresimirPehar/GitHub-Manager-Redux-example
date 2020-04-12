import React from 'react';
import { Wrapper, Input, Button } from './AddUser.style';

const AddUser = ({ placeholder, userName, onChange, onSubmit }) => {
  return (
    <Wrapper data-testid='addForm'>
      <Input
        type='text'
        placeholder={placeholder}
        value={userName}
        onChange={onChange}
        data-testid='userNameInput'
        required
      />
      <Button onClick={onSubmit} type='submit'>
        Add
      </Button>
    </Wrapper>
  );
};

export default AddUser;
