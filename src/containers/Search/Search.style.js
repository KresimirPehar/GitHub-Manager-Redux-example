import styled from 'styled-components';
import { StyledInput, positionMixin } from '../../styles/baseStyle';

const SearchContainer = styled.div`
  grid-column: 1;
  width: 450px;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.div`
  ${positionMixin('absolute', '80px', '210px')}
  font-size: 1.1em;
`;

const Input = styled(StyledInput)`
  ${positionMixin('absolute', '110px', '150px')}
`;

export { SearchContainer, Title, Input };
