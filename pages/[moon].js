import Image from "next/image";
import { useRouter } from "next/router";
import moons from "../moons";

export default function Moon() {
  const router = useRouter();
  const moon = moons[router.query.moon];

  if (!moon) {
    return <p>Unknown moon</p>;
  }

  return (
    <>
      <title>{moon.name}</title>
      <div
        style={{
          marginLeft: "30%",
          marginRight: "30%",
        }}
      >
        <h1>{moon.name}</h1>
        <figure>
          <img src={moon.img} alt={moon.name} />
          <figcaption>{moon.caption}</figcaption>
        </figure>
        <p>{moon.description}</p>
      </div>
    </>
  );
}
