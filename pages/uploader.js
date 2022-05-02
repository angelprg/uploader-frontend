import Layout from "@components/Layout";
import UploadForm from "@components/UploadForm";
import styles from "../styles/Home.module.css";

export default function UploaderPage() {
  return (
    <Layout title="Upload your images" > 
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Uploader!</h1>

          <p className={styles.description}>
            Get started by uploading your files
          </p>
          <UploadForm />
        </main>
      </div>
    </Layout>
  );
}
