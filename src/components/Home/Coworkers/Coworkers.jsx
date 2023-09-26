import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { coworkersData } from './data'

import styles from '../../../styles/layout/Home/coworkers.module.scss'


export default function Coworkers() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <section className={`${styles['full-content-container']}`} >
                <div className={`${styles['mid-content-container']}`}>
                    <div className={`${styles['content-container']}`}>
                        <h2>Coworkers</h2>
                        <Slider {...settings} className={styles.coworkerCard}>
                            {coworkersData.map((coworker) => (
                                <div key={coworker.id} className={styles.coworkerCard}>
                                    <img src={coworker.linkImg} alt={coworker.name} />
                                    <h3>{coworker.name}</h3>
                                    <p>{coworker.area}</p>
                                    <a href={coworker.linkedin}>LinkedIn</a>
                                    <a href={coworker.portfolio}>Portfolio</a>
                                    <p>{coworker.description}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}