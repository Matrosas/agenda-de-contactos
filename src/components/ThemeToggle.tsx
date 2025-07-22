import { useEffect,useState } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Obtener tema desde sessionStorage o usar 'light' por defecto
    return sessionStorage.getItem('theme') || 'light'
  })

  // Cambiar clase del body según el tema
  useEffect(() => {
    document.body.className = theme
    sessionStorage.setItem('theme', theme)
  }, [theme])
  
  const handleToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button onClick={handleToggle} className="theme-toggle">
      {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  )
}

export default ThemeToggle