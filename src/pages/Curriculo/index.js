import styles from "./Curriculo.module.css";

export default function Curriculo() {
    return (
        <section id="curriculo" className={styles.curriculoContainer}>
            <div>
                <h2 className={styles.tituloPrincipalCurriculo}>Currículo</h2>
                <p>
                    Tenho o objetivo de ingressar no mercado de trabalho, e, com a minha formação, contribuir com o
                    desenvolvimento da empresa enquanto tenho a oportunidade de construir minha carreira na área da
                    tecnologia e me desenvolver no âmbito profissional e pessoal.
                </p>
            </div>
            <div>
                <h3>
                    Experiência profissional
                </h3>
                <ul>
                    <li>
                        Auxiliar administrativo (01/2020 - 04/2021) - Realizava organização dos documentos e produtos da loja, atendimento ao cliente (telefone, e-mail e caixa).
                    </li>
                </ul>
            </div>
            <div>
                <h3>
                    Formação Acadêmica
                </h3>
                <ul>
                    <li>
                        Análise e Desenvolvimento de Sistemas (03/2023 - atualmente) - Estácio
                    </li>
                    <li>
                        Curso de desenvolvimento full-stack (2022-2023) - Trybe
                    </li>
                </ul>
            </div>
            <div>
                <h3>
                    Tecnologias com experiência
                </h3>
                <ul>
                    <li>HTML e responsividade - intermediário</li>
                    <li>CSS e Flexbox - intermediário</li>
                    <li>Grid - básico</li>
                    <li>Sass - básico</li>
                    <li>JavaScript - intermediário</li>
                    <li>ReactJS - intermediário</li>
                    <li>Python - básico</li>
                    <li>Git e Github - intermediário</li>
                </ul>
            </div>
        </section>
    );
}