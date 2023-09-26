import PropTypes from 'prop-types';

import styles from "../../styles/components/Logo/logo.module.scss";
import { Link } from 'react-router-dom';

function Logo({ fontSize, fatherStyle }) {
    return (
        <div className={`${styles['logo-container']} ${fatherStyle}`}>
            <Link to="/">
                <h1 className={`${styles['logo']}`} style={{ fontSize: fontSize }}>Serbato</h1>
            </Link>
        </div>
    );
}

Logo.propTypes = {
    fontSize: PropTypes.string,
    fatherStyle: PropTypes.string,
};

export default Logo;