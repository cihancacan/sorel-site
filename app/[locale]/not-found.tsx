import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-sorel-cream">
      <div className="text-center px-6">
        <p className="sorel-label mb-6">404</p>
        <div className="sorel-divider mx-auto mb-8" />
        <h1 className="sorel-heading text-5xl md:text-7xl mb-6">Page introuvable</h1>
        <p className="text-sm text-sorel-silver font-light mb-12 max-w-sm mx-auto">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/fr" className="sorel-btn-primary">
            Accueil FR
          </Link>
          <Link href="/en" className="sorel-btn-outline">
            Home EN
          </Link>
        </div>
      </div>
    </section>
  );
}
