import styled from 'styled-components';

export const Content = styled.p`
  font-size: 1em;
  color: ${({ theme, color }) => theme[color] || color || theme.dark};
`;

export const Title = styled.h1`
  font-size: 2.25em;
  color: ${({ theme, color }) => theme[color] || color || theme.dark};
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  color: ${({ theme, color }) => theme[color] || color || theme.dark};
`;
