import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
            <div className="container bg-gray">
                <Link to="/" >
                    <h1>Workout App</h1>
                </Link>
            </div>
        </header>
    </div>
  )
}

export default Navbar