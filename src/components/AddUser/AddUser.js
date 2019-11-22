import React from 'react';
import { Wrapper, Input, Button } from './AddUser.style';

const AddUser = ({ placeholder, userName, onChange, onSave }) => {
  return (
    <Wrapper>
      <Input
        type='text'
        placeholder={placeholder}
        value={userName}
        onChange={onChange}
        required
      />
      <Button type='submit' onClick={onSave}>
        Add
      </Button>
    </Wrapper>
  );
};

export default AddUser;
