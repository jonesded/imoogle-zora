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
      className="h-8 w-8 p-0 hover:bg-dark-3 border border-dark-3"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-dark-1" />
      ) : (
        <Sun className="h-4 w-4 text-yellow-1" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;