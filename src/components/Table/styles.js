import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledTable = styled.table`
  border: none;
  border-collapse: separate;
  padding: 0 1rem 1rem;
  border-spacing: 0.5rem;
`;

export const StyledRow = styled.tr``;

export const StyledHeader = styled.th`
  padding: 1rem;
`;

export const StyledCell = styled.td`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: ${({ theme }) =>
    `0 1px 3px 0 ${rgba(theme.dark, 0.1)},0 1px 2px 0 ${rgba(
      theme.dark,
      0.06
    )}`};
  ${({ theme, clickable }) =>
    clickable
      ? `color: ${theme.link};cursor:pointer;`
      : `color: ${theme.dark};`}
`;
