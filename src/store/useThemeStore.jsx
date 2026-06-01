import { create } from 'zustand'
export const useThemeStore = create((set) => {
  const intialTheme = localStorage.getItem('theme') === 'dark';
  if (intialTheme ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  return {
    theme: intialTheme,
    toggleTheme: () => set((state) => {
      const nextTheme = !state.theme;
      if(nextTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return { theme: nextTheme };
    }),
  };
});
export default useThemeStore;