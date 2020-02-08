import styled from 'styled-components';

export const FormContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.light_grey};
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const Col = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 0.49;
`;
