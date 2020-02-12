import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.light_grey};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 4rem;
`;

export const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 500px;
  overflow: auto;
  box-shadow: ${({ theme }) => `0 25px 50px -12px ${rgba(theme.dark, 0.25)}`};
  border: 2px solid ${({ theme }) => theme.dark};
  border-radius: 7px;
`;
