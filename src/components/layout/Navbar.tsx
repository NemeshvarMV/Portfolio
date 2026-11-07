import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { profileData } from '../../data/profileData';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          isScrolled
            ? 'bg-slate-50/90 dark:bg-[#0a0d14]/90 backdrop-blur-md border-b border-slate-200 dark:border-surface-border shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Logo / Monogram */}
            <a
              href="#home"
              className="flex items-center gap-3 text-slate-900 dark:text-slate-100 hover:text-black dark:hover:text-white transition-colors group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border text-brand-accent group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-colors shadow-xs">
                NMV
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-black dark:group-hover:text-white">
                  {profileData.name}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline-block">
                  AI Full Stack Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-slate-900 dark:text-white bg-slate-200/80 dark:bg-surface-card border border-slate-300 dark:border-surface-border font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-surface-card/60'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTAs & Theme Switcher */}
            <div className="hidden md:flex items-center gap-2.5">
              <ThemeToggle />

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-surface-card border border-slate-200 dark:border-surface-border hover:bg-slate-100 dark:hover:bg-surface-elevated hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-surface-base"
              >
                <FileText className="w-3.5 h-3.5 text-brand-accent" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Mobile Actions: Circular Theme Toggle & Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-surface-card border border-transparent hover:border-slate-300 dark:hover:border-surface-border focus:outline-none focus:ring-2 focus:ring-brand-accent"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Backdrop Blur Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-slate-900/40 dark:bg-black/60 backdrop-blur-md z-30 md:hidden animate-fade-in transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-16 z-40 bg-slate-50/95 dark:bg-[#0a0d14]/95 backdrop-blur-xl border-b border-slate-200 dark:border-surface-border shadow-2xl animate-fade-in-up transition-all"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="px-4 py-6 space-y-3">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-surface-card rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200 dark:border-surface-border flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-md bg-white dark:bg-surface-card text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-surface-border hover:bg-slate-100 dark:hover:bg-surface-elevated hover:border-slate-400 dark:hover:border-slate-500 transition-colors shadow-xs"
              >
                <FileText className="w-4 h-4 text-brand-accent" />
                <span>Download Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-md bg-brand-accent text-white dark:text-slate-950 hover:bg-brand-accent/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
