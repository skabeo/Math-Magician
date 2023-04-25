import React from 'react';
import PropTypes from 'prop-types';

const getClass = (index) => {
  if (index === 16) {
    return 'two-spaces';
  }
  if (index === 3 || index === 7 || index === 11 || index === 15 || index === 18) {
    return 'orange';
  }
  return '';
};

const ButtonGrid = (props) => {
  const { buttons } = props;
  return (
    <div className="button-grid">
      {buttons.map((button, index) => (
        <button type="button" key={button} className={getClass(index)}>{button}</button>
      ))}
    </div>
  );
};

ButtonGrid.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonGrid;
