import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">404 Page</p>
        <h1 className="mt-4 text-5xl font-black text-slate-950">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page you opened may have moved, or the link may be incorrect.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="rounded-full bg-blue-700 px-7 py-4 font-bold text-white">
            Go Home
          </Link>
          <Link to="/products" className="rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-900">
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
