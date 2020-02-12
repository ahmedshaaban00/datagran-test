import React from 'react';
import PropTypes from 'prop-types';
import { StyledTable, StyledRow, StyledHeader, StyledCell } from './styles';

const Table = ({
  headers,
  items,
  clickableCellTypes,
  onCellClick,
  ...rest
}) => {
  return (
    <StyledTable {...rest}>
      <thead>
        <StyledRow>
          {headers.map(header => (
            <StyledHeader key={header.id}>{header.name}</StyledHeader>
          ))}
        </StyledRow>
      </thead>
      <tbody>
        {items.map((item, key) => (
          <StyledRow key={key.toString()}>
            {headers.map(header => (
              <StyledCell
                key={`${key.toString()}_${header.id}`}
                clickable={clickableCellTypes.indexOf(header.id) !== -1}
                onClick={() => {
                  if (clickableCellTypes.indexOf(header.id) !== -1) {
                    onCellClick(header.id, item[header.id]);
                  }
                }}
              >
                {item[header.id]}
              </StyledCell>
            ))}
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickableCellTypes: PropTypes.arrayOf(PropTypes.string),
  onCellClick: PropTypes.func
};

Table.defaultProps = {
  clickableCellTypes: [],
  onCellClick: () => {}
};

export default Table;
