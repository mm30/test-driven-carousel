import React from 'react';
import PropTypes from 'prop-types';

//const CarouselButton = ({children}) => <button>{children}</button>;
const CarouselButton = props => <button {...props} />;

CarouselButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CarouselButton;