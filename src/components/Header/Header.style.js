import styled from 'styled-components';
import { positionMixin } from '../../styles/baseStyle';

const Title = styled.div`
  width: 100vw;
  height: 45px;
  border: 1px solid #000;
  background-color: #6f1c1c;
  color: #fff;

  span {
    ${positionMixin('absolute', '5px', '150px')}
    font-size: 1.7em;
  }
`;

export default Title;
