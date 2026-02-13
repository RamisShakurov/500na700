'use client'

import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

type ModalProps = {
    open: boolean
    onClose: () => void
    children: ReactNode
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!open) return
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', onEsc)
        return () => document.removeEventListener('keydown', onEsc)
    }, [onClose])

    if (!mounted || !open) return null

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className={styles.buttonModal}
                    aria-label="Закрыть"
                    type="button"
                >
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.7 22.9999L0 2.29999L2.3 0L23 20.6999L20.7 22.9999Z" fill="#0F0F17" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.7 0.000124467L0 20.7L2.3 23L23 2.30011L20.7 0.000124467Z" fill="#0F0F17" />
                    </svg>
                </button>

                {children}
            </div>
        </div>,
        document.body
    )
}