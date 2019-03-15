import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './button.scss';

const Button = ({ onClick, label, disabled }) => {
    const buttonClasses = classnames(
        styles['button'],
        disabled && styles['disabled'],
    );

    return (
        <div
            className={ buttonClasses }
            onClick={ !disabled ? onClick : undefined }
        >
            { label }
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;
