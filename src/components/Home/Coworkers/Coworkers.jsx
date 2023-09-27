import { motion } from "framer-motion"
import { useRef, useEffect, useState } from 'react'

import { coworkersData } from './data'

import styles from '../../../styles/layout/Home/coworkers.module.scss'


export default function Coworkers() {


    return (
        <>
            <section className={`${styles['full-content-container']}`} >
                <div className={`${styles['mid-content-container']}`}>
                    <div className={`${styles['content-container']}`}>
                        <h2>Coworkers</h2>
                        <motion.section className={`${styles['full-carousel']}`}>
                            <motion.div className={`${styles['inner-carousel']}`}>

                            </motion.div>
                        </motion.section>

                        {coworkersData.map((item) => (
                            <>
                                <article className={`${styles['card-full']}`} >
                                    <h3 className={`${styles['card-title']}`}>{item.name}</h3>
                                    <figure className={`${styles['card-full-img']}`}>
                                        <div>
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <figcaption>{item.area}</figcaption>
                                    </figure>
                                    <nav className={`${styles['card-nav']}`}>
                                        <a href={item.linkedin}>inkedin</a>
                                        <a href={item.portfolio}>Portfolio</a>
                                    </nav>
                                    <p className={`${styles['card-desc']}`}>{item.description}</p>
                                </article>
                            </>
                        )
                        )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}