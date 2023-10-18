import { NavLink } from "react-router-dom";

const Header = () => {

   const navbar=<>
     <li className="uppercase ml-2 font-lg">
    <NavLink to="/">home</NavLink>
   </li>
   <li className="uppercase ml-2 font-lg">
    <NavLink to="/addproduct">add to product</NavLink>
   </li>
   <li className="uppercase ml-2 font-lg">
    <NavLink to="/addcard"> my cart</NavLink>
   </li>

   <li className="uppercase ml-2 font-lg">
    <NavLink to="/login">login</NavLink>
   </li>

   <li className="uppercase ml-2 font-lg">
    <NavLink to="/register">register</NavLink>
   </li>
   
   
   </>

    return (
        <div>
            

            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navbar
        }
      </ul>
    </div>
    <div>
      <img className="h-12 w-28" src="https://i.ibb.co/hsb7M2Y/images.png" alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
     {
        navbar
     }
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to="/contact" className="btn">constact</NavLink>
  </div>
</div>
            
        </div>
    );
};

export default Header;