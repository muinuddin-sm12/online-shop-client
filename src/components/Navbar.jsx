import { Link } from "react-router-dom"
import logo from '../../public/logo.png'
import Button from "./Button"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = async () => {
    await logOut()
    toast.success('Logout Successful')
  }
  // console.log(user?.photoURL)
  return (
    <div className="py-6 px-6 md:px-20 border-b ">
        <div className="flex justify-between items-center">
            <Link to={'/'}>
            <img className="h-14" src={logo} alt="" />
            </Link>
            <div className="flex items-center text-[#153448] gap-6">
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
            </div>
            <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border-[#3C5B6F] border-[2px] overflow-hidden">
            <img
              className="rounded-full h-full w-full object-cover"
              src={user && user?.photoURL && user?.photoURL}
            />
          </div>

          {user ? (
            <>
              <div
                onClick={handleLogOut}
                className="ml-3"
              >
                <Button name='Logout'/>
              </div>
            </>
          ) : (
            <div className="flex  px-3 py-2  items-center gap-3">
              <Link to="/login" className="">
                <Button name="Login" />
              </Link>
              <Link to="/register" className="hidden md:block">
                <Button name="Register" />
              </Link>
            </div>
          )}
        </div>
        </div>
    </div>
  )
}

export default Navbar