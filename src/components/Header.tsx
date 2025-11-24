import { Link, redirect } from "react-router-dom";


export default function Header() {
    const handelLogin = () => {
        redirect("/login");
    }

  return (
    <header className="bg-blue-500 p-4 text-white justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/home" className="hover:underline" >Home</Link>
        <Link to="/login" className="hover:underline" >Login</Link>
        
        <div>
            <button onClick={handelLogin}>Logout</button>
        </div>
      </div>
    </header>
  );
}