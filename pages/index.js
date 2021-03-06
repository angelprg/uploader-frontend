import Layout from "@components/Layout";
import ImagesList from "../components/ImagesList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Uploader Home Page">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Uploader!</h1>

          <p className={styles.description}>
            Take a look at existing collections:
          </p>
          <ImagesList />
        </main>
      </div>
    </Layout>
  );
}
