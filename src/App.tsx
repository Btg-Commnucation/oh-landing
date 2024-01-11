import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import styles from "./App.module.css";
import ohLogo from "./assets/oh.svg";

function App() {
  return (
    <div className={styles.container}>
      <section className={styles.textContainer}>
        <div className={styles.logoContainer}>
          <img src={ohLogo} alt="Logo de Oh" />
          <h1>Site en construction</h1>
        </div>

        <address className={styles.address}>
          <strong>Pour me contacter :</strong>
          <p>ODILE HIOLIN</p>
          <a href="mailto:odilehiolin.oh@gmail.com">odilehiolin.oh@gmail.com</a>
          <a href="tel:+33674931282">Tél / +33 6 74 93 12 82</a>
          <p>Paris / 55bd Marguerite de Rochechouart - 75018 Paris</p>
          <p>Bretagne / 8 rue Pratmer - 56610 Arradon</p>
        </address>
      </section>
      <section className={styles.imageContainer}>
        <div className={styles.photographie}>
          <p>phOtographie</p>
        </div>
        <div className={styles.identite}>
          <p>identité visuelle</p>
        </div>
      </section>
    </div>
  );
}

export default App;
