import PropTypes from 'prop-types';

import styles from "../../styles/components/Logo/logo.module.scss";

function Logo({ fontSize, fatherStyle }) {
    return (
        <div className={`${styles['logo-container']} ${fatherStyle}`}>
            <h1 className={`${styles['logo']}`} style={{ fontSize: fontSize }}>
                SERBATO
            </h1>
        </div>
    );
}

Logo.propTypes = {
    fontSize: PropTypes.string,
    fatherStyle: PropTypes.string,
};

export default Logo;