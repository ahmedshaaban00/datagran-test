import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
