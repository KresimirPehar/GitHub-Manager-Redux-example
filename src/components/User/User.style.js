import styled from 'styled-components';

const UserCard = styled.div`
  position: relative;
  display: flex;
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
  position: absolute;
  top: 10px;
  left: 90px;
  font-weight: bold;
  font-size: 1em;
`;

const Location = styled.div`
  position: absolute;
  top: 30px;
  left: 90px;
`;

export { UserCard, Photo, Name, Location };
