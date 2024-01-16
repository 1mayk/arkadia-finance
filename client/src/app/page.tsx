import "../styles/instagram.css";
import ArkadiaLink from "@/components/ArkadiaLink";

export default function Home() {
  return (
    <main>
      <section className="arkadia__header">
        <h1>Arkadia</h1>
        <h2>Finance</h2>
      </section>
      <section className="container">
        <ArkadiaLink
          linkAddress="https://google.com"
          arkadiaTitle="Primeiro Link"
        />
        <ArkadiaLink
          linkAddress="https://google.com"
          arkadiaTitle="Segundo Link Nome Longo"
        />
        <ArkadiaLink linkAddress="https://google.com" arkadiaTitle="Link" />
      </section>
    </main>
  );
}
