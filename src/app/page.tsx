import App2 from "@/components/App2";
import styles from "./page.module.css";

import App from "@/components/App";
export default async function Home() {
  const serverFn = async () => {
    "use server";
    const d = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      next: { revalidate: 10 },
    });
    const data = await d.json();
    console.log(data, "data");
    return data;
  };

  const data = await serverFn();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h3>{data?.title}</h3>
          <h4>{data?.title}</h4>
          <App />
        </div>
        <div>
          <App2 />
        </div>
      </main>
    </div>
  );
}
