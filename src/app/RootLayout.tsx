import { useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { profile } from '@/data/profile';
const navigation = [
  ['/', 'Accueil'],
  ['/projects', 'Projets'],
  ['/experience', 'Parcours'],
  ['/education', 'Formations'],
  ['/certifications', 'Certifications'],
  ['/contact', 'Contact'],
];
export default function RootLayout() {
  const { pathname } = useLocation();
  const main = useRef<HTMLElement>(null);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo(0, 0);
    main.current?.focus();
  }, [pathname]);
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:p-4">
        Aller au contenu
      </a>
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5"
        >
          <NavLink to="/" className="font-bold tracking-tight text-primary">
            BOUDAD Yasser
            <span className="ml-2 text-xs font-normal text-muted-foreground">
              PORTFOLIO
            </span>
          </NavLink>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {navigation.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-primary underline underline-offset-8'
                    : 'text-muted-foreground hover:text-foreground'
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main
        id="contenu"
        ref={main}
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 outline-none"
      >
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-6 text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} · {profile.name}
          </span>
          <span>Informatique & Éducation · {profile.location}</span>
        </div>
      </footer>
    </div>
  );
}
