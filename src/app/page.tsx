import styles from "./page.module.css";
import Map from "../components/Map";
import ThemeToggle from "../components/ThemeToggle"; // Importar el componente ThemeToggle con use client

export default function Home() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>AlertHive</div>
                <div className={styles.config}>
                    <button>Configuracion</button>
                    {/* Aquí puedes agregar la lógica para abrir la ventana de configuración */}
                    <ThemeToggle />
                </div>
            </nav>
            <main className={styles.main}>
                <Map />
            </main>
        </>
    );
}
