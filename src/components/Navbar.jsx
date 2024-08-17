import { Link } from "react-router-dom"
import logo from '../../public/547651b78f7a86921f176525292a948dd513c0fca05e84b684f6dc7b9264ab1c.png'

const Navbar = () => {
  return (
    <div className="py-6 px-6 md:px-20 border-b">
        <div className="flex justify-between items-center">
            <div>
            <img className="h-14" src={logo} alt="" />
            </div>
            <div className="flex items-center text-[#153448] gap-6">
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