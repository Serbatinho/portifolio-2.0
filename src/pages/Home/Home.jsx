import AboutSection from "../../components/Home/AboutSection";

import styles from "../../styles/pages/Home/Home.module.scss";

export default function Home() {
    return (
        <>
            <header className={`${styles['full-content-container']}`}>
                <div className={`${styles['mid-content-container']}`}>
                    <div className={`${styles['content-container']}`}>
                        <h1>Home</h1>
                        <AboutSection />
                        <button className={styles.teste}>Button</button>
                    </div>
                </div>
            </header>
        </>
    )
}