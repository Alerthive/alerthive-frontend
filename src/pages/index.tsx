import styles from "@styles/page.module.css";
import Map from "./dashboard/Map";

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>AlertHive</div>
        <div className={styles.config}>
          <button>Configuracion</button>
          {/* Aquí puedes agregar la lógica para abrir la ventana de configuración */}
        </div>
      </nav>
      <main className={styles.main}>
        <Map />
        
      </main>
    </> 
  );
}
