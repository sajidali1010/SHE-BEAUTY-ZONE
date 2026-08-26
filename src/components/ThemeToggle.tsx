import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'header' | 'mobile' | 'floating';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'header' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'mobile') {
    return (
      <button
        id="theme-toggle-mobile"
        type="button"
        onClick={toggleTheme}
        className={`w-full py-3 px-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${
          isDark
            ? 'bg-[#25211D] border-[#C2A386]/30 text-[#F3E9DC] hover:border-[#C2A386]'
            : 'bg-[#F3EDE4] border-[#9E7B5C]/30 text-[#241E19] hover:border-[#9E7B5C]'
        }`}
        aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDark ? 'bg-[#171614] text-[#C2A386]' : 'bg-[#FFFFFF] text-[#9E7B5C] shadow-sm'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </div>
          <div className="text-left">
            <p className="text-xs uppercase tracking-wider font-medium">
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </p>
            <p className={`text-[10px] ${isDark ? 'text-[#E8DCCF]/60' : 'text-[#584D43]/70'}`}>
              {isDark ? 'Switch to warm porcelain silk' : 'Switch to evening luxury onyx'}
            </p>
          </div>
        </div>

        <div
          className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-300 flex items-center ${
            isDark ? 'bg-[#171614] justify-start' : 'bg-[#9E7B5C] justify-end'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full shadow-md transition-transform duration-300 ${
              isDark ? 'bg-[#C2A386] translate-x-0' : 'bg-[#FFFFFF]'
            }`}
          />
        </div>
      </button>
    );
  }

  // Header desktop variant: sleek pill toggle
  return (
    <button
      id="theme-toggle-header"
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center gap-2 p-1.5 px-3 rounded-full border transition-all duration-300 cursor-pointer ${
        isDark
          ? 'bg-[#1E1C19]/80 border-[#C2A386]/30 text-[#F3E9DC] hover:border-[#C2A386] hover:bg-[#25211D]'
          : 'bg-[#F3EDE4]/90 border-[#9E7B5C]/35 text-[#241E19] hover:border-[#9E7B5C] hover:bg-[#FAF7F2] shadow-sm'
      }`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-[#C2A386] transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-[#9E7B5C] transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>

      <span
        className={`text-[10px] tracking-[0.18em] uppercase font-medium select-none ${
          isDark ? 'text-[#DFCAAF]' : 'text-[#7E5F43]'
        }`}
      >
        {isDark ? 'Light' : 'Dark'}
      </span>

      {/* Subtle indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isDark ? 'bg-[#C2A386]' : 'bg-[#9E7B5C]'
        }`}
      />
    </button>
  );
};
