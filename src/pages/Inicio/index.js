import styles from "./Inicio.module.css";


export default function ComponenteInicio() {
    return (
        <section id="inicio" className={styles.containerInicio}>
            <div>
                <h2>
                    Vamos criar algo extraordinário <strong>juntos?</strong>
                </h2>
                <p>
                    Bem-vindo ao meu universo digital! Sou Heitor da Costa, um apaixonado desenvolvedor Front-End com expertise especializada em React. Transformo ideias em experiências interativas, trazendo à vida projetos web com elegância e eficiência.
                </p>
            </div>
            
        </section>
    );
}