import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header className="p-8 bg-cyan-800">
            <div className="container">
                <Link to="/" >
                    <h1 className="text-3xl text-white font-poppins font-bold">Workout App</h1>
                </Link>
                <nav>
                  <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                  </div>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar