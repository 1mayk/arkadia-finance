import '../styles/instagram.css';
import ArkadiaLink from '@/components/ArkadiaLink';

export default function Home() {
  return (
    <main>
      <h1>Arkadia</h1>
      <h2>Finance</h2>
      <section className="container">
        <ArkadiaLink arkadiaNumber={1} />
        <ArkadiaLink arkadiaNumber={2} />
        <ArkadiaLink arkadiaNumber={3} />
      </section>
    </main>
  )
}
