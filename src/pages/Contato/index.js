import styles from "./Contato.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contato() {
    const copia = () => {
        window.navigator.clipboard.writeText('heitor2000costa@gmail.com');
        const emailCopiado = document.querySelector('#emailCopiado');

        emailCopiado.animate([
            {opacity: "100%"},
            {opacity: "0%"}
        ], {
            duration: 2000
        });
    }

    return (
        <section id="contato" >
            <div className={styles.contatoContainer}>
                <h2>
                    Contato
                </h2>
                <p>
                    Você pode me contatar pelas minhas redes sociais ou pelo e-mail
                </p>
                <div>
                    <a href="https://www.instagram.com/hekth0r_/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                        <span>
                            Instagram
                        </span>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/heitor-candido/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                        <span>
                            Linkedin
                        </span>
                    </a>
                </div>
                <div onClick={copia} className={styles.email}>
                    <MdEmail />
                    <span>
                        heitor2000costa@gmail.com
                    </span>
                </div>
                <span id="emailCopiado" className={styles.emailCopiado}>
                    E-mail copiado
                </span>

            </div>
        </section>
    );
}