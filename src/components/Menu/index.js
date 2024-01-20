import styles from "./Menu.module.css";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";

export default function Menu() {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.menu}>
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
            </div>
            <input type="checkbox" id="menuBurger" className={styles.menuBurguer} />
            <label htmlFor="menuBurger" >
                <IoMenu className={styles.iconeBurguer} />
            </label>
            <div className={styles.menuMobile}>
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
            </div>
            
        </nav>
    );
}