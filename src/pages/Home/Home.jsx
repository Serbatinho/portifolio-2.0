import AboutSection from "../../components/Home/AboutSection";
import HomeHeader from "../../components/Home/HomeHeader";
import History from "../../components/Home/History";
import Coworkers from "../../components/Home/Coworkers/Coworkers";


import styles from "../../styles/layout/pages/Home/home.module.scss"

export default function Home() {
    return (
        <>
            <div className={`${styles['full-content-container-home']}`}>
                <HomeHeader />
                <AboutSection />
                <History />
                <Coworkers />
            </div>
        </>
    )
}