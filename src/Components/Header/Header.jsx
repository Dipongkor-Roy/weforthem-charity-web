import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        {/* nav hidden*/}
     
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/">  <p className="text-2xl text-purple-500">WeTorThem</p></Link>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
           <Link to="/" ><a className="mr-5 hover:text-gray-900">Home</a></Link>
           <Link to="/donation" ><a className="mr-5 hover:text-gray-900">Donation</a></Link>
         <Link to="/events"> <a className="mr-5 hover:text-gray-900">Events</a></Link>  
           <Link to="/admin"> <a className="mr-5 hover:text-gray-900">Admin</a></Link>
          </nav>
         <Link to="/logIn"> <button className="inline-flex items-center text-white  bg-purple-500 border-0 py-2 px-4 mr-2 focus:outline-none hover:bg-purple-600 rounded-md text-base mt-4 md:mt-0">
           LogIn
          </button></Link>
         
         <Link to="/register"> <button className="inline-flex items-center text-white  bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded-md text-base mt-4 md:mt-0">
            Register
          </button></Link>
        </div>
      </header>
    
    </>
  );
};

export default Header;
