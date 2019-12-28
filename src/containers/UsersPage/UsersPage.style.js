import styled from 'styled-components';
import { positionMixin } from '../../utils/styles/baseStyle';

const UserPageContainer = styled.div`
  ${positionMixin('relative', 0)};
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default UserPageContainer;
