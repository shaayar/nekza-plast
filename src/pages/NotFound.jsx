import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 text-center">
      <div>
        <h1 className="text-7xl font-bold text-primary">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          This page wandered off.
        </h2>

        <p className="mt-3 text-zinc-600">
          The page you’re looking for doesn’t exist or has moved.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            data-cursor="Open"
            className="rounded-full bg-zinc-950 px-6 py-3 text-white hover:bg-primary"
          >
            Go Home
          </Link>

          <Link
            to="/products"
            data-cursor="Shop"
            className="rounded-full border border-zinc-300 px-6 py-3 hover:border-primary hover:text-primary"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}