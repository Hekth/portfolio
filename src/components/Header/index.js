import Menu from "components/Menu";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <Menu />
        </header>
    );
}