import { useState } from "react";

import styles from '../../styles/components/ContactForm/contact-form.module.scss'

export default function ContactForm(fatherStyle) {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dados do formulário:', formData);
    };

    return (
        <div className={`${styles['full-form']}`}>
            <h2>Entre em Contato</h2>
            <form onSubmit={handleSubmit}>
                <div className={`${styles['input-container']}`}>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={`${styles['input-container']}`}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={`${styles['input-container']}`}>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}