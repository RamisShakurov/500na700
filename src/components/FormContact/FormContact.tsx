'use client'

import { FormEvent, useState } from 'react'
import styles from './FormContact.module.scss'

type ContactFormData = {
    name: string
    phone: string
    email: string
    agree: boolean
}

type ContactFormProps = {
    onSubmit?: (data: ContactFormData) => void
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        phone: '',
        email: '',
        agree: false
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(formData)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <h3 className={styles.title}>СВЯЗАТЬСЯ С НАМИ</h3>
            </div>
            <div className={styles.fields}>
                <input
                    className={styles.input}
                    required
                    placeholder="Имя"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    placeholder="Телефон"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input
                    className={styles.input}
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <label className={styles.checkbox}>
                <input
                    type="checkbox"
                    required
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                />
                <span>
                    Я согласен(-а) на обработку персональных данных
                </span>
            </label>
            <button type="submit" className={styles.button}>
                Отправить
            </button>
        </form>
    )
}

export default ContactForm