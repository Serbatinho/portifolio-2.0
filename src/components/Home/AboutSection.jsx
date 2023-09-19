import styles from "../../styles/layout/Home/about-section.module.scss"

import { RiReactjsLine } from "react-icons/ri"

export default function AboutSection() {
    return (
        <>
            <section className={`${styles['full-content-container']}`}>
                <div className={`${styles['mid-content-container']}`}>
                    <div className={`${styles['content-container']}`}>
                        <div className={`${styles['about-item']}`}>
                            <div className={`${styles['about-item-title']}`}>
                                <h2>Python</h2>
                                <a href="#"> < RiReactjsLine /> </a>

                            </div>
                            <p>De uma olhada em meus projetos python</p>
                            <button>Conheça</button>
                        </div>

                        <div className={`${styles['about-item']}`}>
                            <div className={`${styles['about-item-title']}`}>
                                <h2>Figma</h2>
                                <a href="#"> < RiReactjsLine /> </a>

                            </div>
                            <p>Desenvolvimento React e Node, treinamenti FIAP, Alura e Impacta</p>
                            <button>Conheça</button>
                        </div>

                        <div className={`${styles['about-item']}`}>
                            <div className={`${styles['about-item-title']}`}>
                                <h2>Web</h2>
                                <a href="#"> < RiReactjsLine /> </a>

                            </div>
                            <p>De uma olhada em meus projetos figma e front-end</p>
                            <button>Conheça</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}