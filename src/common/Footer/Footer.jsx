import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"

import ContactForm from "../ContactForm/ContactForm"
import Logo from '../Logo/Logo'

import styles from "../../styles/components/Footer/footer.module.scss"


export default function Footer() {
    return (
        <>
            <footer className={`${styles['full-content-container']}`}>
                <div className={`${styles['mid-content-container']}`}>
                    <div className={`${styles['content-container']}`}>

                        <ContactForm className={`${styles['full-form']}`} />

                        <nav>
                            <h3>Minhas redes</h3>
                            <ul>
                                <li><a href="#"><FaGithub style={{ color: 'red' }} />Github</a></li>
                                <li><a href="#"><FaLinkedin />LinkedIn</a></li>
                                <li><a href="#"><FaYoutube />Youtube</a></li>
                            </ul>
                        </nav>

                        <div>
                            <p>No Copyright © 2023, copie à vontade. Designed by Lucas Serbato</p>
                        </div>

                        <Logo fontSize="1rem" />

                    </div>
                </div>
            </footer>
        </>
    )
}