export default function StaticPage({ title, description }) {
  return (
    <section className="section-shell min-h-screen bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[900px] text-center">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">{title}</h1>
        <p className="mt-4 text-zinc-600">
          {description || "This page is available and will be updated with complete content soon."}
        </p>
      </div>
    </section>
  );
}
