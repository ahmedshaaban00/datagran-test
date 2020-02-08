import styled from 'styled-components';

export const StyledSpacer = styled.div`
  ${({ grow }) => grow && 'flex-grow: 1;'};

  ${({ width }) =>
    width &&
    `
      width: ${width};
    `};

  ${({ height }) =>
    height &&
    `
      height: ${height};
    `};
`;
