import { useEffect, useState } from 'react';

export interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800,
  loop = true,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion || words.length === 0) {
      return;
    }

    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && subIndex === currentWord.length) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)));
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, loop, reducedMotion]);

  if (reducedMotion || words.length === 0) {
    return {
      text: words[0] || '',
      isTyping: false,
    };
  }

  const currentWord = words[wordIndex % words.length];
  return {
    text: currentWord.substring(0, subIndex),
    isTyping: !isPaused,
  };
}
