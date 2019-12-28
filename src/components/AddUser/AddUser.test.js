import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddUser from './AddUser';

describe('AddUser component', () => {
  it('should called onSave() when button is clicked', () => {
    const onSubmit = jest.fn(e => e.persist());
    const { getByTestId } = render(<AddUser onSubmit={onSubmit} />);
    fireEvent.submit(getByTestId('addForm'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
