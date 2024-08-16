import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="py-6 border-b">
        <div className="flex justify-between items-center">
            <div>
            <h1 className="text-xl font-medium">logo</h1>
            </div>
            <div className="flex items-center gap-6">
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar