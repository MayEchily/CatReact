import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  var Nome: string = "Meria";

  return (
    <>
      <Head>
        <title>Aplicativo maria</title>
        <meta name="description" content="aplicativo criado para a Maria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>CatReact</h1>
        <div className={styles.catGrid}>
          <Image src={"/gato1.jpeg"} width={100} height={100} alt={"gato1"} />
          <Image src={"/gato2.jpeg"} width={100} height={100} alt={"gato1"} />
          <Image src={"/gato3.jpeg"} width={100} height={100} alt={"gato1"} />
          <Image src={"/gato4.jpeg"} width={100} height={100} alt={"gato1"} />
        </div>
      </main>
    </>
  );
}
