import styles from "../../styles/layout/Home/about-section.module.scss"

import { RiReactjsLine } from "react-icons/ri"
import { MdOutlineDesignServices } from "react-icons/md"
import { TbWorld } from "react-icons/tb"

export default function AboutSection() {
    return (
        <>
            <section className={`${styles['full-content-container']}`}>
                <div className={`${styles['mid-content-container']}`}>
                    <div className={`${styles['content-container']} ${styles['about-content-container']}`}>
                        <div className={`${styles['about-item']}`}>
                            <div className={`${styles['about-item-title']}`}>
                                <h2>Python</h2>
                                <a href="#"> < RiReactjsLine /> </a>

                            </div>
                            <p className={`${styles['about-item-text']}`}>De uma olhada em meus projetos python</p>
                            <button>Conheça</button>
                        </div>

                        <div className={`${styles['about-item']}`}>
                            <div className={`${styles['about-item-title']}`}>
                                <h2>Figma</h2>
                                <a href="#"> < MdOutlineDesignServices /> </a>

                            </div>
                            <p className={`${styles['about-item-text']}`}>Desenvolvimento React e Node, treinamenti FIAP, Alura e Impacta</p>
                            <button>Conheça</button>
                        </div>

                        <div className={`${styles['about-item']}`}>
                            <div className={`${styles['about-item-title']}`}>
                                <h2>Web</h2>
                                <a href="#"> < TbWorld /> </a>

                            </div>
                            <p className={`${styles['about-item-text']}`}>De uma olhada em meus projetos figma e front-end</p>
                            <button>Conheça</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}