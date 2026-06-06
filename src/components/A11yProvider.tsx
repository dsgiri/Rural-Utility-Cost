import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
type FontSize = 'small' | 'normal' | 'large' | 'xlarge';
type Contrast = 'normal' | 'high';
type Motion = 'normal' | 'reduced';

interface A11yState {
  theme: Theme;
  fontSize: FontSize;
  contrast: Contrast;
  motion: Motion;
}

interface A11yContextType extends A11yState {
  setTheme: (theme: Theme) => void;
  setFontSize: (size: FontSize) => void;
  setContrast: (contrast: Contrast) => void;
  setMotion: (motion: Motion) => void;
  reset: () => void;
}

const A11yContext = createContext<A11yContextType | undefined>(undefined);

export function A11yProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('a11y_theme') as Theme) || 'system';
    }
    return 'system';
  });
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('a11y_fontSize') as FontSize) || 'normal';
    }
    return 'normal';
  });
  const [contrast, setContrast] = useState<Contrast>(() => {
    if (typeof window !== 'undefined') {
        return (localStorage.getItem('a11y_contrast') as Contrast) || 'normal';
    }
    return 'normal';
  });
  const [motion, setMotion] = useState<Motion>(() => {
    if (typeof window !== 'undefined') {
        return (localStorage.getItem('a11y_motion') as Motion) || 'normal';
    }
    return 'normal';
  });

  useEffect(() => {
    localStorage.setItem('a11y_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  // Listen for system theme changes if set to 'system'
  useEffect(() => {
    if (theme !== 'system') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const root = document.documentElement;
      if (e.matches) {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('a11y_fontSize', fontSize);
    const root = document.documentElement;
    if (fontSize === 'small') root.style.fontSize = '14px';
    else if (fontSize === 'large') root.style.fontSize = '18px';
    else if (fontSize === 'xlarge') root.style.fontSize = '20px';
    else root.style.fontSize = '16px';
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('a11y_contrast', contrast);
    const root = document.documentElement;
    if (contrast === 'high') {
      root.classList.add('high-contrast');
      root.setAttribute('data-contrast', 'high');
    } else {
      root.classList.remove('high-contrast');
      root.setAttribute('data-contrast', 'normal');
    }
  }, [contrast]);

  useEffect(() => {
    localStorage.setItem('a11y_motion', motion);
    const root = document.documentElement;
    if (motion === 'reduced') {
      root.classList.add('reduced-motion');
      root.setAttribute('data-motion', 'reduced');
    } else {
      root.classList.remove('reduced-motion');
      root.setAttribute('data-motion', 'normal');
    }
  }, [motion]);

  const reset = () => {
    setTheme('system');
    setFontSize('normal');
    setContrast('normal');
    setMotion('normal');
  };

  return (
    <A11yContext.Provider value={{ theme, fontSize, contrast, motion, setTheme, setFontSize, setContrast, setMotion, reset }}>
      {children}
    </A11yContext.Provider>
  );
}

export function useA11y() {
  const context = useContext(A11yContext);
  if (!context) throw new Error('useA11y must be used within A11yProvider');
  return context;
}
