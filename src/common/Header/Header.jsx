import { useState } from 'react'

import styles from '../../styles/layout/common/Header/header.module.scss'

export default function Header() {

    const [active, setActive] = useState(false)

    return (
        <>
            <div onClick={() => { setActive(!active) }} className={`${styles['full-header-button']} ${active ? styles['header-burguer-active'] : ""}`} >
                <div className={`${styles['header-burguer']}`}></div>
            </div>
        </>
    )
}