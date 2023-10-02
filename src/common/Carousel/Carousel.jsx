import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { debounce } from "lodash";
import PropTypes from "prop-types";

import styles from "../../styles/layout/common/Carousel/carousel.module.scss";

const Carousel = ({ children }) => {
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
    };

    useEffect(() => {
        updateCarouselWidth();

        window.addEventListener("resize", debounce(updateCarouselWidth, 500));
        window.addEventListener("resize", returnCarousel);

        return () => {
            window.removeEventListener("resize", debounce(updateCarouselWidth, 500));
            window.removeEventListener("resize", returnCarousel);
        };
    }, []);

    Carousel.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <motion.section
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
            className={styles["full-carousel"]}
        >
            <motion.div
                ref={innerCarousel}
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className={styles["inner-carousel"]}
                animate={controls}
            >
                {children}
            </motion.div>
        </motion.section>
    );


};

export default Carousel;