import Head from "next/head";
import Image from "next/image";
import moons from "../moons";

export default function Home() {
  const moonsList = Object.keys(moons);

  return (
    <div>
      <Head>
        <title>Moons</title>
        <meta name="description" content="To the moons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1
        style={{
          textAlign: "center",
        }}
      >
        Jupiter's Moons
      </h1>
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20",
        }}
      >
        <ul>
          {moonsList.map((moon) => (
            <li key={moon}>
              <a href={`/${moon}`}>{moon}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
