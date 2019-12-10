import React from 'react';
import { Wrapper, Input, Button } from './AddUser.style';

const AddUser = ({ placeholder, userName, onChange, onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit} data-testid='addForm'>
      <Input
        type='text'
        placeholder={placeholder}
        value={userName}
        onChange={onChange}
        data-testid='input'
        required
      />
      <Button type='submit' onClick={onSubmit} data-testid='addButton'>
        Add
      </Button>
    </Wrapper>
  );
};

export default AddUser;
