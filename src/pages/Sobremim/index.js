import styles from "./Sobremim.module.css";
import imagemPerfil from "imagens/foto-perfil-peb.jpg";

export default function Sobremim() {
    return (
        <section id="sobremim" className={styles.sobremimContainer}>
            <img src={imagemPerfil} alt="Foto em preto e branco de Heitor" />
            <div className={styles.sobremimTexto}>
                <h2>
                    Um pouco sobre <strong>mim</strong>
                </h2>
                <p>
                    Olá, tudo bem? Meu nome é Heitor, tenho 23 anos e sou natural de Florianópolis/SC. Caí de paraquedas no mundo da programação em 2021 e acabei adorando. Desde lá, procuro estudar e me desenvolver nesse mundo. Meu foco principal está sendo o Front-End.<br/>
                    Já estudei na instituição <a href="https://www.betrybe.com" target="_blank" rel="noreferrer">Trybe</a> onde tive grande desenvolvimento na parte de Javascript e React.
                    <br/> 
                    Atualmente estudo Análise e Desenvolvimento de Sistemas pela Estácio e externamente estudo também na plataforma da <a href="https://www.alura.com.br" target="_blank" rel="noreferrer">Alura</a>. Além disso, sou uma pessoa bastante focada, autônoma e transparente.
                </p>
            </div>
        </section>
    );
}