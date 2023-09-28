import styles from '../../styles/layout/Home/history.module.scss'

export default function History() {

    return (
        <>
            <section className={`${styles['full-content-container']}`}>
                <div className={`${styles['mid-content-container']}`}>
                    <div className={`${styles['content-container']}`}>
                        <div>
                            <h2>Minha Historia</h2>
                            <div>
                                <span>img</span>
                            </div>
                        </div>

                        <section>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr.</p>

                            <blockquote cite="https://www.example.com/">
                                Esta é uma frase solta usada como uma citação no final do conteúdo.
                            </blockquote>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}