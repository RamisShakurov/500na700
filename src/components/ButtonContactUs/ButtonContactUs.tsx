'use client'

import styles from './ButtonContactUs.module.scss'
import { useState } from "react"
import { Modal } from "@/components/Modal/Modal"
import FormContact from "@/components/FormContact/FormContact"

type ContactFormData = {
    name: string
    phone: string
    email: string
    agree: boolean
}

const ButtonContactUs = () => {
    const [open, setOpen] = useState(false)

    const handleSubmit = (data: ContactFormData) => {
        console.log('Данные формы:', data)
        console.log('Имя:', data.name)
        console.log('Телефон:', data.phone)
        console.log('Email:', data.email)
        console.log('Согласие:', data.agree)

        setOpen(false)
    }

    return (
        <>
            <button
                className={styles.button}
                onClick={() => setOpen(true)}
                type="button"
            >
                Связаться с нами
            </button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <FormContact onSubmit={handleSubmit} />
            </Modal>
        </>
    )
}

export default ButtonContactUs