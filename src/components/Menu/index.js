import styles from "./Menu.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <Link to="inicio"  duration={400} smooth spy className={styles.menuLink} activeClass={styles.active}>
                Início
            </Link>
            <Link to="sobremim" duration={400} smooth spy className={styles.menuLink} activeClass={styles.active}>
                Sobre mim
            </Link>
            <Link to="curriculo" duration={400} smooth spy className={styles.menuLink} activeClass={styles.active}>
                Currículo
            </Link>
            <Link to="projetos" duration={400} smooth spy className={styles.menuLink} activeClass={styles.active}>
                Projetos
            </Link>
            <Link to="contato" duration={400} smooth spy className={styles.menuLink} activeClass={styles.active}>
                Contato
            </Link>
        </nav>
    );
}