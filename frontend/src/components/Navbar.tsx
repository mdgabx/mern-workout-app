import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header className="p-8 bg-cyan-800">
            <div className="container w-full flex justify-between">
                <Link to="/" >
                    <h1 className="text-3xl text-white font-poppins font-bold">Workout App</h1>
                </Link>
                <nav className="flex items-center justify-end">
                  <div className="flex gap-2 font-poppins text-white">
                    <Link to="/login" className="hover:text-gray-500">Login</Link>
                    <Link to="/signup" className="hover:text-gray-500">Signup</Link>
                  </div>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar