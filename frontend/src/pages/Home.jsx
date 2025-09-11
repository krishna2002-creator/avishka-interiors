import Hero from '../components/Hero.jsx'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container py-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Modular Furniture</h3>
          <p>End-to-end assembly of workstations, storage and ergonomic solutions.</p>
        </div>
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Civil & Interior Works</h3>
          <p>Partitions, false ceilings, flooring, electrical, plumbing and painting.</p>
        </div>
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Pan-India Execution</h3>
          <p>Experienced team, precise quality and timely delivery across locations.</p>
        </div>
      </section>
    </div>
  )
}
