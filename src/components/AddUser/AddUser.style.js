import styled from 'styled-components';
import StyledInput from '../../styles/baseStyle';

const Wrapper = styled.div`
  position: absolute;
  top: 110px;
  left: 700px;
`;

const Input = styled(StyledInput)``;

const Button = styled.button`
  position: absolute;
  right: -58px;
  width: 60px;
  height: 35px;
  border: 1px solid #000;
  border-radius: 3px;
  color: #fff;
  background-color: #6f1c1c;
`;

export { Wrapper, Input, Button };
