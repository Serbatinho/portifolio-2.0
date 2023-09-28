import AboutSection from "../../components/Home/AboutSection";
import Header from "../../components/Home/Header";
import History from "../../components/Home/History";
import Coworkers from "../../components/Home/Coworkers/Coworkers";


import styles from "../../styles/pages/Home/home.module.scss"

export default function Home() {
    return (
        <>
            <div className={`${styles['full-content-container-home']}`}>
                <Header />
                <AboutSection />
                <History />
                <Coworkers />
            </div>
        </>
    )
}