import Logo from "../../common/Logo/Logo";
import TextSwitcher from "../../components/Home/TextSwitcher"

import styles from "../../styles/layout/Home/header.module.scss";

export default function Home() {
    return (
        <>
            <header className={`${styles['full-content-container']} ${styles['header-full-content-container']}`}>
                <div className={`${styles['mid-content-container']}`}>
                    <div className={`${styles['content-container']} ${styles['header-content-container']}`}>
                        <h2>Bem vindo ao meu Site!</h2>
                        <Logo />
                        <TextSwitcher />
                        <p>Meu nome é Lucas Serbato de Barros e esta é uma amostra do meu trabalho como desenvolvedor front-end</p>
                        <button className={styles.teste}>Vamos lá!</button>
                    </div>
                </div>
            </header>
        </>
    )
}