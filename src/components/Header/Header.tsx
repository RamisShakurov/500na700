import Link from "next/link";
import LogoIcon from "../LogoIcon/LogoIcon";
import ButtonContactUs from "@/components/ButtonContactUs/ButtonContactUs";
import clsx from "clsx";
import styles from './Header.module.scss'

export default function Header({className}: { className?: string }) {
    return (
        <header className={clsx(styles.header ,className)}>
            <Link href='/'> <LogoIcon/> </Link> <ButtonContactUs/>
        </header>
    )
}