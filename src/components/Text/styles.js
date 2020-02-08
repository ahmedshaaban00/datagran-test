import styled, { css } from 'styled-components';

const commonStyles = css`
  color: ${({ theme, color }) => theme[color] || color || theme.dark};
  margin: 0;
`;

export const Content = styled.p`
  font-size: 1em;
  ${commonStyles}
`;

export const Title = styled.h1`
  font-size: 2.25em;
  ${commonStyles}
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  ${commonStyles}
`;
