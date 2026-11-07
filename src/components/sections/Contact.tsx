import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { LeetCodeIcon } from '../ui/LeetCodeIcon';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profileData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isCopied, setIsCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  // RFC 5322 compliant regex for email validation
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email.trim());
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Fallback
      setIsCopied(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!validateEmail(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formState.subject.trim()) {
      newErrors.subject = 'Please provide a subject line.';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Please provide your message.';
    } else if (formState.message.trim().length < 15) {
      newErrors.message = 'Message should contain at least 15 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Direct, honest email client dispatch
    const mailtoUrl = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmittedStatus('Email client opened with prefilled message! You can also email directly.');
  };

  return (
    <section id="contact" className="py-20 bg-surface-base border-t border-surface-border/50">
      <Container>
        <SectionHeader
          title="Get In Touch"
          eyebrow="COMMUNICATION & INQUIRIES"
          description="Interested in discussing software engineering roles, Agentic AI collaboration, or technical problem solving? Let's connect."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg bg-surface-card border border-surface-border space-y-5">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Direct Contact Details
              </h3>

              {/* Email with copy button */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Email Address</div>
                <div className="flex items-center justify-between gap-2 p-2.5 rounded bg-surface-elevated border border-surface-border">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                    <span className="text-xs font-mono text-slate-800 dark:text-slate-200 truncate">
                      {profileData.contact.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-surface-border text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Phone</div>
                <div className="flex items-center gap-2.5 p-2.5 rounded bg-surface-elevated border border-surface-border">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-800 dark:text-slate-200">
                    {profileData.contact.phone}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400">Location</div>
                <div className="flex items-center gap-2.5 p-2.5 rounded bg-surface-elevated border border-surface-border">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-800 dark:text-slate-200">
                    {profileData.contact.location}
                  </span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 border-t border-surface-border/60">
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mb-3">Professional & Coding Profiles</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded bg-surface-elevated border border-surface-border hover:border-slate-400 text-xs text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors font-mono"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded bg-surface-elevated border border-surface-border hover:border-slate-400 text-xs text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors font-mono"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  {profileData.contact.leetcode && (
                    <a
                      href={profileData.contact.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-2 rounded bg-surface-elevated border border-surface-border hover:border-amber-500/80 text-xs text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-mono"
                    >
                      <LeetCodeIcon className="w-3.5 h-3.5 text-amber-500" />
                      <span>LeetCode</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Resume download prompt */}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-brand-accent text-white dark:text-slate-950 font-semibold hover:bg-brand-accent/90 transition-colors text-xs font-mono shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Complete Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 rounded-lg bg-surface-card border border-surface-border space-y-4"
            >
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                Send a Structured Message
              </h3>

              {submittedStatus && (
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 flex items-start gap-2">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{submittedStatus}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Recruiter / Engineer Name"
                    className={`w-full px-3 py-2 rounded-md bg-surface-elevated border text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.name 
                        ? 'border-rose-500 focus:ring-rose-500' 
                        : 'border-surface-border focus:border-brand-accent focus:ring-brand-accent'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="recruiter@company.com"
                    className={`w-full px-3 py-2 rounded-md bg-surface-elevated border text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.email 
                        ? 'border-rose-500 focus:ring-rose-500' 
                        : 'border-surface-border focus:border-brand-accent focus:ring-brand-accent'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject Line <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Role / Technical Discussion"
                  className={`w-full px-3 py-2 rounded-md bg-surface-elevated border text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                    errors.subject 
                      ? 'border-rose-500 focus:ring-rose-500' 
                      : 'border-surface-border focus:border-brand-accent focus:ring-brand-accent'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                  Message Body <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Share role details, scope of work, or project inquiry..."
                  className={`w-full px-3 py-2 rounded-md bg-surface-elevated border text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                    errors.message 
                      ? 'border-rose-500 focus:ring-rose-500' 
                      : 'border-surface-border focus:border-brand-accent focus:ring-brand-accent'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" className="w-full justify-center">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
