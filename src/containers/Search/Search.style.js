import styled from 'styled-components';
import StyledInput from '../../styles/baseStyle';

const SearchContainer = styled.div`
  grid-column: 1;
  width: 450px;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.div`
  position: absolute;
  top: 80px;
  left: 210px;
  font-size: 1.1em;
`;

const Input = styled(StyledInput)`
  position: absolute;
  top: 110px;
  left: 150px;
`;

export { SearchContainer, Title, Input };
