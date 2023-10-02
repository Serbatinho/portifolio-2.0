import ContactForm from '../ContactForm/ContactForm';
import Logo from '../Logo/Logo';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

import styles from '../../styles/layout/common/Footer/footer.module.scss';

export default function Footer() {
    return (
        <footer className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <ContactForm fatherStyle={styles['full-form']} />

                    <nav className={`${styles['nav-social']}`}>
                        <h3>Minhas redes</h3>
                        <ul>
                            <li><a href="#"><FaGithub />Github</a></li>
                            <li><a href="#"><FaLinkedin />LinkedIn</a></li>
                            <li><a href="#"><FaYoutube />Youtube</a></li>
                        </ul>
                    </nav>

                    <div className={`${styles['nocopy']}`}>
                        <p>No Copyright © 2023, copie à vontade. Designed by Lucas Serbato</p>
                    </div>

                    <Logo fatherStyle={styles['logo']} />
                </div>
            </div>
        </footer>
    );
}