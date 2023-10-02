import { FaLinkedin, FaBriefcase } from "react-icons/fa";

import { coworkersData } from "./data";

import styles from "../../../styles/layout/pages/Home/components/coworkers.module.scss";
import Carousel from "../../../common/Carousel/Carousel";

export default function Coworkers() {

    return (
        <>
            <section className={`${styles["full-content-container"]}`}>
                <div className={`${styles["mid-content-container"]}`}>
                    <div className={`${styles["content-container"]}`}>

                        <h2 className={`${styles["coworker-title"]}`}>Colegas</h2>

                        <Carousel>
                            {coworkersData.map((item) => (
                                <article
                                    className={`${styles["card-full"]}`}
                                    key={item.id}
                                >
                                    <h3 className={`${styles["card-title"]}`}>{item.name}</h3>
                                    <figure className={`${styles["card-full-img"]}`}>
                                        <div>
                                            <img src={item.linkImg} alt={item.name} />
                                        </div>
                                        <figcaption>{item.area}</figcaption>
                                    </figure>
                                    <nav className={`${styles["card-nav"]}`}>
                                        <a href={item.linkedin} target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a>
                                        <a href={item.portfolio} target="_blank" rel="noreferrer"><FaBriefcase />Portfolio</a>
                                    </nav>
                                    <p className={`${styles["card-desc"]}`}>{item.description}</p>
                                </article>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    );
}