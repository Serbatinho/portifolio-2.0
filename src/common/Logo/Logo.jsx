import styles from "../../styles/components/Logo/logo.module.scss";

export default function Logo() {
    return (
        <div className={`${styles['logo-container']}`}>
            <h1 className={`${styles['logo']}`}>SERBATO</h1>
        </div>
    );

}