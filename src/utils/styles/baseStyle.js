import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0;
  width: 187px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 3px;
`;

const positionMixin = (
  position,
  top = null,
  left = null,
  bottom = null,
  right = null
) => `
  position: ${position};
  top: ${top};
  left: ${left};
  bottom: ${bottom};
  right: ${right};
`;

export { StyledInput, positionMixin };
