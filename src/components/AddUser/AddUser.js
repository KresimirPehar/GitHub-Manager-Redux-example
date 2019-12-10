import React from 'react';
import { Wrapper, Input, Button } from './AddUser.style';

const AddUser = ({ placeholder, userName, onChange, onSave }) => {
  return (
    <Wrapper onSubmit={onSave} data-testid='form'>
      <Input
        type='text'
        placeholder={placeholder}
        value={userName}
        onChange={onChange}
        required
        data-testid='input'
      />
      <Button type='submit' onClick={onSave} data-testid='addUser'>
        Add
      </Button>
    </Wrapper>
  );
};

export default AddUser;
