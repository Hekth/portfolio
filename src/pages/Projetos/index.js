import styles from "./Projetos.module.css";
import { projetos, tecnologias } from "projetos";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Projetos() {
    const [trabalhos, setTrabalhos] = useState(projetos);

    const filtraTrabalho = ({target: { value }}) => {
        if (value === "TODOS") {
            setTrabalhos(projetos);
            return;
        }

        setTrabalhos(projetos.filter(({ tag }) => {
            const verificaTag = tag.some((item) => item === value);
            if (verificaTag) return tag;
        }));
    }

    return (
        <section id="projetos" className={styles.projetosContainer}>
                <h2>
                    Projetos
                </h2>
                <select onChange={filtraTrabalho} className={styles.projetosFiltro}>
                    <option key="todos">
                        TODOS
                    </option>
                    {tecnologias.map((tecnologia) => (
                        <option key={tecnologia}>
                            {tecnologia}
                        </option>
                    ))}
                </select>
                <div className={styles.swiperContainer}>
                    <Swiper
                        slidesPerView={1}
                        navigation
                    >
                        {trabalhos.map((trabalho) => (
                            <SwiperSlide key={trabalho.id + trabalho.titulo}>
                                <a href={trabalho.link} target="_blank" rel="noreferrer">
                                    <img src={trabalho.urlImagem} alt={trabalho.titulo} width="400px" />
                                </a>
                                <h3>
                                    {trabalho.titulo}
                                </h3>
                                <a className={styles.repositorio} href={trabalho.urlGithub} target="_blank" rel="noreferrer">Repositório do Github</a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </section>
    );
}