import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { debounce } from "lodash";

import { coworkersData } from "./data";

import styles from "../../../styles/layout/Home/coworkers.module.scss";
import { FaLinkedin, FaBriefcase } from "react-icons/fa";

export default function Coworkers() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const innerCarousel = useRef();
    const controls = useAnimation();

    const updateCarouselWidth = () => {
        const newWidth = innerCarousel.current.scrollWidth - innerCarousel.current.offsetWidth;
        setWidth(newWidth);
    };

    const returnCarousel = () => {
        controls.start({ x: 0 }, { type: "spring", stiffness: 100, damping: 20 });
    }

    useEffect(() => {
        updateCarouselWidth();

        window.addEventListener("resize", debounce(updateCarouselWidth, 500))
        window.addEventListener("resize", returnCarousel)
    }, []);

    return (
        <>
            <section className={`${styles["full-content-container"]}`}>
                <div className={`${styles["mid-content-container"]}`}>
                    <div className={`${styles["content-container"]}`}>
                        <h2 className={`${styles["coworker-title"]}`}>Colegas</h2>
                        <motion.section
                            ref={carousel}
                            whileTap={{ cursor: "grabbing" }}
                            className={`${styles["full-carousel"]}`}
                        >
                            <motion.div
                                ref={innerCarousel}
                                drag="x"
                                dragConstraints={{ right: 0, left: -width }}
                                className={`${styles["inner-carousel"]}`}
                                animate={controls}
                            >
                                {coworkersData.map((item) => (
                                    <motion.article
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
                                    </motion.article>
                                ))}
                            </motion.div>
                        </motion.section>
                    </div>
                </div>
            </section>
        </>
    );
}