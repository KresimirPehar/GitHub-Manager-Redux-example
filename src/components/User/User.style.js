import styled from 'styled-components';
import { positionMixin } from '../../utils/styles/baseStyle';

const UserCard = styled.div`
  position: relative;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 3px;
  width: 245px;
  height: 75px;
  margin-bottom: 20px;
`;

const Photo = styled.img`
  width: 75px;
`;

const Name = styled.div`
  ${positionMixin('absolute', '10px', '90px')}
  font-weight: bold;
  font-size: 1em;
`;

const Location = styled.div`
  ${positionMixin('absolute', '30px', '90px')}
`;

export { UserCard, Photo, Name, Location };
