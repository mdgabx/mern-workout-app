import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header className="p-8 bg-cyan-800">
            <div className="container">
                <Link to="/" >
                    <h1 className="text-xl text-white">Workout App</h1>
                </Link>
            </div>
        </header>
    </div>
  )
}

export default Navbar