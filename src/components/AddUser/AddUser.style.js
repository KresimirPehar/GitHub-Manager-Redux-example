import styled from 'styled-components';
import { StyledInput, positionMixin } from '../../styles/baseStyle';

const Wrapper = styled.form`
  ${positionMixin('absolute', '62px')};
  width: 247px;
`;

const Input = styled(StyledInput)``;

const Button = styled.button`
  ${positionMixin('absolute', null, null, null, '2px')};
  width: 60px;
  height: 35px;
  border: 1px solid #000;
  border-radius: 3px;
  color: #fff;
  background-color: #6f1c1c;
`;

export { Wrapper, Input, Button };
