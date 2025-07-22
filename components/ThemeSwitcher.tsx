'use client';

import { useTheme } from '@/providers/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="h-9 w-9 p-0 hover:bg-dark-3 dark:hover:bg-dark-3 light:hover:bg-light-3 border border-dark-3 dark:border-dark-3 light:border-light-3 transition-all duration-200"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-dark-1" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-1" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;