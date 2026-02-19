import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/hack', label: 'Hackathon' },
    { path: '/nxp', label: 'NXP Bootcamp' },
    { path: '/codeblitz', label: 'CodeBlitz' },
    { path: '/icc', label: 'Inter-Club Council' },
  ]

  return (
    <header className="bg-tech-dark/80 backdrop-blur-md border-b border-tech-blue/20 sticky top-0 z-50">
      <nav className="tech-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 h-10 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CTRL</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              SDSU
            </span>
          </Link>

          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`tech-nav-link ${location.pathname === item.path ? 'tech-nav-link-active' : ''}`}
                aria-current={
                  location.pathname === item.path ? 'page' : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
