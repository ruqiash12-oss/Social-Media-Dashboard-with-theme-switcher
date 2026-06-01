import useThemeStore from '../store/useThemeStore'
export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <nav className="flex items-start justify-between pt-7 pb-25 px-4 md:px-20 bg-blue-50 dark:bg-gray-800">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Social Media Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Total Followers: 23,004</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-500 dark:text-gray-400 font-bold">{theme? 'Dark Mode' : 'Light Mode'}</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="radio" 
          onChange={()=>{}}
          className="sr-only peer" 
          checked={theme} 
          onClick={toggleTheme}
           />
          <div className="w-12 h-6 bg-[image:var(--color-gradient-toggle)] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full 
          transition-all duration-300 after:transition-all after:duration-300
          peer-checked:after:-translate-x-full peer-checked:after:border-gray-800 after:content-[''] after:absolute after:top-[2px] after:right-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 dark:after:bg-gray-800 "></div>
        </label>
      </div>
    </nav>
  )
}