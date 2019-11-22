import styled from 'styled-components';
import { positionMixin } from '../../styles/baseStyle';

const StyledUserList = styled.div`
  ${positionMixin('relative', '-20px')}
  width: 270px;
  height: 400px;
  overflow-y: auto;
`;

export default StyledUserList;
