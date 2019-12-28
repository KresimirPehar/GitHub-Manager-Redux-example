import styled from 'styled-components';
import { positionMixin } from '../../utils/styles/baseStyle';

const StyledUserList = styled.div`
  ${positionMixin('absolute', '160px')};
  width: 247px;
  height: 400px;
  overflow-y: auto;
`;

export default StyledUserList;
