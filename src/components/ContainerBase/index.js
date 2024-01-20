import styles from "./ContainerBase.module.css";

export default function ContainerBase({ children }) {
    return (
        <div className={styles.containerBase}>
            { children }
        </div>
    );
}